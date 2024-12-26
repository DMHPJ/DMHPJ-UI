<template>
	<div :class="border ? 'dm-cell-border' : 'dm-cell'">
		<div class="dm-cell-left">
			<dmIcon v-if="titleIcon" :color="titleIconColor" :name="titleIcon"></dmIcon>
			<template v-if="$slots.title">
				<slot name="title"></slot>
			</template>
			<template v-else>
				<div>{{ title }}</div>
			</template>
		</div>
		<div class="dm-cell-right" @click="handleRightClick">
			<template v-if="$slots.content">
				<slot name="content"></slot>
			</template>
			<template v-else>
				<div>{{ content }}</div>
			</template>
			<dmIcon v-if="arrow" :color="iconColor" :name="icon"></dmIcon>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import dmIcon from "../icon/index.vue";

export default defineComponent({
	name: "DmCell",
	props: {
		title: { type: String, default: null },
		content: { type: String, default: null },
		titleIcon: { type: String, default: null },
		titleIconColor: { type: String, default: null },
		icon: { type: String, default: "arrow-right" },
		iconColor: { type: String, default: null },
		arrow: { type: Boolean, default: false },
		border: { type: Boolean, default: true },
	},
	setup(props, { emit }) {
		const handleRightClick = (event: Event) => {
			if (props.arrow) emit("rightClick", event);
		};

		return { dmIcon, handleRightClick };
	},
});
</script>
