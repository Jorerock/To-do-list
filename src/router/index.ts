import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoriqueDone from '../views/HistoriqueDone.vue'
import ToDoList from '@/views/ToDoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: ToDoList
    },

    {
      path: '/HistoriqueDone',
      name: 'HistoriqueDone',
      component: HistoriqueDone
    }
  ]
})

export default router
