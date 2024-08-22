<template>
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden">
    <!-- 左 -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col"></div>
    <!-- 中 -->
    <div class="w-1/2 mr-5 flex flex-col"></div>
    <!-- 右 -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getVisualization } from "./api/visualization.js";
import HorizontalBar from "./components/HorizontalBar.vue";
import MapChart from "./components/MapChart.vue";
import RadarBar from "./components/VerticalBar.vue";
import Relation from "./components/Relation.vue";
import RingBar from "./components/RingBar.vue";
import ToatalData from "./components/ToatalData.vue";
import VerticalBar from "./components/VerticalBar.vue";
import WordCloud from "./components/WordCloud.vue";

const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
  console.log(data.value);
};
// setInterval(() => {
// 	loadData();
// }, 1000);
loadData();
</script>

<style></style>
