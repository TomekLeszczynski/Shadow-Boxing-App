import { createRouter, createWebHistory } from 'vue-router'

// component import
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // home
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // shadow boxing workouts
    {
      path: '/:userId/shadow-boxing',
      name: 'shadow-boxing',
      component: () => import('@/views/ShadowBoxingView.vue'),
      meta: { requiresAuth: true },
      props: true
    },

    // login-register
    {
      path: '/login-register',
      name: 'login-register',
      component: () => import('@/views/Login-RegisterView.vue')
    },

    // weight measurements charts
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
