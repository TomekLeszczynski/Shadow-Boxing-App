<template>
  <router-link v-if="!authStore.user" to="login">Log in</router-link>
</template>
<script setup lang="ts">
// import pinia store
import { useAuthStore } from '@/stores/AuthenticationStore'

const authStore = useAuthStore()
</script>
