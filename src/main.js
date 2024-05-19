import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Upload from './components/Upload.vue'
import Analysis from './components/Analysis.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/upload', component: Upload },
        { path: '/analysis', component: Analysis }
    ]
})

createApp(App).use(router).mount('#app')

