<template>
	<div class="dm-date-picker" :style="{ '--dm-date-picker-box-height': calcHeight }">
		<div class="dm-date-picker-content">
			<div class="dm-date-picker-year">
				<div class="dm-date-picker-item" v-for="item in yearList">
					{{ item }}
				</div>
			</div>
			<div class="dm-date-picker-month">
				<div class="dm-date-picker-item" v-for="item in monthList">
					{{ item }}
				</div>
			</div>
			<div class="dm-date-picker-date">
				<div class="dm-date-picker-item" v-for="item in dateList">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import dmDay from "../common/utils/date";
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
	name: "DmDatePicker",
	props: {
		modelValue: { type: [Date, String], default: new Date() },
		format: { type: String, default: "YYYY-MM-DD" },
		minDate: { type: [Date, String], default: null },
		maxDate: { type: [Date, String], default: null },
		height: { type: String, default: null },
	},
	setup(props, { emit }) {
		const propDate = new Date(props.modelValue);

		const selectDate = ref({
			year: dmDay.getDate(propDate).year,
			month: dmDay.getDate(propDate).month,
			date: dmDay.getDate(propDate).date,
		});

		const yearList = computed(() => {
			const propMinDate = props.minDate ? new Date(props.minDate) : dmDay.defaultMinDate;
			const propMaxDate = props.maxDate ? new Date(props.maxDate) : dmDay.defaultMaxDate;
			const minYear = dmDay.getDate(propMinDate).year;
			const maxYear = dmDay.getDate(propMaxDate).year;
			const _yearList: Array<number> = [];
			for (let i = minYear; i <= maxYear; i++) {
				_yearList.push(i);
			}
			return _yearList;
		});

		const monthList = computed(() => {
			return 12;
		});

		const dateList = computed(() => {
			return dmDay.getMonthLastDay(selectDate.value.month, selectDate.value.year);
		});

    const calcHeight = computed(() => {
			if (typeof props.height === "number") {
				return props.height + "px";
			} else {
				return props.height;
			}
		});

		const handleChange = (val: Date) => {
			emit("update:modelValue", val);
		};

		return { handleChange, yearList, monthList, dateList, calcHeight };
	},
});
</script>
