import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:userId/shadow-boxing',
      name: 'shadow-boxing',
      component: () => import('@/views/ShadowBoxingView.vue'),
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: '/login-register',
      name: 'login-register',
      component: () => import('@/views/Login-RegisterView.vue')
    },
    {
      path: '/:userId/weight-monitor',
      name: 'weight-monitor',
      component: () => import('@/views/WeightMonitorView.vue'),
      meta: { requiresAuth: true },
      props: true
    }
  ]
})

export default router
