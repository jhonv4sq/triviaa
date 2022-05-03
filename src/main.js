import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Welcome from '@/components/Welcome.vue';
import './index.css'

const routes = [
    { path: '/', name: 'Home', component: Welcome }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);

app.use(router);

app.mount('#app');