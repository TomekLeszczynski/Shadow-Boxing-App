<template>
  <button
    @click.prevent="getAccessAsGuest"
    aria-label="Try as Guest - Access all features without an account"
    role="button"
    class="bg-boxingRed text-white text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide w-full animate-[flyInLeft_900ms_ease-out_900ms_both]"
  >
    <button-label labelText="Try As Guest" class="animate-[flyIn_900ms_ease-out_900ms_both]" />
  </button>
</template>
<script setup lang="ts">
// router import
import { useRouter } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

const router = useRouter()
const authStore = useAuthStore()

// get access as an anonymous user, redirect user to Home page with Nav items accessible only for auth users
const getAccessAsGuest = () => {
  authStore
    // run firebase function
    .getAccessAsAnAnonymous()
    // change route - Shadow Boxing view with userId data or "Guest"
    .then(() => {
      router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid || 'Guest' } })
    })
    .catch((error: Error) => {
      console.error('Unexpected error during getting access as an anonymous user:', error.message)
    })
}
</script>
