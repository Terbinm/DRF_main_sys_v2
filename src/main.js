import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Upload from './components/Upload.vue'
import Analysis from './components/Analysis.vue'
import AnaTable from './components/AnaTable.vue'
import LineChart from './components/LineChart.vue'
import LineChart2 from './components/LineChart2.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/upload', component: Upload },
        { path: '/analysis', component: Analysis },
        { path: '/anaT', component: AnaTable },
        { path: '/linechart', component: LineChart },
        { path: '/linechart2', component: LineChart2 }
    ]
})

createApp(App).use(router).mount('#app')

