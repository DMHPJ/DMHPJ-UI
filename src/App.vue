<template>
	<div class="app">
		<dm-card title="兜帽虎皮卷的卡片" shadow width="45%" height="50%">
			<template #header>
				<div>兜帽虎皮卷的卡片标题</div>
			</template>
			<div class="button-group">
				<dm-button>兜帽虎皮卷的基础按钮</dm-button>
				<dm-button plain>兜帽虎皮卷的简约按钮</dm-button>
				<dm-button disabled>兜帽虎皮卷的禁用按钮</dm-button>
				<dm-button plain disabled>兜帽虎皮卷的简约禁用按钮</dm-button>
			</div>
			<dm-table :data="testData">
				<dm-table-column prop="code" label="编号" width="160">
          <template #cell="{ row }">
						<div>{{ row.code }}</div>
					</template>
        </dm-table-column>
				<dm-table-column prop="name" label="姓名" minWidth="160"></dm-table-column>
				<dm-table-column prop="age" label="年龄"></dm-table-column>
				<dm-table-column prop="remark" label="备注" width="200">
					<template #cell="{ row }">
						<div>{{ row.remark }}</div>
					</template>
				</dm-table-column>
      </dm-table>
			<dm-checkbox-group v-model:modelValue="testRef.checkList">
				<dm-checkbox label="复选框 A"></dm-checkbox>
				<dm-checkbox label="复选框 B"></dm-checkbox>
				<dm-checkbox label="复选框 C"></dm-checkbox>
				<dm-checkbox label="禁用" disabled></dm-checkbox>
				<dm-checkbox label="选中且禁用" disabled></dm-checkbox>
			</dm-checkbox-group>
				<dm-checkbox label="复选框 B" @change="testCheckbox"></dm-checkbox>
			</dm-card>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const testData = [
	{
		updateTime: "2024-10-29 16:49:00",
		name: "兜帽虎皮卷小偷",
		code: "2024100007",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-14 16:51:21",
		name: "兜帽虎皮卷小偷",
		code: "2024100005",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-14 16:29:05",
		name: "兜帽虎皮卷小偷",
		code: "2024100004",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-29 16:05:17",
		name: "兜帽虎皮卷小偷",
		code: "2024100001",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-29 16:49:00",
		name: "兜帽虎皮卷小偷",
		code: "2024100007",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-14 16:51:21",
		name: "兜帽虎皮卷小偷",
		code: "2024100005",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-14 16:29:05",
		name: "兜帽虎皮卷小偷",
		code: "2024100004",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
	{
		updateTime: "2024-10-29 16:05:17",
		name: "兜帽虎皮卷小偷",
		code: "2024100001",
		age: "22",
		remark: "兜帽虎皮卷的表格",
	},
];
const testRef = ref({
	checked: false,
	checkList: ['选中且禁用','复选框 A']
});

const testCheckbox = (val: boolean, event: Event) => {
	console.log('App Handle Checkbox Change', val, event);
};

watch(() => testRef.value.checkList, (val) => {
	console.log('App Watch CheckboxGroup', val);
})

</script>

<style scoped>
.app {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.button-group {
	margin-bottom: 1rem;
	> div:not(:last-child) {
		margin-right: 1rem;
	}
}
</style>
