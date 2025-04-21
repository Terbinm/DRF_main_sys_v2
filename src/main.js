import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login2.vue'
import Upload from './components/Upload.vue'
import Analysis from './components/Analysis.vue'
import AnaTable from './components/AnaTable.vue'
import LineChart from './components/LineChart.vue'
import LineChart2 from './components/LineChart2.vue'
import Profile from './components/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', redirect: '/login.html' },
        { path: '/', component: Login },
        { path: '/upload', component: Upload },
        { path: '/analysis', component: Analysis },
        { path: '/anaT', component: AnaTable },
        { path: '/linechart', component: LineChart },
        { path: '/linechart2', component: LineChart2 },
        { path: '/profile', component: Profile }
    ]
})

createApp(App).use(router).mount('#app')

