<script setup lang="ts">
import cellApi from "/api/cell"
</script>

# Cell 单元格

单元格用于展示一个行信息，也常与其他组件结合使用

## 代码演示

### 基础使用

引入后不进行额外设置时的单元格，默认带有下边框

<dm-cell title="基础单元格" content="Default Cell"></dm-cell>

```vue
<dm-cell title="基础单元格" content="Default Cell"></dm-cell>
```

### 展示图标

设置 `titleIcon` 属性后单元格会显示左侧图标，可以结合 `titleIconColor` 属性设置图标颜色

<dm-cell 
  title="箭头单元格" 
  titleIcon="good" 
  titleIconColor="#2965FF" 
  content="Icon Cell"></dm-cell>

```vue
<dm-cell 
  title="箭头单元格" 
  titleIcon="good" 
  titleIconColor="#2965FF" 
  content="Icon Cell"></dm-cell>
```

### 箭头单元格

设置 `arrow` 属性将单元格转为箭头单元格，常用于示意存在可跳转链接的单元格，也可以结合 `icon` 属性自定义所展示的图标，结合 `iconColor` 属性设置图标颜色

<dm-cell title="箭头单元格" content="Arrow Cell" arrow></dm-cell>
<dm-cell 
  title="自定义箭头单元格" 
  content="Arrow Cell" 
  arrow 
  icon="good" 
  iconColor="#2965FF"></dm-cell>

```vue
<dm-cell title="箭头单元格" content="Arrow Cell" arrow></dm-cell>
<dm-cell
	title="自定义箭头单元格"
	content="Arrow Cell"
	arrow
	icon="good"
	iconColor="#2965FF"></dm-cell>
```

### 纯净单元格

支持设置 `border` 属性以关闭单元格下边框

<dm-cell title="纯净单元格" content="Purity Cell" :border="false"></dm-cell>

```vue
<dm-cell title="纯净单元格" content="Purity Cell" :border="false"></dm-cell>
```

### 使用插槽

若以上用法不能满足你的需求，可以使用插槽来自定义内容。

<dm-cell title="使用插槽" content="Use Slot">
	<template #title>
		标题插槽
	</template>
	<template #content>
		内容插槽
	</template>
</dm-cell>

```vue
<dm-cell title="使用插槽" content="Use Slot">
	<template #title>
		标题插槽
	</template>
	<template #content>
		内容插槽
	</template>
</dm-cell>
```

## API

### Props

组件可选的传入参数

<dm-table :data="cellApi.props" align="left">
  <dm-table-column prop="name" label="参数"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="320"></dm-table-column>
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

### Event

组件提供了下列回调事件

<dm-table :data="cellApi.events" align="left">
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

<dm-table :data="cellApi.slot" align="left">
  <dm-table-column prop="name" label="插槽名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明"></dm-table-column>
</dm-table>

### Style

组件提供了下列 CSS 变量，可用于自定义样式

<dm-table :data="cellApi.style" align="left">
  <dm-table-column prop="name" label="名称"></dm-table-column>
  <dm-table-column prop="type" label="默认值" width="160">
    <template #cell="{ row }">
			<em>{{ row.default }}</em>
    </template>
  </dm-table-column>
  <dm-table-column prop="desc" label="描述" width="120">
    <template #cell="{ row }">
			<em>{{ row.desc ? row.desc : '-' }}</em>
    </template>
  </dm-table-column>
</dm-table>
