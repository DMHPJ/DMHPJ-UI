<template>
	<slot ref="formItem"></slot>
</template>
<script lang="ts">
import { ComponentInternalInstance, defineComponent, provide, Ref, ref } from "vue";
import { injectFormParam } from "../common/ts/injectType";
import { isNull } from "../common/utils/validate";

export default defineComponent({
	name: "DmForm",
	props: {
		modelValue: { type: Object, default: () => {} },
		labelWidth: { type: String, default: "6rem" },
		labelAlign: { type: String, default: "left" },
		rules: { type: Object, default: () => {} },
		readonly: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
	},
	setup(props) {
		const formItems: Ref<ComponentInternalInstance[]> = ref([]);
		const registerFormItem = (instance: ComponentInternalInstance) => {
			formItems.value.push(instance);
		};

		provide(injectFormParam, { ...props, registerFormItem });

		const validate = async (callback: Function) => {
			if (isNull(formItems.value)) return callback(false);
			const results = await Promise.all(
				formItems.value.map((item) => item?.exposed?.validate())
			);
			const valid = results.some((result: boolean) => result);
			return callback(valid);
		};
		return { validate };
	},
});
</script>
