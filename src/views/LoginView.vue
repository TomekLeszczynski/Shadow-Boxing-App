<template>

  <div class="flex grow justify-center items-center">
    <!-- LOG IN BOX -->
    <div
      class="bg-boxingYellow p-5 md:p-8 w-full sm:w-auto h-full sm:h-auto flex flex-col justify-center"
    >
      <!--  HEADER -->
      <login-header />
      <!-- FORM -->
      <login-form />
    </div>
  </div>
</template>
<script setup lang="ts">
// import component
import LoginForm from '@/components/login_register/LoginForm.vue'
import LoginHeader from '@/components/login_register/LoginHeader.vue'
</script>
