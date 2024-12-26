<template>
	<div class="dm-search">
		<dmIcon v-if="showIcon" :style="{ color: iconColor }" :name="icon"></dmIcon>
		<dmInput
			v-model="inputValue"
			:placeholder="placeholder"
			@enter="handleEnter"
			@focus="handleFocus"
			@blur="handleBlur"></dmInput>
		<dmIcon
			v-if="clearable && inputValue"
      class="dm-search-clear"
			:style="{ color: clearIconColor }"
			:name="clearIcon"
      @click="handleClear"></dmIcon>
	</div>
</template>
<script lang="ts">
import { FieldType } from "../common/ts/type";
import dmInput from "../input/index.vue";
import dmIcon from "../icon/index.vue";
import { defineComponent, PropType, ref, watch } from "vue";

export default defineComponent({
	name: "DmSearch",
	props: {
		modelValue: { type: String, default: null },
		type: { type: String as PropType<FieldType>, default: "text" },
		placeholder: { type: String, default: null },
		icon: { type: String, default: "search" },
		showIcon: { type: Boolean, default: true },
		iconColor: { type: String, default: "#C1D6FF" },
		clearable: { type: Boolean, default: false },
		clearIcon: { type: String, default: "cicle-close" },
		clearIconColor: { type: String, default: "#C1D6FF" },
		readonly: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
	},
	setup(props, { emit }) {
		const inputValue = ref(props.modelValue);
		watch(inputValue, (newValue) => {
			emit("update:modelValue", newValue);
		});
    
		const handleFocus = (event: Event) => {
			emit("focus", event);
		};

		const handleBlur = (event: Event) => {
			emit("blur", event);
		};

		const handleEnter = (event: Event) => {
			emit("search", event);
		};

    const handleClear = (event: Event) => {
			emit("clear", event);
      inputValue.value = "";
		};

		return { dmInput, dmIcon, inputValue, handleFocus, handleBlur, handleEnter, handleClear };
	},
});
</script>
