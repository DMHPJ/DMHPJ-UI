<template>
	<div class="dm-input">
		<input
			:type="type"
			:value="modelValue"
			:placeholder="placeholder"
			:minlength="minLength"
			:maxlength="maxLength"
			:readonly="readonly"
			:disabled="disabled"
			@change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur" />
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, readonly } from "vue";
import { FieldType } from "../common/ts/type";

export default defineComponent({
	name: "DmInput",
	props: {
		modelValue: { type: [String, Number], default: null },
		type: { type: String as PropType<FieldType>, default: "text" },
		placeholder: { type: String, default: null },
		minLength: { type: [String, Number], default: null },
		maxLength: { type: [String, Number], default: null },
		min: { type: Number, default: null },
		max: { type: Number, default: null },
		icon: { type: String, default: null },
		clearable: { type: Boolean, default: false },
		clearIcon: { type: String, default: "cicle-close" },
		readonly: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
	},
	setup(props, { emit }) {
		const handleChange = (event: Event) => {
			emit("change", (event.target as HTMLInputElement).value, props.modelValue);
			emit("update:modelValue", (event.target as HTMLInputElement).value);
		};

    const handleFocus = (event: Event) => {
      emit("focus", event);
    }

    const handleBlur = (event: Event) => {
      emit("blur", event);
    }
		return { handleChange, handleFocus, handleBlur };
	},
});
</script>
