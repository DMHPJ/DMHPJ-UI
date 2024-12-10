<template>
	<div
		:class="[setClass(), shadow && 'dm-button-shadow']"
		:style="{ display: block ? 'block' : 'inline-block' }"
		@click="handleClick">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DmButton",
	props: {
		readonly: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		plain: { type: Boolean, default: false },
		type: { type: String, default: "default" },
		size: { type: String, default: "default" },
		loading: { type: Boolean, default: false },
		block: { type: Boolean, default: false },
		shadow: { type: Boolean, default: false },
	},
	emits: ["click"],
	setup(props, { emit }) {
		const setClass = () => {
			if (props.disabled && props.plain) return "dm-button-plain-disabled";
			if (props.disabled) return "dm-button-disabled";
			if (props.plain) return "dm-button-plain";
			return "dm-button-" + props.type;
		};

		const handleClick = (event: Event) => {
			if (props.readonly) return;
			if (props.disabled) return;
			emit("click", event);
		};

		return {
			setClass,
			handleClick,
		};
	},
});
</script>
