<template>
	<dm-popup v-model:show="show" position="bottom">
		<div class="dm-date-picker" :style="{ '--dm-date-picker-box-height': calcHeight }">
			<div class="dm-date-picker-header">
				<div class="dm-date-picker-header-left">
					<slot name="header">
						<div>{{ title }}</div>
					</slot>
				</div>
				<div class="dm-date-picker-header-right">
					<dm-button type="text" @click="confirmSelect">确定</dm-button>
				</div>
			</div>
			<div class="dm-date-picker-content">
				<div
					class="dm-date-picker-column"
					@touchstart="columnTouchStart($event, 'year')"
					@touchmove="columnTouchMove($event, 'year')"
					@touchend="columnTouchEnd"
					@touchcancel="columnTouchEnd">
					<div
						class="dm-date-picker-wrapper"
						:style="columnStyle.year"
						@transitionend="columnTransitionEnd('year')">
						<div
							class="dm-date-picker-item"
							:class="{ 'dm-date-picker-item-active': selectDate.year === item }"
							v-for="item in yearList">
							{{ item }}
						</div>
					</div>
				</div>
				<div
					class="dm-date-picker-column"
					@touchstart="columnTouchStart($event, 'month')"
					@touchmove="columnTouchMove($event, 'month')"
					@touchend="columnTouchEnd"
					@touchcancel="columnTouchEnd">
					<div
						class="dm-date-picker-wrapper"
						:style="columnStyle.month"
						@transitionend="columnTransitionEnd('month')">
						<div
							class="dm-date-picker-item"
							:class="{ 'dm-date-picker-item-active': selectDate.month === item }"
							v-for="item in monthList">
							{{ item }}
						</div>
					</div>
				</div>
				<div
					class="dm-date-picker-column"
					@touchstart="columnTouchStart($event, 'day')"
					@touchmove="columnTouchMove($event, 'day')"
					@touchend="columnTouchEnd"
					@touchcancel="columnTouchEnd">
					<div
						class="dm-date-picker-wrapper"
						:style="columnStyle.day"
						@transitionend="columnTransitionEnd('day')">
						<div
							class="dm-date-picker-item"
							:class="{ 'dm-date-picker-item-active': selectDate.day === item }"
							v-for="item in dayList">
							{{ item }}
						</div>
					</div>
				</div>
				<div class="dm-date-picker-hairline"></div>
			</div>
		</div>
	</dm-popup>
