<template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DmTableColumn",
	props: {
		label: {
			type: String,
			required: true,
		},
		prop: {
			type: String,
			required: true,
		},
		width: {
			type: [Number, String],
		},
		minWidth: {
			type: [Number, String],
		},
	},
});
</script>