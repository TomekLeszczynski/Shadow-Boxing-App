<template>
  <router-link
    v-if="authStore.user"
    :to="{ name: 'weight-monitor', params: { userId: authStore.user.uid } }"
  >
    Weight Monitor
  </router-link>
</template>
<script setup lang="ts">
// import pinia store
import { useAuthStore } from '@/stores/AuthenticationStore'

const authStore = useAuthStore()
</script>
