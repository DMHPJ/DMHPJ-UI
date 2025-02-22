<template>
	<label
		class="dm-checkbox"
		:class="[{ 'dm-checkbox-is-disabled': isDisabled }, { 'dm-checkbox-is-border': border }, { 'dm-checkbox-is-checked': isChecked }]"
		:id="id">
		<div
			class="dm-checkbox-input"
			:class="{
				'dm-checkbox-is-disabled': isDisabled,
				'dm-checkbox-is-checked': isChecked,
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
				:disabled="!!isDisabled"
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
				:disabled="!!isDisabled"
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
import { ComponentInternalInstance, computed, defineComponent, inject, ref } from "vue";
import { useEmitter } from "../common/utils/emitter";

export default defineComponent({
	name: "DmCheckbox",
	props: {
		id: { type: String, default: "DmCheckbox" },
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

		const { dispatchUpward } = useEmitter();
		const _checkboxGroup = inject("dmCheckboxGroup") as ComponentInternalInstance;
		const isGroup = computed(() => !!_checkboxGroup);

		const store = computed(() => (_checkboxGroup ? _checkboxGroup.props.modelValue : props.value));

		const model = computed({
			get() {
				return isGroup.value ? store.value : props.value ? props.value : data.value.selfModel;
			},

			set(val: Array<any> | boolean) {
				if (isGroup.value && typeof val !== "boolean") {
					data.value.isLimitExceeded = false;

					if (!_checkboxGroup?.props.min && val.length < (_checkboxGroup.props.min as number)) {
						data.value.isLimitExceeded = true;
					}

					if (!_checkboxGroup?.props.max && val.length > (_checkboxGroup.props.max as number)) {
						data.value.isLimitExceeded = true;
					}

					if (!data.value.isLimitExceeded) {
						dispatchUpward("DmCheckboxGroup", "input", [val]);
					}
				}
				if (typeof val === "boolean") {
					emit("input", val);
					data.value.selfModel = val;
				}
			},
		});

		const isLimitDisabled = computed(() => {
			return false;
		});

		const isDisabled = computed(() => {
			return isGroup.value
				? _checkboxGroup.props.disabled || props.disabled || isLimitDisabled.value
				: props.disabled;
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
		};
		return { data, handleChange, isDisabled, isChecked, model };
	},
});
</script>