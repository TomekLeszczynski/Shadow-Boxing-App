<template>
  <div class="flex flex-col p-4 justify-center md:p-9 mx-auto font-public-sans">
    <h1 class="text-7xl font-semibold sm:text-9xl" aria-label="Confirmation message">
      <span class="block text-red-500 font-semibold">It's done...</span>
      <span class="animate-appear-slow-and-delayed text-jaffa font-bold">almost!</span>
    </h1>
    <div class="text-almost-white animate-appear-slow-and-delayed">
      <h2 class="text-3xl mt-9" aria-label="Instructions for next steps">
        Now, please check your email box, confirm your account and log in.
      </h2>
      <div class="mt-9 text-xl">
        Go to
        <span>
          <router-link to="/login" class="underline font-bold" aria-label="Go to login page"
            >Login</router-link
          >
        </span>
        page.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<!-- ACCESIBILITY SET -->
