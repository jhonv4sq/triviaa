import { data } from 'autoprefixer';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from '@/views/home.vue';
import Settings from '@/views/Settings.vue';
import './index.css'

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');

export default {
    data(){
      return {
        blue: 'bg-blue-500 hover:bg-blue-800',
        red: 'bg-red-500 hover:bg-red-800',
        violet: 'bg-violet-500 hover:bg-violet-800',
        green: 'bg-green-500 hover:bg-green-800',
        amber: 'bg-amber-500 hover:bg-amber-800',
        emerald: 'bg-emerald-500 hover:bg-emerald-800',
      }
    }
}