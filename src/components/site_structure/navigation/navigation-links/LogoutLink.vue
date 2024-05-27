<template>
  <button v-if="authStore.user" @click.prevent="logoutUser">Log Out</button>
</template>
<script setup lang="ts">
// import pinia store
import { useAuthStore } from '@/stores/AuthenticationStore'

// import router
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

// logout user (store function) and redirect to Home page
const logoutUser = () => authStore.logoutUser(router.push)
</script>
