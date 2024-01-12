<template>
  <div class="flex flex-col h-screen relative">
    <nav>
      <main-nav />
    </nav>
    <main class="flex flex-1 container mx-auto">
      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-350"
          leave-active-class="transition-opacity duration-350"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="flex flex-row justify-between items-center px-5 text-white py-3">
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
