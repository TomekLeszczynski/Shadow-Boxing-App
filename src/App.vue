<template>
  <div  class="flex flex-col min-h-screen">
    <nav>
      <main-nav />
    </nav>
    <main class=" flex  flex-1">
      <router-view />
    </main>
    <footer>
      <flaticon-credits />
    </footer>
  </div>
</template>

<script setup lang="ts">
// vue import
import { onMounted } from 'vue'

// router import
import { RouterView } from 'vue-router'

// component import
import MainNav from '@/components/site_structure/navigation/MainNav.vue'
import FlaticonCredits from '@/components/site_structure/footer/FlaticonCredits.vue'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

onMounted(async () => {
  const authStore = useAuthStore()
  await authStore.checkUserAuthState()
})
</script>
