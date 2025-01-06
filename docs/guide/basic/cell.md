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

<dm-cell title="箭头单元格" titleIcon="good" content="Icon Cell"></dm-cell>

```vue
<dm-cell title="箭头单元格" titleIcon="good" content="Icon Cell"></dm-cell>
```

### 块级按钮

设置 `block` 属性将按钮转为块级按钮，块级按钮会占用容器的剩余横向空间

<div style="width: 40%">
  <dm-button block>块级按钮</dm-button>
</div>

```vue
<dm-button block>块级按钮</dm-button>
```

### 按钮状态

支持设置 `readonly` 属性或 `disabled` 属性以控制按钮是否可用

<div style="display: flex; gap: 1rem;">
  <dm-button readonly>只读按钮</dm-button>
  <dm-button readonly plain>简约只读按钮</dm-button>
  <dm-button disabled>禁用按钮</dm-button>
  <dm-button plain disabled>简约禁用按钮</dm-button>
</div>

```vue
<dm-button readonly>只读按钮</dm-button>
<dm-button readonly plain>简约只读按钮</dm-button>
<dm-button disabled>禁用按钮</dm-button>
<dm-button plain disabled>简约禁用按钮</dm-button>
```

## API

### Props

组件可选的传入参数
<!-- 
<dm-table :data="buttonApi.props" align="left">
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

<dm-table :data="buttonApi.events" align="left">
  <dm-table-column prop="name" label="事件名" width="80"></dm-table-column>
  <dm-table-column prop="desc" label="说明" width="400"></dm-table-column>
  <dm-table-column prop="type" label="回调参数">
    <template #cell="{ row }">
			<em>{{ row.type }}</em>
    </template>
  </dm-table-column>
</dm-table>

### Style

组件提供了下列 CSS 变量，可用于自定义样式

<dm-table :data="buttonApi.style" align="left">
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
</dm-table> -->