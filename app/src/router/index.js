import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Default',
      component: () => import('../views/DefaultView.vue'),
    },
    {
      path: '/math',
      name: 'Math',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/score',
      name: 'Score',
      component: () => import('../views/ScoreView.vue'),
    },
    {
      path: '/reading',
      name: 'Reading',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
