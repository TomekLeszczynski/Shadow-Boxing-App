<template>
  <div>
    <div>
      <router-link to="/">| Home</router-link>
      <router-link
        v-if="authStore.isLoggedIn"
        :to="{ name: 'shadow-boxing', params: { userId: authStore.user?.displayName || 'Guest' } }"
        >| Shadow Boxing</router-link
      >
      <router-link
        v-if="authStore.isLoggedIn"
        :to="{ name: 'weight-monitor', params: { userId: authStore.user?.displayName || 'Guest' } }"
        >| Weight Monitor</router-link
      >
      <router-link to="/login-register">| Sign in/Log in </router-link>
    </div>
    <button v-if="authStore.isLoggedIn" @click.prevent="logoutUser">Logout</button>
  </div>
</template>

<script setup lang="ts">
// router import
import { RouterLink } from 'vue-router'

// import pinia store
import { useAuthStore } from '@/stores/AuthentificationStore'

// import router
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

// logout user function and redirect to Home page
const logoutUser = () => authStore.logoutUser(router.push)
</script>
