<template>
	<div class="dm-checkbox-group" role="group" aria-label="checkbox-group">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, provide } from "vue";

export default defineComponent({
	name: "DmCheckboxGroup",
	props: {
		modelValue: { type: Object, default: {} },
		min: { type: Number, default: 0 },
		max: { type: Number, default: 100 },
		disabled: { type: Boolean, default: false },
		size: { type: String, default: "default" },
		fill: { type: String, default: "default" },
		textColor: { type: String, default: "#333" },
	},
	emits: ["update:modelValue"],
	setup(props, { emit, expose }) {
		const instance = getCurrentInstance();
		provide("dmCheckboxGroup", instance);
		const _dmFormItemSize = computed(() => (inject("dmFormItem") as any)?.dmFormItemSize);
		const checkboxGroupSize = computed(
			() => props.size || _dmFormItemSize.value || (inject("$ELEMENT") as any)?.size
		);

		// const { dispatchUpward } = useEmitter();

		// const valueRef = toRef(props, 'modelValue');
		// console.log(valueRef);

		// watch(props.modelValue, (value) => {
		// 	console.log("groupWatcher");
		// 	console.log("groupWatcher", value);

		// 	dispatchUpward("DmFormItem", "dm.form.change", [value]);
		// });

		const input = (newValue: any) => {
			emit("update:modelValue", newValue);
		};

		expose({ input });

		return { checkboxGroupSize };
	},
});
</script>