<template>
	<div>
		<div>【大区数据信息】</div>
		<div ref="target" class="w-full h-full"></div>
	</div>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
//vue3语法糖，同名可以直接指向该名字的dom元素
//初始化echarts实例
const target = ref(null);
let mChart = null;
onMounted(() => {
	mChart = echarts.init(target.value);
	renderChart();
});
//构建options对象
const renderChart = () => {
	const options = {
		//x轴数据
		xAxis: {
			show: false,
			type: 'value',
			max: function (value) {
				return parseInt(value.max * 1.2);
			},
			data: props.data.xAxis,
		},
		//y轴数据
		yAxis: {
			type: 'category',
			data: props.data.regions.map((item) => item.name),
			inverse: true,
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				color: '#93b1c8',
			},
		},
		//图表绘制位置控制上下左右
		grid: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			containLabel: true,
		},
		//核心配置
		series: [
			{
				type: 'bar',
				data: props.data.regions.map((item) => ({
					value: item.value,
					name: item.name,
				})),
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(180,180,180,0.2)',
					borderRadius: 5,
				},
				itemStyle: {
					color: '#479AD3',
					borderRadius: 5,
					shadowColor: 'rgba(0, 0, 0, 0.3)',
					shadowBlur: 5,
				},
				barWidth: 12,
				label: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff',
					},
				},
			},
		],
	};
	mChart.setOption(options);
};
watch(
	() => props.data,
	() => {
		renderChart();
	}
);
// console.log(props.data);
</script>

<style scoped></style>
