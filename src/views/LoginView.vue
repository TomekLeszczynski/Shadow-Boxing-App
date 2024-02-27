<template>
  <div class="flex flex-col container mx-auto p-4">
    <!--  HEADER -->
    <div class="">
      <h1
        class="animate-text-show-up text-7xl lg:text-[9rem] font-public-sans text-almost-white font-semibold tracking-tighter py-3 mb-12"
        aria-label="log in heading"
      >
        Log in
      </h1>
    </div>
    <div class="h-full text-almost-white">
      <div class="">
        <login-form />
      </div>
    </div>
    <!-- LOGIN FORM -->
  </div>
</template>
<script setup lang="ts">
// import component
import LoginForm from '@/components/log_in/LoginForm.vue'
</script>
