<script setup lang="ts">
import { ref } from "vue";
import toastApi from "/api/toast";
import { showToast } from "dmhpj-ui"

const showDefaultToast = ref(false);
const showIconToast = ref(false);
const showDurationToast = ref(false);

const showJSPopup = () => {
  showToast({
		message: "我是提示",
		icon: "cicle-close",
    iconSize: "3.25rem",
		duration: 2000,
	});
}
</script>

# Toast 轻提示

轻提示常用于用户操作后弹出相关提示信息，支持通过 `JS` 进行控制

## 代码演示

### 基础使用

通过设置 `v-model` 以控制轻提示的开关，默认显示时间 `2000ms`，默认无图标

<dm-button @click="showDefaultToast = true" plain>基础轻提示</dm-button>
<dm-toast v-model="showDefaultToast">我是基础轻提示</dm-toast>

```vue
<dm-toast v-model="showDefaultToast">我是基础轻提示</dm-toast>
```

### 带有图标的轻提示

通过设置 `icon` 属性以控制轻提示中显示的图标类型，同时可以通过设置 `iconSize` 属性以调整图标大小，也可以通过设置 `iconColor` 属性以调整图标颜色，`iconSize` 属性默认值为 `2.25rem`，`iconColor` 属性默认值为 `#FFFFFF`

<dm-button @click="showIconToast = true" plain>带有图标的轻提示</dm-button>
<dm-toast v-model="showIconToast" icon="cicle-seleted" iconSize="5.25rem" iconColor="#EEEEEE">我是带有图标的轻提示</dm-toast>

```vue
<dm-toast 
  v-model="showIconToast" 
  icon="cicle-seleted" 
  iconSize="5.25rem"
  iconColor="#EEEEEE">
  我是带有图标的轻提示
</dm-toast>
```

### 调整显示时长

设置 `duration` 属性以调整轻提示的显示时长，`duration` 属性默认值为 `2000ms`

<dm-button @click="showDurationToast = true" plain>调整显示时长</dm-button>
<dm-toast v-model="showDurationToast" :duration="3000">时长: 3000ms</dm-toast>

```vue
<dm-toast 
  v-model="showDurationToast" 
  :duration="3000">
  时长: 3000ms
</dm-toast>
```

### 通过 JS 调用

支持通过 `Javascript` 代码调用轻提示，并且支持自定义本文档中所提及的所有属性

<dm-button @click="showJSPopup" plain>触发 JS 调用</dm-button>

```vue
<dm-button @click="showJSPopup" plain>触发 JS 调用</dm-button>

<script setup lang="ts">
import { showToast } from "dmhpj-ui"

const showJSPopup = () => {
  showToast({
    message: "我是提示",
    icon: "cicle-close",
    iconSize: "3.25rem",
    iconColor: "#FFFFFF",
    duration: 2000,
  });
}
</script>
```

## API

### Props

组件可选的传入参数

<dm-table :data="toastApi.props" align="left">
  <dm-table-column prop="name" label="参数" width="120"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="200"></dm-table-column>
  <dm-table-column prop="type" label="类型">
    <template #cell="{ row }">
			<em>{{ row.type }}</em>
    </template>
  </dm-table-column>
  <dm-table-column prop="default" label="默认值">
    <template #cell="{ row }">
			<code>{{ row.default }}</code>
    </template>
  </dm-table-column>
</dm-table>

### Type

组件使用到的 `TypeScript` 数据结构

<dm-table :data="toastApi.types" align="left">
  <dm-table-column prop="name" label="参数" width="120"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="240"></dm-table-column>
  <dm-table-column prop="type" label="类型">
    <template #cell="{ row }">
			<code>{{ row.type }}</code>
    </template>
  </dm-table-column>
</dm-table>

### Slot

组件提供了下列插槽

<dm-table :data="toastApi.slot" align="left">
  <dm-table-column prop="name" label="插槽名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明"></dm-table-column>
</dm-table>

### Style

组件提供了下列 CSS 变量，可用于自定义样式

<dm-table :data="toastApi.style" align="left">
  <dm-table-column prop="name" label="名称"></dm-table-column>
  <dm-table-column prop="type" label="默认值" width="240">
    <template #cell="{ row }">
			<em>{{ row.default }}</em>
    </template>
  </dm-table-column>
  <dm-table-column prop="desc" label="描述" width="80">
    <template #cell="{ row }">
			<em>{{ row.desc ? row.desc : '-' }}</em>
    </template>
  </dm-table-column>
</dm-table>
