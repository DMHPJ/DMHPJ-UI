<template>
	<div class="app">
		<dm-card shadow width="45%" height="50%">
			<div class="button-group">
				<dm-button>兜帽虎皮卷的基础按钮</dm-button>
				<dm-button plain>兜帽虎皮卷的简约按钮</dm-button>
				<dm-button disabled>兜帽虎皮卷的禁用按钮</dm-button>
				<dm-button plain disabled>兜帽虎皮卷的简约禁用按钮</dm-button>
			</div>
			<dm-table :data="testData">
				<dm-table-column prop="code" label="需求编号" width="160">
          <template #cell="{ row, index }">
						<div>{{ index + row.code }}</div>
					</template>
        </dm-table-column>
				<dm-table-column prop="name" label="需求名称" minWidth="160"></dm-table-column>
				<dm-table-column prop="declarePrice" label="预算金额(元)"></dm-table-column>
				<dm-table-column prop="speciesFullName" label="采购品目" width="200">
					<template #cell="{ row, index }">
						<div>{{ index + row.speciesFullName }}</div>
					</template>
				</dm-table-column>
				<dm-table-column prop="stockFormName" label="采购形式"></dm-table-column>
				<dm-table-column prop="fqUserName" label="发起人"></dm-table-column>
				<dm-table-column prop="updateTime" label="变更时间"></dm-table-column>
      </dm-table>
		</dm-card>
	</div>
</template>

<script setup lang="ts">
const testData = [
	{
		updateTime: "2024-10-29 16:49:00",
		name: "TEST提示信息TEST提示信息TEST提示信息",
		code: "XQBH2024100007",
		declarePrice: "10000000.00",
		speciesFullName: "成品-内衣-文胸",
		stockFormName: "自行采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-14 16:51:21",
		name: "TEST20241014003",
		code: "XQBH2024100005",
		declarePrice: "134135.00",
		speciesFullName: "工程-装修工程-工程设计",
		stockFormName: "自行采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-14 16:29:05",
		name: "TEST20241014002",
		code: "XQBH2024100004",
		declarePrice: "114514.00",
		speciesFullName: "货物-办公设备-办公家具",
		stockFormName: "统一采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-29 16:05:17",
		name: "TEST20241014001",
		code: "XQBH2024100001",
		declarePrice: "114514.00",
		speciesFullName: "成品-内衣-内裤",
		stockFormName: "统一采购",
		fqUserName: "蕉内管理员",
	},
	{
		updateTime: "2024-10-29 16:49:00",
		name: "TEST提示信息TEST提示信息TEST提示信息",
		code: "XQBH2024100007",
		declarePrice: "10000000.00",
		speciesFullName: "成品-内衣-文胸",
		stockFormName: "自行采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-14 16:51:21",
		name: "TEST20241014003",
		code: "XQBH2024100005",
		declarePrice: "134135.00",
		speciesFullName: "工程-装修工程-工程设计",
		stockFormName: "自行采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-14 16:29:05",
		name: "TEST20241014002",
		code: "XQBH2024100004",
		declarePrice: "114514.00",
		speciesFullName: "货物-办公设备-办公家具",
		stockFormName: "统一采购",
		fqUserName: "卢晓致 Xiaozhi",
	},
	{
		updateTime: "2024-10-29 16:05:17",
		name: "TEST20241014001",
		code: "XQBH2024100001",
		declarePrice: "114514.00",
		speciesFullName: "成品-内衣-内裤",
		stockFormName: "统一采购",
		fqUserName: "蕉内管理员",
	},
];
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
