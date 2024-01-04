<template>
  <div class="flex flex-col p-4 md:p-9 mx-auto">
    <div class="grid grid-cols-1 xl:grid-cols-2">
      <h2 class="text-5xl sm:text-7xl font-bold md:text-9xl text-white mb-9 uppercase">
        <div>It's</div>
        <div>done</div>
        <div class="animate-flyInSlow text-boxingYellow">...almost!</div>
      </h2>
    </div>
    <div class="animate-[showInfo_500ms_linear_2.5s_both] uppercase">
      <div class="text-4xl text-white font-semibold">
        <p>&#x2022; Now, please check your email inbox.</p>
        <p>&#x2022; Confirm your account and log in.</p>
      </div>
      <div class="grid">
        <router-link
          to="/login"
          class="text-white flex justify-center items-center font-bold group cursor-pointer p-5 my-9 bg-boxingRed"
          ><span class="text-2xl">to log in</span>
          <span class="group-hover:translate-x-3 transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg> </span
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
