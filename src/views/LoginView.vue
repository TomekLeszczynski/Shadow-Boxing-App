<template>
  <div class="flex flex-col w-full">
    <!--  HEADER -->
    <div class="">
      <login-header />
    </div>
    <div class="grid grid-cols-3 text-almost-white">
      <div class="col-span-1 animate-button-show-from-left">
        <div class="flex flex-row justify-between">
          <p class="text-almost-white font-public-sans w-full border-t text-xl pt-2">Text</p>
        </div>
      </div>
      <div class="col-start-3 col-end-4">
        <login-form />
      </div>
    </div>
    <!-- LOGIN FORM -->
  </div>
</template>
<script setup lang="ts">
// import component
import LoginForm from '@/components/log_in/LoginForm.vue'
import LoginHeader from '@/components/log_in/LoginHeader.vue'
</script>
