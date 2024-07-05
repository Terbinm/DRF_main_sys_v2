<script setup>

</script>

<style scoped>

</style>

<template>
    <div id="chart"></div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
  name: 'ChartComponent',
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('/drf/chart-dataset/?format=json')
          .then(response => {
            console.log(response);
            this.createChart(response.data.results);
          })
          .catch(error => {
            console.error(error);
          });
    },
    createChart(data) {
      const dates = data.map(item => item.date);
      const values = data.map(item => item.severity_A);
      // const dates_format = dates.format('yyyy-MM-ddThh:mm:ss+08:00');
      // const chartDom = document.getElementById('main');
      // const myChart = echarts.init(chartDom);
      const chartDom = document.getElementById('chart');
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: dates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: values,
            type: 'line',
            smooth: true
          }
        ]
      };
      // option && myChart.setOption(option);
      myChart.setOption(option);
    }
  }
}
</script>
