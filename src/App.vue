<template>
	<div class="app">
		<dm-card title="兜帽虎皮卷的卡片" shadow width="100%">
			<template #header>
				<div>兜帽虎皮卷的按钮</div>
			</template>
			<div class="button-group">
				<dm-button>基础按钮</dm-button>
				<dm-button plain>简约按钮</dm-button>
				<dm-button disabled>禁用按钮</dm-button>
				<dm-button plain disabled>简约禁用按钮</dm-button>
			</div>
		</dm-card>
		<dm-card title="兜帽虎皮卷的表格" shadow>
			<dm-table style="margin-bottom: 1rem" :data="testData">
				<dm-table-column prop="code" label="编号">
					<template #cell="{ row }">
						<div>{{ row.code }}</div>
					</template>
				</dm-table-column>
				<dm-table-column prop="name" label="姓名" width="90"></dm-table-column>
				<dm-table-column prop="age" label="年龄" minWidth="60"></dm-table-column>
			</dm-table>
		</dm-card>
		<dm-card title="兜帽虎皮卷的复选框" shadow>
			<dm-checkbox-group style="margin-bottom: 1rem" v-model:modelValue="testRef.checkList">
				<dm-checkbox label="选中"></dm-checkbox>
				<dm-checkbox label="未选中"></dm-checkbox>
				<dm-checkbox label="禁用" disabled></dm-checkbox>
				<dm-checkbox label="选中且禁用" disabled></dm-checkbox>
			</dm-checkbox-group>
			<dm-checkbox-group style="margin-bottom: 1rem" v-model:modelValue="testRef.checkList">
				<dm-checkbox border label="边框-选中" @change="testCheckbox"></dm-checkbox>
				<dm-checkbox border label="边框-未选中"></dm-checkbox>
				<dm-checkbox border label="边框-禁用" disabled></dm-checkbox>
				<dm-checkbox border label="边框-选中且禁用" disabled></dm-checkbox>
			</dm-checkbox-group>
			<dm-checkbox-group style="margin-bottom: 1rem" v-model:modelValue="testRef.checkList">
				<dm-checkbox-button label="按钮-选中" @change="testCheckbox"></dm-checkbox-button>
				<dm-checkbox-button label="按钮-未选中"></dm-checkbox-button>
				<dm-checkbox-button label="按钮-禁用" disabled></dm-checkbox-button>
			</dm-checkbox-group>
		</dm-card>
		<dm-button @click="testRef.showPopup = !testRef.showPopup">TEST Popup</dm-button>
		<dm-popup v-model:show="testRef.showPopup" position="bottom">
			<dm-calendar type="multiple"></dm-calendar>
		</dm-popup>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

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
	checkList: ["选中且禁用", "选中", "按钮-选中", "边框-选中", "边框-选中且禁用"],
	showPopup: true,
});

const testCheckbox = (val: boolean, event: Event) => {
	console.log("App Handle Checkbox Change", val, event);
};

watch(
	() => testRef.value.checkList,
	(val) => {
		console.log("App Watch CheckboxGroup", val);
	}
);
</script>

<style scoped>
.app {
	> div:not(:last-child) {
		margin-bottom: 1rem;
	}
	height: 100vh;
}

.button-group {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.75rem;
}
</style>
