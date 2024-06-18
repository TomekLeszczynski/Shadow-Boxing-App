<template>
  <router-link
    v-if="authStore.user" 
    :to="{ name: 'shadow-boxing', params: { userId: authStore.user.uid } }"
  >
    Shadow Boxing
  </router-link>
</template>
<script setup lang="ts">
// import pinia store
import { useAuthStore } from '@/stores/AuthenticationStore'

const authStore = useAuthStore()
</script>
