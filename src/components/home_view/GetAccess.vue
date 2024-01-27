<template>
  <div class="grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:mt-16 md:mt-6">
    <!-- GET STARTED CONTAINER -->
    <div class="flex flex-col justify-between">
      <p class="text-almost-white animate-text-show-up-02 text-justify mt-5 md:mt-0 text-xs md:text-base">
        Unlock the full experience by creating an account. Save your training sessions and weight
        measurements for personalized tracking and progress analysis.
      </p>
      <!-- GET STARTED BUTTON -->
      <router-link
        to="/signup"
        class="bg-red-500 text-almost-white text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide animate-button-show-from-left"
        role="button"
        aria-label="Get Started - Unlock the full experience by creating an account"
        ><button-label labelText="Get Started" />
      </router-link>
    </div>
    <!-- TRY AS GUEST CONTAINER -->
    <div class="flex flex-col justify-between">
      <p class="text-almost-white animate-text-show-up-02 text-justify mt-5 md:mt-0 text-xs md:text-base">
        Instantly access all features without the need for an account. Explore the app's
        functionality, but keep in mind that data won't be saved without registration.
      </p>
      <!-- TRY-AS-GUEST BUTTON -->
      <try-as-guest />
    </div>
  </div>
</template>

<script setup lang="ts">
// vue-router import
import { RouterLink } from 'vue-router'

// component import
import TryAsGuest from '@/components/TryAsGuest.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
</script>
