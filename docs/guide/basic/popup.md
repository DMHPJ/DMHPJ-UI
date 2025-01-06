<script setup lang="ts">
import { ref } from 'vue';
import popupApi from "/api/popup";

const showDefaultPopup = ref(false);
const showCloseByClickOverlayPopup = ref(false);
const showLeftPopup = ref(false);
const showRightPopup = ref(false);
const showCenterPopup = ref(false);
const showBottomPopup = ref(false);
const showDurationPopup = ref(false);
</script>

# Popup 弹出层

卡片用于展示一个块级内容，也常与其他组件结合使用

## 代码演示

### 基础使用

通过设置 `show` 属性以控制弹出层的开关

<dm-button @click="showDefaultPopup = true" plain>基础弹出层</dm-button>
<dm-popup v-model:show="showDefaultPopup">
  我是基础弹出层
</dm-popup>

```vue
<dm-popup v-model:show="showDefaultPopup">
  我是基础弹出层
</dm-popup>
```

### 遮罩关闭控制

通过设置 `closeByClickOverlay` 属性以控制弹出层能否通过点击遮罩层进行关闭，`closeByClickOverlay` 属性默认值为 `true`

<dm-button @click="showCloseByClickOverlayPopup = true" plain>遮罩关闭控制</dm-button>
<dm-popup v-model:show="showCloseByClickOverlayPopup" :closeByClickOverlay="false">
  <dm-button @click="showCloseByClickOverlayPopup = false">关闭弹出层</dm-button>
</dm-popup>

```vue
<dm-popup v-model:show="showCloseByClickOverlayPopup" :closeByClickOverlay="false">
  <dm-button @click="showCloseByClickOverlayPopup = false">关闭弹出层</dm-button>
</dm-popup>
```

### 弹出层方向

设置 `position` 属性以控制弹出层方向的弹出方向，`position` 属性默认值为 `bottom`

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  <dm-button @click="showLeftPopup = true" plain>左侧弹出层</dm-button>
  <dm-popup v-model:show="showLeftPopup" position="left">左侧弹出层</dm-popup>

  <dm-button @click="showRightPopup = true" plain>右侧弹出层</dm-button>
  <dm-popup v-model:show="showRightPopup" position="right">右侧弹出层</dm-popup>

  <dm-button @click="showCenterPopup = true" plain>中心弹出层</dm-button>
  <dm-popup v-model:show="showCenterPopup" position="center">中心弹出层</dm-popup>

  <dm-button @click="showBottomPopup = true" plain>底部弹出层</dm-button>
  <dm-popup v-model:show="showBottomPopup" position="bottom">底部弹出层</dm-popup>
</div>

```vue
<dm-popup v-model:show="showLeftPopup" position="left">
  左侧弹出层
</dm-popup>
<dm-popup v-model:show="showRightPopup" position="right">
  右侧弹出层
</dm-popup>
<dm-popup v-model:show="showCenterPopup" position="center">
  中心弹出层
</dm-popup>
<dm-popup v-model:show="showBottomPopup" position="bottom">
  底部弹出层
</dm-popup>
```

### 弹出动画时长

支持设置 `duration` 属性以控制弹出层出现时动画速度，`duration` 属性默认值为 `300`

<dm-button @click="showDurationPopup = true" plain>弹出动画时长</dm-button>
<dm-popup v-model:show="showDurationPopup" position="right" duration="1000">弹出动画时长</dm-popup>

```vue
<dm-popup v-model:show="showDurationPopup" position="right" duration="1000">
  弹出动画时长
</dm-popup>
```

## API

### Props

组件可选的传入参数

<dm-table :data="popupApi.props" align="left">
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

<dm-table :data="popupApi.types" align="left">
  <dm-table-column prop="name" label="参数" width="120"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="200"></dm-table-column>
  <dm-table-column prop="type" label="类型">
    <template #cell="{ row }">
			<code>{{ row.type }}</code>
    </template>
  </dm-table-column>
</dm-table>

### Event

组件提供了下列回调事件

<dm-table :data="popupApi.events" align="left">
  <dm-table-column prop="name" label="事件名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="400"></dm-table-column>
  <dm-table-column prop="type" label="回调参数">
    <template #cell="{ row }">
			<em>{{ row.type }}</em>
    </template>
  </dm-table-column>
</dm-table>

### Slot

组件提供了下列插槽

<dm-table :data="popupApi.slot" align="left">
  <dm-table-column prop="name" label="插槽名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明"></dm-table-column>
</dm-table>

### Style

组件提供了下列 CSS 变量，可用于自定义样式

<dm-table :data="popupApi.style" align="left">
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