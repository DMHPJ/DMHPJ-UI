<template>
	<slot ref="formItem"></slot>
</template>
<script lang="ts">
import { defineComponent, provide, Ref, ref } from "vue";
import { injectFormParam } from "../common/ts/injectType";

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
		const valiItem: Ref<Error | false> = ref(false);
		provide(injectFormParam, props);

		const validateItemCallback = (error?: Error) => {
			valiItem.value = error || false;
			if (error) return error;
			else return false;
		};

		const validateItem = async (key: string) => {
			const rules = props.rules[key];
			for (const item of rules) {
				valiItem.value = false;

				if (typeof item.validator === "function") {
					await item.validator(item, props.modelValue["name"], validateItemCallback);
					return valiItem.value;
				}
			}
			return false;
		};

		const validate = async (callback: Function) => {
			const results = await Promise.all(
				Object.keys(props.rules).map(async (item) => {
					return await validateItem(item);
				})
			);
			console.log(results);

			const valid = results.some((result) => result);
			return callback(valid);
		};

		// onMounted(() => {
		//   if (slots.default) {
		//     formItems.value = slots.default().map(item => item.componentInstance);
		//   }
		// });
		return { validate };
	},
});
</script>
