<template>
  <div>
    <table v-if="data">
      <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
<!--        <th>File</th>-->
        <th>Date</th>
        <th>MicroFET 3</th>
<!--        <th>Handled</th>-->
<!--        <th>Need Handle</th>-->
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data.results" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.label }}</td>
<!--        <td>{{ item.upFile }}</td>-->
        <td>{{ item.date }}</td>
        <td>
            <span v-if="item.severity_A === -1">Error Code(-1)</span>
            <span v-else-if="item.severity_A === null">Error Code(0)</span>
            <span v-else-if="item.severity_A < 0">Error Code(Math.abs(item.severity_A))</span>
            <span v-else>{{ item.severity_A }}</span>
        </td>
<!--        <td>{{ item.handled }}</td>-->
<!--        <td>{{ item.need_handle }}</td>-->
      </tr>
      </tbody>
    </table>
    <!--    <line-chart2 v-if="data" :chart-data="chartData"></line-chart2>-->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import LineChart2 from './LineChart2.vue';  // 確保路徑正確

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
});

const data = ref(null);

onMounted(async () => {
  // const response = await fetch('/drf/chart-dataset/?format=json');
  const response = await fetch('/drf/table-dataset/?format=json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  data.value = result;

  // Update chart data
  props.chartData.labels = result.results.map(item => item.date);
  props.chartData.datasets[0].data = result.results.map(item => item.severity_A ? parseFloat(item.severity_A) : 0);
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  color: #f2f2f2;
}

th, td {
  border: 2px solid #f2f2f2;
  padding: 6px;
}

tr, td :nth-child(even) {
  background-color: #100C2A;
}

canvas {
  margin-top: 20px;
}
</style>
