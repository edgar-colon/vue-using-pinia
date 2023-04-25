import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
