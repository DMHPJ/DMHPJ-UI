<template>
	<label class="dm-checkbox">
		<div
			class="dm-checkbox-input"
			:class="{
				'is-disabled': isDisabled,
				'is-checked': isChecked,
				'is-indeterminate': indeterminate,
				'is-focus': data.focus,
			}">
			<span class="dm-checkbox-show"></span>
			<input
				v-if="trueLabel || falseLabel"
				class="dm-checkbox-original"
				type="checkbox"
				:aria-hidden="indeterminate ? 'true' : 'false'"
				:name="name"
				:disabled="isDisabled"
				:true-value="trueLabel"
				:false-value="falseLabel"
				v-model="model"
				@change="handleChange"
				@focus="data.focus = true"
				@blur="data.focus = false" />
			<input
				v-else
				class="dm-checkbox-original"
				type="checkbox"
				:aria-hidden="indeterminate ? 'true' : 'false'"
				:disabled="isDisabled"
				:value="label"
				:name="name"
				v-model="model"
				@change="handleChange"
				@focus="data.focus = true"
				@blur="data.focus = false" />
		</div>
		<div class="dm-checkbox-label" v-if="$slots.default || label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</div>
	</label>
</template>
<script lang="ts">
import { computed, defineComponent, inject, nextTick, ref } from "vue";

export default defineComponent({
	name: "DmCheckbox",
	props: {
		value: { type: [String, Number, Boolean], default: null },
		label: { type: [String, Number, Boolean], default: null },
		trueLabel: { type: [String, Number], default: null },
		falseLabel: { type: [String, Number], default: null },
		indeterminate: { type: Boolean, default: false },
		border: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		checked: { type: Boolean, default: false },
		size: { type: String, default: "default" },
		name: { type: String, default: null },
	},
	emits: ["input", "change"],
	setup(props, { emit }) {
		const data = ref({
			focus: false,
			selfModel: false,
			isLimitExceeded: false,
		});

		const _checkboxGroup = inject("CheckboxGroupContextKey", {
			store: null,
			min: 0,
			max: 0,
			value: { disabled: false },
			dispatch: (type: string, event: string, payload: any[]) => {
				console.log(type, event, payload);
			},
		});

		const isGroup = computed(() => !!_checkboxGroup);

		const model = computed({
			get() {
				return props.value ? props.value : data.value.selfModel;
				// return isGroup.value
				// 	? _checkboxGroup?.store ?? !props.value
				// 		? props.value
				// 		: data.value.selfModel
				// 	: !props.value
				// 	? props.value
				// 	: data.value.selfModel;
			},

			set(val: Array<any> | boolean) {
				if (isGroup.value && typeof val !== "boolean") {
					data.value.isLimitExceeded = false;

					if (!_checkboxGroup?.min && val.length < _checkboxGroup.min) {
						data.value.isLimitExceeded = true;
					}

					if (!_checkboxGroup?.max && val.length > _checkboxGroup.max) {
						data.value.isLimitExceeded = true;
					}

					if (!data.value.isLimitExceeded) {
						_checkboxGroup?.dispatch("DmCheckboxGroup", "input", [val]);
					}
				}
				if (typeof val === "boolean") {
					emit("input", val);
					data.value.selfModel = val;
				}
			},
		});

		const dmForm = inject("dmForm", { value: { disabled: false } });

		const isLimitDisabled = computed(() => {
			return false;
		});

		const isDisabled = computed(() => {
			return isGroup.value
				? _checkboxGroup.value.disabled ||
						props.disabled ||
						(dmForm.value || {}).disabled ||
						isLimitDisabled.value
				: props.disabled || (dmForm.value || {}).disabled;
		});

		const isChecked = computed(() => {
			if ({}.toString.call(model.value) === "[object Boolean]") {
				return model.value;
			} else if (Array.isArray(model.value)) {
				return model.value.indexOf(props.label) > -1;
			} else if (model.value !== null && model.value !== undefined) {
				return model.value === props.trueLabel;
			}
		});

		const handleChange = (e: Event) => {
			if (data.value.isLimitExceeded) return;
			const target = e.target as HTMLInputElement;
			let value;
			if (target.checked) {
				value = !props.trueLabel ? true : props.trueLabel;
			} else {
				value = !props.falseLabel ? false : props.falseLabel;
			}
			emit("change", value, e);
			nextTick(() => {
				if (isGroup.value) {
					_checkboxGroup?.dispatch("DmCheckboxGroup", "change", [_checkboxGroup.store]);
				}
			});
		};

		return { data, handleChange, isDisabled, isChecked, model };
	},
});
</script>
<style lang="scss" scoped>
@use "./index.scss";
</style>
