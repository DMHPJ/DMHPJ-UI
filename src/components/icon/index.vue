<template>
	<div :class="['dm-icon', name]" :style="getStyle()"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { stringKeyObject } from "../common/ts/interface";

export default defineComponent({
	name: "DmIcon",
	props: {
		name: { type: String, default: "" },
		color: { type: String, default: null },
		size: { type: [String, Number], default: "1rem" },
	},
	setup(props) {
		const getStyle = () => {
			const style: stringKeyObject = {};
			if (props.color) style["color"] = props.color;
			style["font-size"] = props.size;
			return style;
		};

		return { getStyle };
	},
});
</script>
