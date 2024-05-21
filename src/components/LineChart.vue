<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue';
import VChart, {THEME_KEY} from 'vue-echarts';
import {LineChart} from 'echarts/charts'
import axios from 'axios';
import {TitleComponent, TooltipComponent, LegendComponent, GridComponent} from "echarts/components"
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers"
import {defineComponent, computed, onBeforeUnmount, onMounted, provide, reactive, ref, shallowRef} from "vue";


use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart
]);

export default defineComponent({
  name: "LineChart",
  components: {VChart},
  setup() {
    provide(THEME_KEY, "dark");
    const lineChartOption = ref<any>({
      xAxis: {
        type: 'category',
        data: null
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: {
        data: null,
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },
      grid: {
        borderColor: '#f2f2f2'
      }
    })
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.31.166:8000/chart-dataset/?format=json');
        const jsonData = response.data;
        const dates = jsonData.results.map((item: { date: string }) => item.date);
        // lineChartOption.value.xAxis.data = dates;
        const values = jsonData.results.map((item: { severity_A: string | null }) => item.severity_A ? parseFloat(item.severity_A) : 0);
        lineChartOption.value.xAxis.data = dates;
        lineChartOption.value.series.data = values;
        console.log(values)
        console.log(lineChartOption.value.series.data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    // function inputOption() {
    //   axios.get('http://192.168.31.166:8000/chart-dataset/?format=json')
    //       .then(response => {
    //         console.log(response);
    //         this.createChart(response.data.results);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       })
    //
    // }

    // const inputData =ref<string | null>({
    //
    // })

    return {
      lineChartOption,
      // inputOption
    }
  }


})

</script>

<template>
  <div>
    <v-chart v-if="lineChartOption.series.data" class="chart" :option="lineChartOption" />
  </div>
</template>

<style scoped>
.chart{
  height: 400px;
  border: 2px solid #f2f2f2;
}
canvas {
  width: auto;
  margin-top: 20px;
}
</style>
