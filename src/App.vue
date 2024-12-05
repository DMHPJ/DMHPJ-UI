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
			<dm-checkbox v-model="testRef.checked" label="dmhpj" @change="testCheckbox">是否选中</dm-checkbox>
		</dm-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
});

const testCheckbox = (val: boolean, event: Event) => {
	console.log(val, event);
};
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
