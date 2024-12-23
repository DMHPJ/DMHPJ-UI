<template>
	<div class="dm-form-item">
		<div
			class="dm-form-item-label"
			:class="{
				'dm-form-item-required': isRequired(),
			}"
			:style="getStyle()">
			<slot name="label">
				{{ label }}
			</slot>
		</div>
		<div class="dm-form-item-content">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted, ref, Ref } from "vue";
import { injectFormParam } from "../common/ts/injectType";
import { RuleItem } from "../common/ts/interface";
import { isNull } from "../common/utils/validate";

export default defineComponent({
	name: "DmFormItem",
	props: {
		label: { type: String, default: "" },
		prop: { type: String, default: "" },
	},
	setup(props, { expose }) {
		const valiItem: Ref<Error | false> = ref(false);
		const formParam = inject(injectFormParam);
		const instance = getCurrentInstance();
		const isRequired = () => {
			const index = formParam?.rules?.[props.prop]?.findIndex((item) => item.required);
			return typeof index === "number" && index > -1;
		};

		const getStyle = () => {
			if (!formParam) return {};
			const { labelAlign, labelWidth } = formParam;
			return {
				width: labelWidth,
				justifyContent: labelAlign,
			};
		};

		const validateItemCallback = (error?: Error) => {
			valiItem.value = error || false;
			if (error) return error;
			else return false;
		};

		const validateItem = async (item: RuleItem) => {
			valiItem.value = false;

			if (typeof item.validator === "function") {
				await item.validator(item, formParam?.modelValue[props.prop], validateItemCallback);
				return valiItem.value;
			} else if (item.required && isNull(formParam?.modelValue[props.prop])) {
				return true;
			}
			return false;
		};

		const getRules = () => {
			if (!formParam) return [];
			const ruleList: Array<RuleItem> = formParam.rules[props.prop];
			return ruleList || [];
		};

		const validate = async () => {
			const ruleList = getRules();
			const results = await Promise.all(
				ruleList.map(async (item) => {
					return await validateItem(item);
				})
			);
			const valid = results.some((result) => result);
			return valid;
		};

		onMounted(() => {
			if (!formParam) return console.error("formItem需在form组件内");
			if (formParam && instance) {
				formParam.registerFormItem(instance);
			}
		});

		expose({ validate });

		return { isRequired, getStyle, validate };
	},
});
</script>
