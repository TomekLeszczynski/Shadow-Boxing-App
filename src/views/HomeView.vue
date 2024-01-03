<template>
  <div>
    <h1 class="text-white text-9xl">Home View</h1>
    <div class="flex flex-col">
      <router-link to="/signup" class="text-white bg-boxingRed py-5 text-center mb-4"
        >Get Started</router-link
      >
      <try-as-guest />
    </div>
    <info-modal :modalText="getStartedModalText" />
    <info-modal :modalText="tryOutModalText" />
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TryAsGuest from '@/components/login_register/TryAsGuest.vue'
import InfoModal from '@/components/shared/InfoModal.vue'

const getStartedModalText = 'This is "Get Started" modal info text!'
const tryOutModalText = 'This is "Try Out" modal info text!'
</script>
