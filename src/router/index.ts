import { createRouter, createWebHistory } from 'vue-router'

// firebase import
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      path: '/profile/:userId/shadow-boxing',
      name: 'shadow-boxing',
      component: () => import('@/views/ShadowBoxingView.vue'),
      meta: { requiresAuth: true },
      props: true
    },

    // sign up
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    },

    // login
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },

    // reset password
    {
      path: '/password-reset',
      name: '/password-reset',
      component: () => import('@/views/PasswordResetView.vue')
    },

    // weight measurements charts
    {
      path: '/profile/:userId/weight-monitor',
      name: 'weight-monitor',
      component: () => import('@/views/WeightMonitorView.vue'),
      meta: { requiresAuth: true },
      props: true
    }
  ]
})

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

// protects routes from non-users
router.beforeEach(async (to) => {
  if (to.meta.requiresAuth && !(await getCurrentUser())) return 'home'
})

export default router
