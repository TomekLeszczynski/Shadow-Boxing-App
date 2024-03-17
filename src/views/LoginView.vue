<template>
  <div class="flex flex-col p-4 items-center w-full">
    <!--  HEADER -->
    <h1
      class="animate-text-show-up text-8xl lg:text-[9rem] text-red-500 font-semibold tracking-tighter py-3 lg:mb-12"
      aria-label="Log in heading"
    >
      Log in
    </h1>
    <!-- LOGIN FORM -->
    <login-form />
  </div>
</template>
<script setup lang="ts">
import LoginForm from '@/components/authorization/LoginForm.vue'
</script>
