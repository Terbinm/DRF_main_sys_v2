<template>
  <div>
    <h1>Analysis Results</h1>
    <!-- Display your analysis results here -->
    <div class="chart">
      <LineChart />
    </div>
    <h1>History</h1>
      <AnaTable />
    <!-- Display your history records here -->
<!--    <line-chart :chart-data="results"></line-chart>-->
  </div>
</template>

<script setup>
// import { onMounted, ref } from 'vue'
// import axios from 'axios'
//
// const results = ref(null)
// const history = ref(null)
//
// onMounted(async () => {
//   const historyResponse = await axios.get('http://163.18.44.158:9000/data_view/?format=api')
//   history.value = historyResponse.data
//
//   const resultsResponse = await axios.get('http://163.18.44.158:9000/data_view/?format=api')
//   results.value = resultsResponse.data.map(item => ({
//     date: item.date,
//     severity_A: item.severity_A,
//   }))
//
//   // 在這裡打印 chartData 的值
//   console.log(results.value)
//
//   // 您的 axios.get 程式碼
//   axios.get('http://163.18.44.158:9000/data_view/?format=api')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
// })
</script>

<script>
import LineChart from './LineChart.vue'
import AnaTable from './AnaTable.vue'
export default {
  components: {
    LineChart,
    AnaTable
  }
}
</script>

<style scoped>
h1 {
  color: white;
  font-weight: 1000;
  font-size: 3rem;
}

h3 {
  color: white;
  font-size: 1.2rem;
}
.chart {
  width: 200%;
  border-collapse: collapse;
}
</style>
