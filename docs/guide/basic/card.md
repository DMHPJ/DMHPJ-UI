<script setup lang="ts">
import cardApi from "/api/card"
</script>

# Card 卡片

卡片用于展示一个块级内容，也常与其他组件结合使用

## 代码演示

### 基础使用

引入后不进行额外设置时的单元格，默认带有阴影和边框

<dm-card shadow>默认卡片</dm-card>

```vue
<dm-card>默认卡片</dm-card>
```

### 卡片标题

设置 `title` 属性后单元格会带有标题

<dm-card title="卡片标题" shadow>卡片内容</dm-card>

```vue
<dm-cell 
  title="箭头单元格" 
  titleIcon="good" 
  titleIconColor="#2965FF" 
  content="Icon Cell"></dm-cell>
```

### 卡片阴影

设置 `shadow` 属性以控制卡片的阴影显示，卡片阴影默认开启

<dm-card title="卡片标题" :shadow="false">卡片阴影关闭</dm-card>

```vue
<dm-card title="卡片标题" :shadow="false">卡片阴影关闭</dm-card>
```

### 卡片边框

支持设置 `border` 属性以关闭卡片边框

<dm-card title="卡片标题" :border="false">无边框卡片</dm-card>

```vue
<dm-card title="卡片标题" :border="false">无边框卡片</dm-card>
```

### 使用插槽

若以上用法不能满足你的需求，可以使用插槽来自定义内容。

<dm-card title="使用插槽">
	<template #header>
		标题插槽
	</template>
	默认插槽
</dm-card>

```vue
<dm-card title="使用插槽">
	<template #header>
		标题插槽
	</template>
	默认插槽
</dm-card>
```

## API

### Props

组件可选的传入参数

<dm-table :data="cardApi.props" align="left">
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

### Slot

组件提供了下列插槽

<dm-table :data="cardApi.slot" align="left">
  <dm-table-column prop="name" label="插槽名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明"></dm-table-column>
</dm-table>

### Style

组件提供了下列 CSS 变量，可用于自定义样式

<dm-table :data="cardApi.style" align="left">
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
