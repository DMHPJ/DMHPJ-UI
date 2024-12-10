<template>
	<div
		:class="['dm-card', shadow && 'dm-card-shadow']"
		:style="{ '--dm-card-width': calcWidth, '--dm-card-height': calcHeight }">
		<div class="dm-card-header" v-if="title || $slots.header">
			<slot name="header">
				<div>{{ title }}</div>
			</slot>
		</div>
		<div class="dm-card-body">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
	name: "DmCard",
	props: {
		title: { type: String, default: "" },
		shadow: { type: Boolean, default: false },
		width: { type: [String, Number], default: "auto" },
		height: { type: [String, Number], default: "auto" },
	},
	setup(props) {
		const internalWidth = ref(props.width);
		const internalHeight = ref(props.height);

		const calcWidth = computed(() => {
			if (typeof internalWidth.value === "number") {
				return internalWidth.value + "px";
			} else {
				return internalWidth.value;
			}
		});

		const calcHeight = computed(() => {
			if (typeof internalHeight.value === "number") {
				return internalHeight.value + "px";
			} else {
				return internalHeight.value;
			}
		});

		return {
			calcWidth,
			calcHeight,
		};
	},
});
</script>
<style lang="scss" scoped>
@use "../common/style/card.scss";
</style>
