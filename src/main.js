import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  { 
    path: '/game', 
    name: 'game',
    component: () => import('./views/Game.vue')
  },
  { 
    path: '/settings', 
    name: 'settings',
    component: () => import('./views/Settings.vue')
  },
  { 
    path: '/score', 
    name: 'score',
    component: () => import('./views/Score.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
