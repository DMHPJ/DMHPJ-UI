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
import { defineComponent, inject, onMounted } from "vue";
import { injectFormParam } from "../common/ts/injectType";
import { RuleItem } from "../common/ts/interface";

export default defineComponent({
	name: "DmFormItem",
	props: {
		label: { type: String, default: "" },
		prop: { type: String, default: "" },
	},
	setup(props, { expose }) {
		const formParam = inject(injectFormParam);

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

		const testVali = (error: Error) => {
			return new Promise((resolve, reject) => {
				if (error) {
					resolve(false);
				} else {
					reject(true);
				}
			});
		};

		const getRules = () => {
			if (!formParam) return {};
			const ruleList: Array<RuleItem> = formParam.rules[props.prop];
			ruleList.forEach((item) => {
				if (typeof item.validator === "function") {
					item.validator(item, formParam.model[props.prop], testVali);
				}
			});
			return formParam.rules[props.prop] || [];
		};

		const validate = () => {
			const rules = getRules();
		};

		onMounted(() => {
			if (!formParam) return console.error("formItem需在form组件内");
			console.log(formParam.labelAlign, props);
		});

		expose({validate})

		return { isRequired, getStyle, validate };
	},
});
</script>
