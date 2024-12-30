<template>
	<div class="app">
		<!-- <dm-card title="兜帽虎皮卷的卡片" shadow width="90%" 	>
			<div class="card-body">
			<dm-card class="one-row-card" title="兜帽虎皮卷的按钮" shadow>
				<div class="button-group">
					<dm-button>基础按钮</dm-button>
					<dm-button plain>简约按钮</dm-button>
					<dm-button disabled>禁用按钮</dm-button>
					<dm-button plain disabled>简约禁用按钮</dm-button>
				</div>
			</dm-card>
			<dm-card class="checkbox-card" title="兜帽虎皮卷的复选框" shadow>
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
			<dm-card class="two-row-card" title="兜帽虎皮卷的表格" shadow>
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
			<dm-card class="two-row-card" title="兜帽虎皮卷的日历" shadow>
				<dm-calendar type="multiple" title="请选择日期"></dm-calendar>
			</dm-card>
		</div>
		</dm-card> -->
		<dm-card title="兜帽虎皮卷的单元格" shadow>
			<dm-cell title="普通单元格" content="Test Cell"></dm-cell>
			<dm-cell title="箭头单元格" titleIcon="good" arrow @rightClick="testCellClick"></dm-cell>
		</dm-card>
		<dm-card title="兜帽虎皮卷的卡片" shadow>
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
		<dm-card title="兜帽虎皮卷的日历" shadow>
			<dm-calendar type="multiple" title="请选择日期"></dm-calendar>
		</dm-card>
		<dm-card title="兜帽虎皮卷的评分" shadow>
			<dm-rate v-model="testRef.rate" allow-half></dm-rate>
		</dm-card>
		<dm-card title="兜帽虎皮卷的提示" shadow>
			<div class="button-group">
				<dm-button @click="testRef.toast1 = true">成功提示</dm-button>
				<dm-button @click="testRef.toast2 = true">失败提示</dm-button>
				<dm-button @click="testToast">测试JS</dm-button>
			</div>
			<dm-toast
				v-model="testRef.toast1"
				icon="cicle-selected"
				message="成功提示"
				:duration="2000"></dm-toast>
			<dm-toast
				v-model="testRef.toast2"
				icon="cicle-close"
				message="失败提示"
				:duration="2000"></dm-toast>
		</dm-card>
		<dm-card title="兜帽虎皮卷的输入框" shadow>
			<dm-input style="margin-bottom: 1rem" v-model="testRef.search" type="email" placeholder="请输入"></dm-input>
			<dm-search
				v-model="testRef.search"
				placeholder="请输入Search"
				@search="testSearch"
				clearable></dm-search>
		</dm-card>
		<dm-card title="兜帽虎皮卷的表单" shadow>
			<dm-form ref="testForm" v-model="testRef.form" :rules="testRef.rules">
				<dm-form-item label="姓名" prop="name">
					<dm-input v-model="testRef.form.name" placeholder="请输入姓名" clearable></dm-input>
				</dm-form-item>
			</dm-form>
			<dm-button style="margin-top: 1rem" @click="testFormButton">testFormButton</dm-button>
		</dm-card>
		<dm-popup v-model:show="testRef.showPopup" position="bottom">
			<div style="text-align: center; height: 25vh">我是弹出层内容</div>
			<dm-button block>我是弹出层内容</dm-button>
		</dm-popup>
		<dm-button @click="testRef.showPopup = !testRef.showPopup">TEST Popup</dm-button>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { FormInstance, RuleItem } from "./components/common/ts/interface";
import showToast from "./components/toast/showToast";

const testValiFunc = (rules: RuleItem, value: any, callback: Function) => {
	if (value === "1") callback(new Error("必填项"));
	else callback();
};

const testData = [
	{
		updateTime: "2024-10-29 16:49:00",
		name: "兜帽虎皮卷小偷",
		code: "2024100007",
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
		updateTime: "2024-10-29 16:05:17",
		name: "兜帽虎皮卷小偷",
		code: "2024100001",
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
		updateTime: "2024-10-29 16:05:17",
		name: "兜帽虎皮卷小偷",
		code: "2024100001",
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
	showPopup: false,
	form: {
		name: "",
	},
	rules: {
		name: [
			{ required: true, message: "test", trigger: "blur" },
			{ validator: testValiFunc, trigger: "blur" },
		],
	},
	rate: 3,
	toast1: false,
	toast2: false,
	search: "",
});
const testForm = ref<FormInstance | null>(null);

const testFormButton = () => {
	testForm.value?.validate((valid: boolean) => {
		console.log(valid, testRef.value.form);
	});
};

const testCheckbox = (val: boolean, event: Event) => {
	console.log("App Handle Checkbox Change", val, event);
};

const testToast = () => {
	showToast({
		message: "我是提示",
		icon: "cicle-close",
		duration: 2000,
	});
};

const testSearch = () => {
	console.log("testSearch", testRef.value.search);
};

const testCellClick = () => {
	console.log("testCellClick");
};

watch(
	() => testRef.value.checkList,
	(val) => {
		console.log("App Watch CheckboxGroup", val);
	}
);

onMounted(() => {});
</script>

<style scoped>
.app {
	/* display: flex;
	align-items: center;
	justify-content: center; */

	> div:not(:last-child) {
		margin-bottom: 1rem;
	}
	height: 100vh;
}

.card-body {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
}
/* 
.button-card{
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
}

.checkbox-card{
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 3;
}

.two-row-card{
	grid-row-start: 1;
	grid-row-end: 3;
} */

.button-group {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.75rem;
}
</style>
