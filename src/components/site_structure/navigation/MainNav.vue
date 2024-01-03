<template>
  <div v-if="authStore.authCompleted" class="w-full">
    <div v-if="authStore.authCompleted" class="text-white w-100 flex justify-between">
      <router-link to="/">Home</router-link>
      <router-link
        v-if="authStore.user"
        :to="{ name: 'shadow-boxing', params: { userId: authStore.user.uid } }"
        >Shadow Boxing</router-link
      >
      <router-link
        v-if="authStore.user"
        :to="{ name: 'weight-monitor', params: { userId: authStore.user.uid } }"
        >Weight Monitor</router-link
      >
      <!-- <router-link v-if="!authStore.user" to="/login-register">Sign in/Log in </router-link> -->
      <button v-if="authStore.user" @click.prevent="logoutUser">Logout</button>
    </div>
    <div v-if="authStore.user" class="text-white text-xl">
      <p>Hey {{ authStore.user.displayName || 'Champ' }}!</p>
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
