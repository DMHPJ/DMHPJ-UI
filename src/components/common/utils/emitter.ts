// src/composables/useEmitter.ts
import { getCurrentInstance, ComponentPublicInstance } from "vue";
import { stringKeyObject } from "../ts/interface";

interface CustomComponent extends ComponentPublicInstance {
	$children: ComponentPublicInstance[];
	parent: ComponentPublicInstance | null;
	root: ComponentPublicInstance;
	$options: ComponentPublicInstance["$options"];
}

function mainBroadcast(
	this: CustomComponent,
	componentName: string,
	eventName: string,
	params: any[]
) {
	// 遍历当前组件的所有子组件
	this.$children.forEach((child: ComponentPublicInstance) => {
		// 获取子组件的名称
		const name = child.$options.name;

		// 如果子组件名称匹配目标组件名称，则触发事件
		if (name === componentName) {
			child.$emit.apply(child, [eventName, ...params]);
		} else {
			// 如果名称不匹配，则递归调用broadcast方法继续在子组件的子组件中寻找
			mainBroadcast.apply(child as CustomComponent, [componentName, eventName, params]);
		}
	});
}

export function useEmitter() {
	const instance = getCurrentInstance();

	const dispatchUpward = (componentName: string, eventName: string, params: any) => {
		let parent = instance?.parent || instance?.root || null;
		let name = parent?.type.name;

		// 循环查找直到找到指定名称的组件或到达根组件
		while (parent && (!name || name !== componentName)) {
			parent = parent.parent;
			if (parent) {
				name = parent?.type.name;
			}
		}

		if (parent && typeof (parent?.proxy as stringKeyObject)[eventName] === "function") {
			(parent?.proxy as stringKeyObject)[eventName](...params);
		}
	};

	const dispatchDownward = () => {};

	const broadcast = (componentName: string, eventName: string, params: any[]) => {
		mainBroadcast.call(instance as unknown as CustomComponent, componentName, eventName, params);
	};

	return { dispatchUpward, dispatchDownward, broadcast };
}
