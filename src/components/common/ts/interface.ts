import { VNode } from "vue";

export interface stringKeyObject {
	[key: string]: any;
}

export interface tableColumn {
	prop: string;
	label: string;
	width?: string | number;
	minWidth?: string | number;
	cell?: VNode | null;
}

export interface checkboxGroup {
	value: Object;
	min: number;
	max: number;
	disabled: boolean;
	size: string;
	fill: string;
	textColor: string;
	dispatch: Function;
}

export interface dayList {
	chineseFullName?: string;
	chineseShortName?: string;
	fullName?: string;
	shortName?: string;
	dayNumber: number;
}

export interface calendarObj {
	selectedYear: number;
	selectedMonth: number;
	selectedDate: number;
	lastMonthList: Date[];
	thisMonthList: Date[];
	nextMonthList: Date[];
}

export interface RuleItem {
	required?: boolean;
	validator?: Function;
	trigger?: string;
	message?: string;
}

export interface Rules {
	[key: string]: Array<RuleItem>;
}

export interface FormParamObj {
	modelValue: stringKeyObject;
	rules: Rules;
	labelWidth: string|number;
	labelAlign: string;
	readonly: boolean;
	disabled: boolean;
	registerFormItem: Function;
}

export interface FormInstance extends FormParamObj {
	validate: Function;
}

export interface ShowToastOption {
	message: string,
	icon?: string,
	duration?: number
}