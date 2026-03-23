import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/interpolation',
      name: 'interpolation',
      component: () => import('../views/DemoOneView.vue'),
    },
    {
      path: '/heatmap',
      name: 'heatmap',
      component: () => import('../views/DemoTwoView.vue'),
    },
    {
      path: '/binary',
      name: 'binary',
      component: () => import('../views/DemoThreeView.vue'),
    },
  ],
})

export default router
