<template>
	<div class="dm-calendar">
		<div class="dm-calendar-header">
			<slot name="header">
				<div class="dm-calendar-title">{{ title }}</div>
			</slot>
			<div class="dm-calendar-year-month">
				<dm-icon name="double-arrow-left" @click="handleYearChange(-1)"></dm-icon>
				<dm-icon name="arrow-left" @click="handleMonthChange(-1)"></dm-icon>
				<div>{{ calendarObj.selectedYear + "年" + calendarObj.selectedMonth + "月" }}</div>
				<dm-icon name="arrow-right" @click="handleMonthChange(1)"></dm-icon>
				<dm-icon name="double-arrow-right" @click="handleYearChange(1)"></dm-icon>
			</div>
		</div>
		<div class="dm-calendar-content">
			<div class="dm-calendar-week-box">
				<div class="dm-calendar-week" v-for="item in getWeekList(startOfWeek)">
					{{ item.chineseFullName }}
				</div>
			</div>
			<div class="dm-calendar-date-box">
				<div class="dm-calendar-background">{{ calendarObj.selectedMonth }}</div>
				<div
					class="dm-calendar-date dm-calendar-date-quaternary"
					v-for="item in calendarObj.lastMonthList"
					@click="handleClickDate(-1, item)">
					{{ dmDay.getDate(item).date }}
				</div>
				<div
					class="dm-calendar-date"
					:class="getClass(item)"
					v-for="item in calendarObj.thisMonthList"
					@click="handleClickDate(0, item)">
					{{ dmDay.getDate(item).date }}
				</div>
				<div
					class="dm-calendar-date dm-calendar-date-quaternary"
					v-for="item in calendarObj.nextMonthList"
					@click="handleClickDate(1, item)">
					{{ dmDay.getDate(item).date }}
				</div>
			</div>
		</div>
		<dm-button v-if="showConfirm" block @click="handleConfirm">确定</dm-button>
	</div>
</template>
<script lang="ts">
import dmButton from "../button/index.vue";
import { defineComponent, onMounted, PropType, Ref, ref } from "vue";
import dmDay from "../common/utils/date";
import { calendarObj, dayList } from "../common/ts/interface";
import { CalendarType } from "../common/ts/type";

