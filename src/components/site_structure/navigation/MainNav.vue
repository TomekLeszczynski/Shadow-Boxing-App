<template>
  <div v-if="authStore.authCompleted">
    <div v-if="authStore.authCompleted">
      <router-link to="/">| Home</router-link>
      <router-link
        v-if="authStore.user"
        :to="{ name: 'shadow-boxing', params: { userId: authStore.user.uid } }"
        >| Shadow Boxing</router-link
      >
      <router-link
        v-if="authStore.user"
        :to="{ name: 'weight-monitor', params: { userId: authStore.user.uid } }"
        >| Weight Monitor</router-link
      >
      <router-link v-if="!authStore.user" to="/login-register">| Sign in/Log in </router-link>
    </div>
    <button v-if="authStore.user" @click.prevent="logoutUser">Logout</button>
    <div v-if="authStore.user">
      <p>User: {{ authStore.user.displayName || 'Guest' }}</p>
    </div>
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

// logout user (store function) and redirect to Home page
const logoutUser = () => authStore.logoutUser(router.push)
</script>
