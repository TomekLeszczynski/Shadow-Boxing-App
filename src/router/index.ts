import { createRouter, createWebHistory } from 'vue-router'

// firebase import
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// component import
import HomeView from '@/views/HomeView.vue'

const routes = [
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
  // basic training display
  {
    path: '/profile/:userId/shadow-boxing/basic',
    name: 'basic',
    component: () => import('@/views/BasicTrainingDisplay.vue'),
    meta: { requiresAuth: true },
    props: true
  },
  // advanced training display
  {
    path: '/profile/:userId/shadow-boxing/advanced',
    name: 'advanced',
    component: () => import('@/views/AdvancedTrainingDisplay.vue'),
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
    name: 'password-reset',
    component: () => import('@/views/PasswordResetView.vue')
  },

  // it's done
  {
    path: '/done',
    name: 'done',
    component: () => import('@/views/RegisterConfirmationView.vue')
  },

  // weight measurements charts
  {
    path: '/profile/:userId/weight-monitor',
    name: 'weight-monitor',
    component: () => import('@/views/WeightMonitorView.vue'),
    meta: { requiresAuth: true },
    props: true
  },
  // 404
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/PageNotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  }
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
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !(await getCurrentUser())) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
export { routes }
