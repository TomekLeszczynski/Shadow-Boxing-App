<template>
  <div class="max-w-100-lg mx-auto max-h-100 flex-grow flex justify-center items-center">
    <div class="bg-boxingGrey p-5 md:p-8">
      <!-- HEADER -->
      <h1
        aria-label="create-account-heading"
        class="text-black md:text-9xl text-6xl font-bold py-4 uppercase"
      >
        Create Account
      </h1>
      <!-- SIGN UP FORM -->
      <sign-up-form />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'

import SignUpForm from '@/components/sign_up/SignUpForm.vue'

import { useAuthStore } from '@/stores/AuthentificationStore'
const authStore = useAuthStore()

onBeforeUnmount(() => {
  authStore.authError = ''
})
</script>