export default defineComponent({
	name: "DmCalendar",
	props: {
		type: { type: String as PropType<CalendarType>, default: "single" },
		startOfWeek: { type: [Number, String], default: 1 },
		weekList: { type: Array<dayList>, default: dmDay.dayNameList },
		currentDay: { type: [Number, String, Date], default: new Date() },
		title: { type: String, default: "日历" },
		showConfirm: { type: Boolean, default: true },
	},
	components: { dmButton },
	setup(props, { emit }) {
		const selectedList: Ref<Array<Date>> = ref([]);
		const currentDmDay = dmDay.dmDay(props.currentDay);
		const calendarObj: Ref<calendarObj> = ref({
			selectedYear: currentDmDay.getDate().year,
			selectedMonth: currentDmDay.getDate().month,
			selectedDate: currentDmDay.getDate().date,
			lastMonthList: [],
			thisMonthList: [],
			nextMonthList: [],
		});
		const getWeekList = (startOfWeek: number | string) => {
			const { weekList } = props;
			// return weekList;
			if (typeof startOfWeek === "string") startOfWeek = Number(startOfWeek);
			if (isNaN(startOfWeek) || startOfWeek < 0 || startOfWeek > 6) return weekList;
			const firstPart = weekList.slice(0, startOfWeek);
			const secondPart = weekList.slice(startOfWeek);
			return secondPart.concat(firstPart);
		};

		const getLastMonthList = () => {
			let { startOfWeek } = props;
			const { selectedYear, selectedMonth } = calendarObj.value;
			const { day: firstDay } = dmDay.getMonthFirstDayAndWeek(selectedMonth, selectedYear);
			let length = 0;

			if (typeof startOfWeek === "string") startOfWeek = Number(startOfWeek);
			if (!isNaN(startOfWeek) && startOfWeek !== 0) {
				length = (firstDay === 0 ? 7 : firstDay) - startOfWeek;
			}
			const lastMonthLastDay = dmDay.getPreviousMonthLastDay(selectedMonth, selectedYear);
			calendarObj.value.lastMonthList = [];
			for (let i = lastMonthLastDay - length + 1; i <= lastMonthLastDay; i++)
				calendarObj.value.lastMonthList.push(new Date(`${selectedYear}-${selectedMonth}-${i}`));
		};

		const getNextMonthList = () => {
			const { lastMonthList, thisMonthList, selectedYear, selectedMonth } = calendarObj.value;
			const sum = lastMonthList.length + thisMonthList.length;
			const length = 7 - (sum % 7);
			calendarObj.value.nextMonthList = [];
			for (let i = 1; i <= length; i++)
				calendarObj.value.nextMonthList.push(new Date(`${selectedYear}-${selectedMonth}-${i}`));
		};

		const setCalendarData = () => {
			const { selectedYear, selectedMonth } = calendarObj.value;
			const lastDay = dmDay.getMonthLastDay(selectedMonth, selectedYear);
			calendarObj.value.thisMonthList = [];
			getLastMonthList();
			for (let i = 1; i <= lastDay; i++)
				calendarObj.value.thisMonthList.push(new Date(`${selectedYear}-${selectedMonth}-${i}`));
			getNextMonthList();
		};

		const changeMonth = (calc: number) => {
			const afterCalc = calendarObj.value.selectedMonth + calc;
			if (afterCalc < 1) {
				calendarObj.value.selectedYear -= 1;
				return (calendarObj.value.selectedMonth = 12);
			}
			if (afterCalc > 12) {
				calendarObj.value.selectedYear += 1;
				return (calendarObj.value.selectedMonth = 1);
			}
			return (calendarObj.value.selectedMonth = afterCalc);
		};

		const handleMonthChange = (calc: number) => {
			changeMonth(calc);
			setCalendarData();
		};

		const handleYearChange = (calc: number) => {
			calendarObj.value.selectedYear += calc;
			setCalendarData();
		}

		const multipleClick = (newSelectedDate: Date) => {
			const findIndex = selectedList.value.findIndex((item) =>
				dmDay.areDatesEqual(item, newSelectedDate)
			);
			if (findIndex !== -1) {
				const oldValue = [...selectedList.value];
				selectedList.value.splice(findIndex, 1);
				emit("unselect", selectedList.value, oldValue);
			} else {
				selectedList.value.push(newSelectedDate);
				emit("select", selectedList.value);
			}
		};

		const rangeClick = (newSelectedDate: Date) => {
			if (
				selectedList.value.length > 0 &&
				dmDay.areDatesEqual(newSelectedDate, selectedList.value[0])
			) {
				const oldValue = [...selectedList.value];
				selectedList.value.splice(0);
				return emit("unselect", selectedList.value, oldValue);
			}
			if (selectedList.value.length === 0) {
				selectedList.value.push(newSelectedDate);
			} else {
				selectedList.value = dmDay.getRangeDate(newSelectedDate, selectedList.value[0]);
			}
			emit("select", selectedList.value);
		};

		const handleClickDate = (calc: number, date: Date) => {
			calendarObj.value.selectedDate = dmDay.getDate(date).date;
			if (calc !== 0) {
				changeMonth(calc);
				setCalendarData();
			}
			const { selectedYear, selectedMonth, selectedDate } = calendarObj.value;
			const newSelectedDate = new Date(`${selectedYear}-${selectedMonth}-${selectedDate}`);
			if (props.type === "single") {
				emit("select", newSelectedDate);
			} else if (props.type === "multiple") {
				multipleClick(newSelectedDate);
			} else if (props.type === "range") {
				rangeClick(newSelectedDate);
			}
		};

		const getClass = (date: Date) => {
			if (props.type === "single") {
				return calendarObj.value.selectedDate === dmDay.getDate(date).date
					? "is-single-selected"
					: "";
			} else if (props.type === "multiple") {
				return selectedList.value.findIndex((item) => dmDay.areDatesEqual(item, date)) !== -1
					? "is-multiple-selected"
					: "";
			} else if (props.type === "range") {
				const findIndex = selectedList.value.findIndex((item) => dmDay.areDatesEqual(item, date));
				if (findIndex === -1) return "";
				if (findIndex === 0) return "is-range-start";
				if (findIndex === selectedList.value.length - 1) return "is-range-end";
				return "is-range-selected";
			}
		};

		// const init = () => {
		// 	console.log("init");
		// };calendarObj.value.selectedMonth += calc;

		// watch(
		// 	() => calendarObj.value.selectedMonth,
		// 	() => {
		// 		init();
		// 	}
		// );

		const handleConfirm = (event: Event) => {
			emit("confirm", selectedList.value, event);
		};

		onMounted(() => {
			setCalendarData();
		});

		return {
			getWeekList,
			handleClickDate,
			getClass,
			handleConfirm,
			handleYearChange,
			handleMonthChange,
			calendarObj,
			dmDay,
		};
	},
});
</script>
<style lang="scss" scoped>
@use "./index.scss";
</style>
