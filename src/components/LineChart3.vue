<template>
  <div>
    <line-chart :chart-data="chartData" />
    123
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { LineChart } from 'vue-chart-3'
import { defineProps } from 'vue'

// 定義 props
const props = defineProps({
  chartData: Object
})

const chartData = ref({
  labels: [], // 這裡放置日期
  datasets: [
    {
      label: 'Severity A',
      data: [], // 這裡放置 Severity A 的數據
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
})

// 假設您有一個外部來源的數據，當它更新時，您需要更新圖表數據
watch(props.chartData, (newData) => {
  chartData.value.labels = newData.map(item => item.date)
  chartData.value.datasets[0].data = newData.map(item => item.severity_A)
})

</script>
