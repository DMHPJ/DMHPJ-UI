<template>
	<div class="dm-rate" :style="rateStyle">
		<div
			class="dm-rate-item"
			v-for="(item, index) in Number(count)"
			:key="index"
			@click="handleClick($event, index)">
			<dm-icon class="dm-rate-icon-full" v-if="item <= modelValue" :name="icon"></dm-icon>
			<div class="dm-rate-icon-halt" v-else>
				<dm-icon class="dm-rate-icon-empty" :name="voidIcon"></dm-icon>
				<dm-icon
					class="dm-rate-icon-color"
					:style="{ width: setHaltWidth(item) }"
					:name="icon"></dm-icon>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
	name: "DmRate",
	props: {
		modelValue: { type: Number, default: 0 },
		count: { type: [Number, String], default: 5 },
		size: { type: [Number, String], default: "1rem" },
		gutter: { type: [Number, String], default: "0.25rem" },
		allowHalf: { type: Boolean, default: false },
		color: { type: String, default: "#ffd21e" },
		voidColor: { type: String, default: "#c6c6c6" },
		disabledColor: { type: String, default: "#c6c6c6" },
		icon: { type: String, default: "star" },
		voidIcon: { type: String, default: "star-o" },
		disabled: { type: Boolean, default: false },
		readonly: { type: Boolean, default: false },
	},
	setup(props, { emit }) {
		const rateStyle = computed(() => ({
			"--dm-rate-icon-full-size": props.size,
			"--dm-rate-icon-empty-size": props.size,
			"--dm-rate-icon-color-size": props.size,
			"--dm-rate-item-margin-right": props.gutter,
			"--dm-rate-icon-full-color": props.color,
			"--dm-rate-icon-empty-color": props.voidColor,
			"--dm-rate-icon-color-color": props.color,
			"--dm-rate-disabled-color": props.disabledColor,
		}));

		const setHaltWidth = (index: number) => {
			const point = props.modelValue - index + 1;
			if (point <= 0) return "0px";
			if (point >= 1) return "100%";
			return point * 100 + "%";
		};

		const handleClick = (event: MouseEvent, index: number) => {
			if (props.disabled || props.readonly) return;
			const target = event.target as HTMLElement;
			if (props.allowHalf) {
				const offsetLeft =
					target.offsetLeft === 0
						? (target.offsetParent as HTMLElement).offsetLeft
						: target.offsetLeft;
				if (event.x - offsetLeft <= target.clientWidth / 2) {
					return emit("update:modelValue", index + 0.5);
				}
			}
			return emit("update:modelValue", index + 1);
		};

		return { setHaltWidth, handleClick, rateStyle };
	},
});
</script>
