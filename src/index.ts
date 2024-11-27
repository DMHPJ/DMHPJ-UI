import dmCard from "./components/card/index.vue";
import dmButton from "./components/button/index.vue";
import dmTable from "./components/table/index.vue";
import dmTableColumn from "./components/table-column/index.vue";

import type { App } from "vue";

const components = [dmCard, dmButton, dmTable, dmTableColumn];

export function install(app: App) {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
}

export default { install };

export { dmCard, dmButton, dmTable, dmTableColumn }