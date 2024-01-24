<template>
  <div v-if="authStore.authCompleted" class="py-3 px-6 text-almost-white text-2xl border-b">
    <div
      v-if="authStore.authCompleted"
      class="w-100 flex justify-between items-center font-public-sans"
    >
      <router-link to="/">[ Home ]</router-link>
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
      <router-link v-if="!authStore.user" to="/login" class="px-5 text-almost-black bg-almost-white hover:text-almost-white hover:bg-almost-black">Login</router-link>
      <button v-if="authStore.user" @click.prevent="logoutUser" class="border px-5 py-2">
        Log Out
      </button>
    </div>
    <div v-if="authStore.user" class="text-xl">
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

// component import
import NavigationLabel from '@/components/shared/NavigationLabel.vue'

// logout user (store function) and redirect to Home page
const logoutUser = () => authStore.logoutUser(router.push)
</script>
