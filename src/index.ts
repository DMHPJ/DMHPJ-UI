import dmCard from "./components/card/index.vue";
import dmButton from "./components/button/index.vue";
import dmTable from "./components/table/index.vue";
import dmTableColumn from "./components/table-column/index.vue";
import dmCheckbox from "./components/checkbox/index.vue";
import dmCheckboxButton from "./components/checkboxButton/index.vue";
import dmCheckboxGroup from "./components/checkboxGroup/index.vue";
import dmPopup from "./components/popup/index.vue";
import dmCalendar from "./components/calendar/index.vue";

import type { App } from "vue";

const components = [
	dmCard,
	dmButton,
	dmTable,
	dmTableColumn,
	dmCheckbox,
	dmCheckboxButton,
	dmCheckboxGroup,
	dmPopup,
	dmCalendar
];

export function install(app: App) {
	components.forEach((component) => {
		app.component(component.name!, component);
	});
}

export default { install };

export {
	dmCard,
	dmButton,
	dmTable,
	dmTableColumn,
	dmCheckbox,
	dmCheckboxButton,
	dmCheckboxGroup,
	dmPopup,
	dmCalendar
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
	}
}