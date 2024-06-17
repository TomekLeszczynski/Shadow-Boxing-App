<template>
  <button
    @click.prevent="getAccessAsGuest"
    aria-label="Try as Guest - Access all features without an account"
    class="bg-custom-orange-dark text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide w-full animate-button-show-from-left"
    tabindex="0"
  >
    <button-label class="text-custom-black" labelText="Try As Guest" />
  </button>
</template>
<script setup lang="ts">
// shared components import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// import vue router and create router instance
import { useRouter } from 'vue-router'
const router = useRouter()

// import pinia auth store and create instance
import { useAuthStore } from '@/stores/AuthenticationStore'
const authStore = useAuthStore()

// get access as an anonymous user, redirect user to Home page with Nav items accessible only for auth users
const getAccessAsGuest = async (): Promise<void> => {
  try {
    // run firebase default function
    await authStore.getAccessAsAnAnonymous()
    // change route - Shadow Boxing View with user ID or "Guest"
    router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid || 'Guest' } })
  } catch (error) {
    console.error('Unexpected error during getting access as an anonymous user:' + error)
  }
}
</script>
