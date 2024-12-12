<template>
	<slot></slot>
</template>
<script lang="ts">
import { defineComponent, provide, readonly, useSlots } from "vue";
import { injectFormParam } from "../common/ts/injectType";
import { RuleItem } from "../common/ts/interface";

export default defineComponent({
	name: "DmForm",
	props: {
		labelWidth: {
			type: String,
			default: "6rem",
		},
		labelAlign: {
			type: String,
			default: "left",
		},
		rules: {
			type: Object,
			default: () => {},
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const slots = useSlots();
		provide(injectFormParam, props);

    const asyncValidate = async () => {

    }

    const getRules = () => {
      if(!slots.default) return [];
      const rules:Array<RuleItem> = [];
      console.log(slots.default() || []);
      slots.default().forEach(item => {
        props.rules[item.props?.prop]
      })
    }

    const validate = () => {
      console.log(123);
      const rules = getRules();
      if(!slots.default) return;
      console.log(slots.default() || []);
      slots.default().forEach(item => {
        props.rules[item.props?.prop]
      })
      
    }
		return {validate};
	},
});
</script>
