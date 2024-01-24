<template>
  <div class="max-w-100-lg mx-auto max-h-100 flex-grow flex justify-center items-center">
    <div class="bg-boxingGrey p-5 md:p-8">
      <!-- HEADER -->
      <sign-up-header />
      <!-- SIGN UP FORM -->
      <sign-up-form />
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { onBeforeUnmount } from 'vue'

// import component
import SignUpForm from '@/components/sign_up/SignUpForm.vue'
import SignUpHeader from '@/components/sign_up/SignUpHeader.vue'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// store instance
const authStore = useAuthStore()

onBeforeUnmount(() => {
  authStore.authError = ''
})
</script>
