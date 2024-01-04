<template>
  <div class="relative border-dashed max-h-100">
    <video
      src="@/assets/video/production_id_4761738 (2160p).mp4"
      class="abosulte h-full opacity-30 -z-998"
      autoplay
      muted
      loop
    ></video>
    <div class="absolute inset-0 flex flex-col">
      <h1 class="text-white text-9xl font-bold text-center">SHADOW BOXING WORKOUT</h1>
      <div class="grid grid-cols-8">
        <div class="flex-col flex ml-9 mt-10">
          <div class="flex-row flex justify-between">
            <router-link
              to="/signup"
              class="text-white bg-boxingRed flex justify-center items-center min-w-48 py-3"
              >Get Started</router-link
            >
            <info-modal :modalText="getStartedModalText" />
          </div>
          <div class="flex-row flex mt-5">
            <try-as-guest
              class="text-white bg-boxingRed flex justify-center items-center min-w-48 py-3"
            />
            <info-modal :modalText="tryOutModalText" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TryAsGuest from '@/components/login_register/TryAsGuest.vue'
import InfoModal from '@/components/shared/InfoModal.vue'

const getStartedModalText = 'This is "Get Started" modal info text!'
const tryOutModalText = 'This is "Try Out" modal info text!'
</script>
