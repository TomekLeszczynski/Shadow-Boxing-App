<template>
  <button
    @click.prevent="getAccessAsGuest(router)"
    aria-label="Try as Guest - Access all features without an account"
    class="bg-custom-orange-dark text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide w-full animate-button-show-from-left"
  >
    <button-label class="text-custom-black" labelText="Try As Guest" />
  </button>
</template>
<script setup lang="ts">
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// get access as an anonymous user, redirect user to Home page with Nav items accessible only for auth users
import { useRouter, type Router } from 'vue-router'
import { useAuthStore } from '@/stores/AuthentificationStore'
const router = useRouter()
const authStore = useAuthStore()
const getAccessAsGuest = async (router: Router): Promise<void> => {
  try {
    // run firebase function
    await authStore.getAccessAsAnAnonymous()
    // change route - Shadow Boxing View with userId data or "Guest"
    router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid || 'Guest' } })
  } catch (error: unknown) {
    console.error('Unexpected error during getting access as an anonymous user:', error)
    return
  }
}
</script>
