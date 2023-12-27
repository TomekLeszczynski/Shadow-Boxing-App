<template>
  <div>
    <div>
      <router-link to="/">| Home</router-link>
      <router-link to="/:userId/shadow-boxing">| Shadow Boxing</router-link>
      <router-link to="/:userId/weight-monitor">| Weight Monitor</router-link>
      <router-link to="/login-register">| Sign in/Log in </router-link>
    </div>
    <button v-if="authStore.isLoggedIn" @click.prevent="logoutUser">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// import pinia store
import { useAuthStore } from '@/stores/AuthentificationStore'

// import router
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()
// const logoutUser = () => console.log('klik');
const logoutUser = () => authStore.logoutUser(router.push)
</script>
