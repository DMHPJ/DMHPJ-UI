<template>
	<div v-if="show" class="dm-popup" :style="{ zIndex: zIndex }">
		<div v-if="overlay" class="dm-popup-overlay" @click="hanleClickOverlay"></div>
		<div
			class="dm-popup-content"
			:class="['dm-popup-' + position, getAnimationClass(show, position)]"
			:style="{ animationDuration: duration + 'ms' }">
			<slot name="header"></slot>
			<div class="dm-popup-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { PopupPositionType } from "../common/ts/type";
import { defineComponent, nextTick, PropType, watch } from "vue";

export default defineComponent({
	name: "DmPopup",
	props: {
		show: { type: Boolean, default: false },
		overlay: { type: Boolean, default: true },
		closeByClickOverlay: { type: Boolean, default: true },
		position: { type: String as PropType<PopupPositionType>, default: "bottom" },
		duration: { type: [Number, String], default: 300 },
		zIndex: { type: [Number, String], default: 2000 },
		lockScroll: { type: Boolean, default: true },
	},
	setup(props, { emit }) {
		const hanleClickOverlay = (e: Event) => {
			if (props.closeByClickOverlay) {
				emit("update:show", false);
			}
			emit("click-overlay", e);
		};

		watch(
			() => props.show,
			(newV) => {
				if (newV) {
					emit("before-open");
					nextTick(() => emit("opened"));
				} else {
					emit("before-close");
					nextTick(() => {
						emit("closed");
					});
				}
			}
		);

		const getAnimationClass = (show: boolean, position: PopupPositionType): string => {
			switch (position) {
				case "center":
					return show ? "animate-slide-in-center" : "animate-slide-out-center";
				case "bottom":
					return show ? "animate-slide-in-bottom" : "animate-slide-out-bottom";
				case "left":
					return show ? "animate-slide-in-left" : "animate-slide-out-left";
				case "right":
					return show ? "animate-slide-in-right" : "animate-slide-out-right";
				default:
					return "";
			}
		};

		return { hanleClickOverlay, getAnimationClass };
	},
});
</script>