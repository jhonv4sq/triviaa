import { data } from 'autoprefixer';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Game from '@/views/Game.vue';
import Results from '@/views/Results.vue';
import './index.css'


const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    props: true
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    props: true
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

library.add([faLongArrowLeft, faLongArrowRight]);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
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