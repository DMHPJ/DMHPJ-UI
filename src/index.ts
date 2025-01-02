import dmCard from "./components/card/index.vue";
import dmCell from "./components/cell/index.vue";
import dmButton from "./components/button/index.vue";
import dmTable from "./components/table/index.vue";
import dmTableColumn from "./components/tableColumn/index.vue";
import dmCheckbox from "./components/checkbox/index.vue";
import dmCheckboxButton from "./components/checkboxButton/index.vue";
import dmCheckboxGroup from "./components/checkboxGroup/index.vue";
import dmPopup from "./components/popup/index.vue";
import dmCalendar from "./components/calendar/index.vue";
import dmIcon from "./components/icon/index.vue";
import dmForm from "./components/form/index.vue";
import dmFormItem from "./components/formItem/index.vue";
import dmRate from "./components/rate/index.vue";
import dmToast from "./components/toast/index.vue";
import dmInput from "./components/input/index.vue";
import dmSearch from "./components/search/index.vue";
import dmDatePicker from "./components/datePicker/index.vue";

import showToast from "./components/toast/showToast";

import "./components/common/style/index.scss";
import type { App } from "vue";

const components = [
	dmCard,
	dmCell,
	dmButton,
	dmTable,
	dmTableColumn,
	dmCheckbox,
	dmCheckboxButton,
	dmCheckboxGroup,
	dmPopup,
	dmCalendar,
	dmIcon,
	dmForm,
	dmFormItem,
	dmRate,
	dmToast,
	dmInput,
	dmSearch,
	dmDatePicker
];

export function install(app: App) {
	components.forEach((component) => {
		app.component(component.name!, component);
	});
}

export default { install };

export {
	dmCard,
	dmCell,
	dmButton,
	dmTable,
	dmTableColumn,
	dmCheckbox,
	dmCheckboxButton,
	dmCheckboxGroup,
	dmPopup,
	dmCalendar,
	dmIcon,
	dmForm,
	dmFormItem,
	dmRate,
	dmToast,
	dmInput,
	dmSearch,
	dmDatePicker,
	showToast
};

declare module "vue" {
	export interface GlobalComponents {
		DmCard: typeof dmCard;
		DmButton: typeof dmButton;
		DmTable: typeof dmTable;
		DmTableColumn: typeof dmTableColumn;
		DmCheckbox: typeof dmCheckbox;
		DmCheckboxButton: typeof dmCheckboxButton;
		DmCheckboxGroup: typeof dmCheckboxGroup;
		DmPopup: typeof dmPopup;
		DmCalendar: typeof dmCalendar;
		DmIcon: typeof dmIcon;
		DmForm: typeof dmForm;
		DmFormItem: typeof dmFormItem;
		DmRate: typeof dmRate;
		DmToast: typeof dmToast;
		DmInput: typeof dmInput;
		DmSearch: typeof dmSearch;
		DmCell: typeof dmCell;
		DmDatePicker: typeof dmDatePicker;
	}
}