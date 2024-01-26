<template>
  <div class="flex flex-col container mx-auto p-4">
    <!--  HEADER -->
    <div class="">
      <login-header-box />
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
import LoginHeaderBox from '@/components/log_in/LoginHeaderBox.vue'
</script>
