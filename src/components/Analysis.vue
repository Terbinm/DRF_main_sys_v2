<template>
  <div>
    <div class="button-container">
      <button @click="goToUpload" type="submit" class="btn">Analysis</button>
      <button @click="goToLogin" type="submit" class="btn">Log Out</button>
      <button @click="goToProfile" type="submit" class="btn">Profile</button>
    </div>
    <h1>Current Predicted Value:
      <span v-if="oldestSeverityA === -1">Error Code(-1)</span>
      <span v-else-if="oldestSeverityA === null">Error Code(0)</span>
      <span v-else>{{ oldestSeverityA.toFixed(1) }}</span>
    </h1>
    <!-- Display your analysis results here -->
    <div class="chart">
      <LineChart />
    </div>
    <h1>History</h1>
    <AnaTable :chartData="chartData" />
    <!-- Display your history records here -->
<!--    <line-chart :chart-data="results"></line-chart>-->
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import {useRouter} from "vue-router";
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Severity A',
      data: [],
      fill: false,
      // borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }
  ]
});

const oldestSeverityA = ref(0);

watchEffect(() => {
  if (chartData.value.datasets[0].data.length > 0) {
    oldestSeverityA.value = chartData.value.datasets[0].data[0];
  }
});
const router = useRouter()
const goToUpload = () => {
  router.push('/upload');
};

const goToLogin = () => {
  router.push('/');
};
const goToProfile = () => {
  router.push('/profile');
};

// import { onMounted, ref } from 'vue'
// import axios from 'axios'
//
// const results = ref(null)
// const history = ref(null)
//
// onMounted(async () => {
//   const historyResponse = await axios.get('/drf/data_view/?format=api')
//   history.value = historyResponse.data
//
//   const resultsResponse = await axios.get('/drf/data_view/?format=api')
//   results.value = resultsResponse.data.map(item => ({
//     date: item.date,
//     severity_A: item.severity_A,
//   }))
//
//   // 在這裡打印 chartData 的值
//   console.log(results.value)
//
//   // 您的 axios.get 程式碼
//   axios.get('/drf/data_view/?format=api')
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
  width: 100%;
  border-collapse: collapse;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.btn {
  width: 300px;
  padding: 10px 100px;
  font-size: 16px;
  color: white;
  background-color: #6DC5D1;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin: 0 50px;
}
.btn:hover {
  background-color: #5bb5c1;
  transform: scale(1.05);
}
</style>
