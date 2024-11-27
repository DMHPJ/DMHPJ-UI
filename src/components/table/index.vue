<template>
	<div class="dm-table">
		<div class="dm-table-header">
			<div v-for="(column, index) in columns" :key="index" :style="setStyle(column)">
				{{ column.label }}
			</div>
		</div>
		<div class="dm-table-body">
			<div class="dm-table-row" v-for="(row, rowIndex) in data" :key="rowIndex">
				<div v-for="column in columns" :key="column.prop" :style="setStyle(column)">
					<template v-if="column.cell">
						<component :is="column.cell" :row="row" :index="rowIndex"></component>
					</template>
					<template v-else>
						{{ row[column.prop] }}
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, defineComponent, h, onMounted, ref, useSlots } from "vue";
import { stringKeyObject, tableColumn } from "../common/ts/interface";

export default defineComponent({
	name: "DmTable",
	props: {
		data: {
			type: Array<any>,
			required: true,
			default: () => [],
		},
	},
	setup() {
		const slots = useSlots();

		const columns = ref<tableColumn[]>([]);
		const setStyle = (column: tableColumn) => {
			return {
				width: column.width ? column.width + "px" : "auto",
				minWidth: column.minWidth ? column.minWidth + "px" : "80px",
				flex: column.width ? "0 0 auto" : "1 1 0%",
			};
		};

		onMounted(() => {
			if (slots.default) {
				const children = slots.default() || [];
				children.forEach((child) => {
					if (child.type && (child.type as Component).name === "DmTableColumn") {
						const childProps = child.props || {};
						columns.value.push({
							prop: childProps.prop,
							label: childProps.label,
							width: childProps.width,
							minWidth: childProps.minWidth,
							cell: child.children ? h((child.children as stringKeyObject)['cell']) : null,
						});
					}
				});
			}
		});

		return {
			columns,
			setStyle,
		};
	},
});
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
