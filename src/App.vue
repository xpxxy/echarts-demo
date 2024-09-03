<template>
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden" v-if="data">
    <!-- 左 -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <HorizontalBar class="h-1/3 box-border pb-4" :data="data.regionData" />
      <RadarBar class="h-1/3 box-border pb-4" :data="data.riskData" />
      <Relation class="h-1/3 box-border pb-4" />
    </div>
    <!-- 中 -->
    <div class="w-1/2 mr-5 flex flex-col">
      <TotalData class="bg-opacity-50 bg-slate-800 p-3" />
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>
    <!-- 右 -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <VerticalBar class="h-1/3 box-border pb-4" :data="data.serverData" />
      <RadiueBar class="h-1/3 box-border pb-4" />
      <WordCloud class="h-1/3 box-border pb-4" />
    </div>
  </div>
</template>
<script setup>
import HorizontalBar from "./components/HorizontalBar.vue";
import MapChart from "./components/MapChart.vue";
import RadarBar from "./components/RadarBar.vue";
import Relation from "./components/Relation.vue";
import TotalData from "./components/TotalData.vue";
import RadiueBar from "./components/RadiueBar.vue";
import VerticalBar from "./components/VerticalBar.vue";
import WordCloud from "./components/WordCloud.vue";
import { ref } from "vue";
import { getVisualization } from "./api/visualization.js";

const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
  console.log(data.value);
};
loadData();
setInterval(() => {
  loadData();
}, 3000);
</script>

<style></style>
