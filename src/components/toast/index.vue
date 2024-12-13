<template>
	<div class="dm-toast" v-if="modelValue">
		<div class="dm-toast-content">
			<dm-icon class="dm-toast-icon" v-if="icon" :name="icon"></dm-icon>
			<div class="dm-toast-text">
				<slot> {{ message }} </slot>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
	name: "DmToast",
	props: {
		modelValue: { type: Boolean, default: false },
		icon: { type: String, default: "" },
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
	},
});
</script>
