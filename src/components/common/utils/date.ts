import { dayList } from "../ts/interface";

const monthNameList = {
	chineseFullName: [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月",
	],
	fullName: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	mmm: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

const dayNameList: dayList[] = [
	{
		chineseFullName: "周日",
		chineseShortName: "日",
		fullName: "Sunday",
		shortName: "Sun",
		dayNumber: 0,
	},
	{
		chineseFullName: "周一",
		chineseShortName: "一",
		fullName: "Monday",
		shortName: "Mon",
		dayNumber: 1,
	},
	{
		chineseFullName: "周二",
		chineseShortName: "二",
		fullName: "Tuesday",
		shortName: "Tue",
		dayNumber: 2,
	},
	{
		chineseFullName: "周三",
		chineseShortName: "三",
		fullName: "Wednesday",
		shortName: "Wed",
		dayNumber: 3,
	},
	{
		chineseFullName: "周四",
		chineseShortName: "四",
		fullName: "Thursday",
		shortName: "Thu",
		dayNumber: 4,
	},
	{
		chineseFullName: "周五",
		chineseShortName: "五",
		fullName: "Friday",
		shortName: "Fri",
		dayNumber: 5,
	},
	{
		chineseFullName: "周六",
		chineseShortName: "六",
		fullName: "Saturday",
		shortName: "Sat",
		dayNumber: 6,
	},
];

const MIN_YEAR = 1900;
const MAX_YEAR = 9999;

const today = new Date();

// 辅助函数：验证并转换月份和年份
const validateAndConvertDateParams = (month: number | string, year: number | string) => {
	if (typeof month === "string") month = Number(month);
	if (typeof year === "string") year = Number(year);
	if (isNaN(month) || isNaN(year)) {
		console.error("参数类型错误");
		return { valid: false, month: NaN, year: NaN };
	}
	return { valid: true, month: Number(month), year: Number(year) };
};

const getDate = (inputDate: Date) => {
	const year = inputDate.getFullYear();
	const month = inputDate.getMonth() + 1;
	const date = inputDate.getDate();
	const dayOfWeek = inputDate.getDay();
	if (year < MIN_YEAR || year > MAX_YEAR) {
		console.error("请检查数据是否合法");
		return { year: -1, month: -1, date: -1, dayOfWeek: -1 };
	}
	return { year: year, month: month, date: date, dayOfWeek: dayOfWeek };
};

// 获取目标月份的天数
const getMonthLastDay = (month: number | string, year: number | string) => {
	const {
		valid,
		month: convertedMonth,
		year: convertedYear,
	} = validateAndConvertDateParams(month, year);
	if (!valid) return -1;
	return new Date(convertedYear, convertedMonth, 0).getDate();
};

// 获取目标月份上个月的天数
const getPreviousMonthLastDay = (month: number | string, year: number | string) => {
	const {
		valid,
		month: convertedMonth,
		year: convertedYear,
	} = validateAndConvertDateParams(month, year);
	if (!valid) return -1;
	return new Date(convertedYear, convertedMonth - 1, 0).getDate();
};

//获取目标月份的第一天是星期几
const getMonthFirstDayAndWeek = (month: number | string, year: number | string) => {
	const {
		valid,
		month: convertedMonth,
		year: convertedYear,
	} = validateAndConvertDateParams(month, year);
	if (!valid) return { day: -1, week: -1 };
	const firstDay = new Date(convertedYear, convertedMonth - 1, 1).getDay();
	const firstDayWeek = dayNameList.findIndex((day) => day.dayNumber === firstDay);
	return { day: firstDay, week: firstDayWeek };
};

const areDatesEqual = (date1: Date, date2: Date): boolean => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};

const isBefore = (date1: Date, date2: Date) => {
	return date1.getTime() < date2.getTime();
};

const isAfter = (date1: Date, date2: Date) => {
	return date1.getTime() > date2.getTime();
};

const getRangeDate = (date1: Date, date2: Date) => {
	let startDate = new Date(date1);
	let endDate = new Date(date2);
	const rangeDates: Date[] = [];

	// 确保 startDate 是较小的日期，endDate 是较大的日期
	if (isAfter(startDate, endDate)) {
		[startDate, endDate] = [endDate, startDate];
	}

	// 循环生成日期范围内的所有日期
	for (
		let currentDate = startDate;
		currentDate <= endDate;
		currentDate.setDate(currentDate.getDate() + 1)
	) {
		rangeDates.push(new Date(currentDate));
	}

	return rangeDates;
};

//对dayjs的拙劣模仿
const dmDay = (inputDate?: Date | string | number) => {
	const dateValue = inputDate ? new Date(inputDate) : today;
	const { year, month } = getDate(dateValue);
	return {
		dateValue,
		getDate() {
			return getDate(dateValue);
		},
		getMonthLastDay() {
			return getMonthLastDay(month - 1, year);
		},
		getPreviousMonthLastDay() {
			return getPreviousMonthLastDay(month - 1, year);
		},
		getMonthFirstDayAndWeek() {
			return getMonthFirstDayAndWeek(month - 1, year);
		},
	};
};

export default {
	dmDay,
	getDate,
	getMonthLastDay,
	getPreviousMonthLastDay,
	getMonthFirstDayAndWeek,
	areDatesEqual,
	getRangeDate,
	isBefore,
	isAfter,
	dayNameList,
	monthNameList,
};
