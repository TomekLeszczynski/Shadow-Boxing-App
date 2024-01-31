<template>
  <router-link v-if="!authStore.user" to="login">Log in</router-link>
</template>
<script setup>
// import pinia store
import { useAuthStore } from '@/stores/AuthentificationStore'

const authStore = useAuthStore()
</script>
