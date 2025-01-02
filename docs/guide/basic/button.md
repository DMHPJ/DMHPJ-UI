<script setup lang="ts">
import buttonApi from "/api/button"
</script>

# Button 按钮

按钮用于触发一个操作，如提交表单。

## 代码演示

### 默认按钮

引入后不进行额外设置时的默认按钮

<dm-button>默认按钮</dm-button>

```vue
<dm-button>默认按钮</dm-button>
```

### 朴素按钮

设置 `plain` 属性将按钮转为朴素按钮，朴素按钮仅有边框及文字，没有背景色

<dm-button plain>朴素按钮</dm-button>

```vue
<dm-button plain>朴素按钮</dm-button>
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

<dm-table :data="buttonApi.props">
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

<dm-table :data="buttonApi.events">
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

<dm-table :data="buttonApi.style">
  <dm-table-column prop="name" label="名称"></dm-table-column>
  <dm-table-column prop="type" label="默认值">
    <template #cell="{ row }">
			<em>{{ row.default }}</em>
    </template>
  </dm-table-column>
  <dm-table-column prop="desc" label="描述">
    <template #cell="{ row }">
			<em>{{ row.desc ? row.desc : '-' }}</em>
    </template>
  </dm-table-column>
</dm-table>