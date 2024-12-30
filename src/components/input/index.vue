<template>
	<div class="dm-input" :class="{ 'dm-input-error': validError }">
		<input
			:type="type"
			:value="modelValue"
			:placeholder="placeholder"
			:minlength="minLength"
			:maxlength="maxLength"
			:readonly="readonly"
			:disabled="disabled"
			@keyup.enter="handleEnter"
			@change="handleChange"
			@focus="handleFocus"
			@blur="handleBlur" />
		<div v-if="validError" class="dm-input-message">
			{{ validMsg }}
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { FieldType, ValidationFunction } from "../common/ts/type";
import { isEmail, isTelephone, isUrl } from "../common/utils/validate";

export default defineComponent({
	name: "DmInput",
	props: {
		modelValue: { type: [String, Number], default: null },
		type: { type: String as PropType<FieldType>, default: "text" },
		placeholder: { type: String, default: "请输入内容" },
		minLength: { type: [String, Number], default: null },
		maxLength: { type: [String, Number], default: null },
		min: { type: Number, default: null },
		max: { type: Number, default: null },
		icon: { type: String, default: null },
		clearable: { type: Boolean, default: false },
		clearIcon: { type: String, default: "cicle-close" },
		readonly: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		message: { type: String, default: null },
	},
	setup(props, { emit }) {
		const validMsg = ref(props.message);
		const validError = ref(false);
		type ShouldValid = "email" | "tel" | "url";
		const validType = (value: string) => {
			if (props.type === "number" && isNaN(Number(value))) {
				validMsg.value = props.message ? props.message : "请输入数字";
				validError.value = true;
			}

			const validationMap: Record<ShouldValid, ValidationFunction> = {
				email: isEmail,
				tel: isTelephone,
				url: isUrl,
			};

			if (props.type in validationMap && !validationMap[props.type as ShouldValid](value)) {
				validMsg.value = props.message ? props.message : "格式错误";
				validError.value = true;
			} else {
				validMsg.value = "";
				validError.value = false;
			}

			return value;
		};

		const handleChange = (event: Event) => {
			emit("change", (event.target as HTMLInputElement).value, props.modelValue);
			emit("update:modelValue", (event.target as HTMLInputElement).value);
		};

		const handleFocus = (event: Event) => {
			emit("focus", event);
		};

		const handleBlur = (event: Event) => {
			validType((event.target as HTMLInputElement).value);
			emit("blur", event);
		};

		const handleEnter = (event: Event) => {
			emit("enter", event);
		};

		return { validMsg, validError, handleChange, handleFocus, handleBlur, handleEnter };
	},
});
</script>