</template>
<script lang="ts">
import dmDay from "../common/utils/date";
import dmPopup from "../popup/index.vue";
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
	name: "DmDatePicker",
	props: {
		show: { type: Boolean, default: false },
		title: { type: String, default: "选择日期" },
		defaultDate: { type: [Date, String], default: new Date() },
		format: { type: String, default: "YYYY-MM-DD" },
		minDate: { type: [Date, String], default: null },
		maxDate: { type: [Date, String], default: null },
		height: { type: String, default: null },
	},
	setup(props, { emit }) {
		type dateType = "year" | "month" | "day";

		const propDate = new Date(props.defaultDate);
		const propMinDateFormat = dmDay.getDate(
			props.minDate ? new Date(props.minDate) : dmDay.defaultMinDate
		);
		const propMaxDateFormat = dmDay.getDate(
			props.maxDate ? new Date(props.maxDate) : dmDay.defaultMaxDate
		);

		const selectDate = ref({
			year: dmDay.getDate(propDate).year,
			month: dmDay.getDate(propDate).month,
			day: dmDay.getDate(propDate).date,
		});

		const yearList = computed(() => {
			const minYear = propMinDateFormat.year;
			const maxYear = propMaxDateFormat.year;
			const _yearList: Array<number> = [];
			for (let i = minYear; i <= maxYear; i++) {
				_yearList.push(i);
			}
			return _yearList;
		});

		const monthList = computed(() => {
			let minMonth = 1;
			let maxMonth = 12;
			if (selectDate.value.year === propMinDateFormat.year) {
				minMonth = propMinDateFormat.month;
			} else if (selectDate.value.year === propMaxDateFormat.year) {
				maxMonth = propMaxDateFormat.month;
			}
			const _monthList: Array<number> = [];
			for (let i = minMonth; i <= maxMonth; i++) {
				_monthList.push(i);
			}
			return _monthList;
		});

		const dayList = computed(() => {
			let minDate = 1;
			let maxDate = dmDay.getMonthLastDay(selectDate.value.month, selectDate.value.year);
			if (
				selectDate.value.year === propMinDateFormat.year &&
				selectDate.value.month === propMinDateFormat.month
			) {
				minDate = propMinDateFormat.date;
			} else if (
				selectDate.value.year === propMaxDateFormat.year &&
				selectDate.value.month === propMaxDateFormat.month
			) {
				maxDate = propMaxDateFormat.date;
			}
			const _dateList: Array<number> = [];
			for (let i = minDate; i <= maxDate; i++) {
				_dateList.push(i);
			}
			return _dateList;
		});

		const calcHeight = computed(() => {
			if (typeof props.height === "number") {
				return props.height + "px";
			} else {
				return props.height;
			}
		});

		const startY = ref(0);
		const startIndex = ref(0);
		const isTouching = ref(false);
		const dateMap = {
			year: yearList,
			month: monthList,
			day: dayList,
		};

		const columnStyle = ref({
			year: {
				transform: `translate3d(0, 0, 0)`,
				transitionDuration: "0ms",
				transitionProperty: "none",
			},
			month: {
				transform: `translate3d(0, 0, 0)`,
				transitionDuration: "0ms",
				transitionProperty: "none",
			},
			day: {
				transform: `translate3d(0, 0, 0)`,
				transitionDuration: "0ms",
				transitionProperty: "none",
			},
		});

		const columnTouchStart = (event: TouchEvent, type: dateType) => {
			const touch = event.touches[0];
			startY.value = touch.clientY;
			startIndex.value = dateMap[type].value.findIndex((item) => item === selectDate.value[type]);
			isTouching.value = true;
		};

		const columnTouchMove = (event: TouchEvent, type: dateType) => {
			if (!isTouching.value) return;
			const touch = event.touches[0];
			const deltaY = touch.clientY - startY.value;
			const newIndex = Math.round(startIndex.value - deltaY / 40);
			if (newIndex >= 0 && newIndex < dateMap[type].value.length) {
				selectDate.value[type] = dateMap[type].value[newIndex];
				columnStyle.value[type].transitionDuration = "700ms";
				columnStyle.value[type].transitionProperty = "all";
				setWrapperStyle(type);
			}
		};

		const columnTouchEnd = () => {
			isTouching.value = false;
		};

		const columnTransitionEnd = (type: dateType) => {
			columnStyle.value[type].transitionDuration = "0ms";
			columnStyle.value[type].transitionProperty = "none";
		};

		const cancelSelect = () => {
			emit("cancel");
		};

		const confirmSelect = () => {
			emit("confirm", selectDate.value);
			emit("update:show", false);
		};

		const setWrapperStyle = (type: dateType) => {
			const contentHeight = calcHeight.value ?? "320px";
			const contentMiddleHeightNum = parseInt(contentHeight.slice(0, contentHeight.length - 2)) / 2;
			const index = dateMap[type].value.findIndex((item) => item === selectDate.value[type]);
			const selectedToTransformNum = (index + 1) * 40;
			columnStyle.value[type].transform = `translate3d(0px, ${
				contentMiddleHeightNum - selectedToTransformNum
			}px, 0px)`;
		};

		onMounted(() => {
			setWrapperStyle("year");
			setWrapperStyle("month");
			setWrapperStyle("day");
		});

		return {
			dmPopup,
			cancelSelect,
			confirmSelect,
			columnTouchStart,
			columnTouchMove,
			columnTouchEnd,
			columnTransitionEnd,
			setWrapperStyle,
			columnStyle,
			selectDate,
			yearList,
			monthList,
			dayList,
			calcHeight,
		};
	},
});
</script>
