<template>
  <div class="flex flex-col p-4 items-center w-full">
    <!-- HEADER -->
    <h1
      class="animate-text-show-up text-7xl lg:text-[9rem] text-red-500 font-semibold tracking-tighter py-3 lg:mb-12 text-center"
      aria-label="Create account heading"
    >
      Create an Account
    </h1>
    <!-- SIGN UP FORM -->
    <sign-up-form />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import SignUpForm from '@/components/authorization/SignUpForm.vue'
import { useAuthStore } from '@/stores/AuthenticationStore'

const authStore = useAuthStore()

onBeforeUnmount(() => {
  authStore.authError = ''
})
</script>
