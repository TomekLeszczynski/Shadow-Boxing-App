<template>
  <div class="flex flex-col min-h-screen">
    <nav>
      <main-nav />
    </nav>
    <main class="flex flex-1">
      <router-view />
    </main>
    <footer class="flex flex-row justify-between items-center w-screen px-5 bg-black text-white py-5">
      <author-credits />
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
import AuthorCredits from './components/site_structure/footer/AuthorCredits.vue'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

onMounted(async () => {
  const authStore = useAuthStore()
  await authStore.checkUserAuthState()
})
</script>
