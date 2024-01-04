<template>
  <div class="flex flex-col p-4 md:p-9">
    <h2 class="text-4xl font-bold md:text-9xl text-white mb-9">
      It's done! You are ready to go...almost.
    </h2>
    <div class="text-xl text-white">
      <p>Now, please check your email inbox.</p>
      <p>Confirm your account and log in.</p>
    </div>
    <div class="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-full">
      <router-link
        to="/login"
        class="text-white text-center font-bold hover:underline cursor-pointer p-5 my-9 bg-boxingRed"
        >Let's log in</router-link
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
