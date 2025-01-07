<template>
	<div class="dm-toast" v-if="modelValue">
		<div class="dm-toast-content">
			<DmIcon class="dm-toast-icon" v-if="icon" :name="icon" :size="iconSize" :color="iconColor"></DmIcon>
			<div class="dm-toast-text">
				<slot> {{ message }} </slot>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import dmIcon from "../icon/index.vue";
import { defineComponent, watch } from "vue";

export default defineComponent({
	name: "DmToast",
	props: {
		modelValue: { type: Boolean, default: false },
		icon: { type: String, default: "" },
		iconSize: { type: [Number, String], default: "2.25rem" },
		iconColor: { type: String, default: "#FFFFFF" },
		message: { type: String, default: "" },
		duration: { type: Number, default: 2000 },
	},
	setup(props, { emit }) {
		let timer: number;
		watch(
			() => props.modelValue,
			(newV) => {
				if (newV) {
					clearInterval(timer);
					timer = setTimeout(() => {
						emit("update:modelValue", false);
					}, props.duration);
				}
			}
		);

		return { dmIcon }
	},
});
</script>
