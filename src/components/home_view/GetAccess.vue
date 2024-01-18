<template>
  <div class="grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 my-5 md:my-10">
    <!-- GET STARTED CONTAINER -->
    <div class="w-full flex flex-col justify-between">
      <div class="text-white text-xs md:text-sm xl:text-base">
        <p>
          * Unlock the full experience by creating an account. Save your training sessions and
          weight measurements for personalized tracking and progress analysis.
        </p>
      </div>
      <!-- GET STARTED BUTTON -->
      <router-link
        to="/signup"
        class="bg-black text-white text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide w-full animate-[flyInLeft_900ms_ease-out_900ms_both]"
        ><button-label
          labelText="Get Started"
          class="animate-[flyIn_900ms_ease-out_900ms_both] w-full font-thin"
        />
      </router-link>
    </div>
    <!-- TRY AS GUEST CONTAINER -->
    <div class="w-full flex flex-col justify-between">
      <div class="text-white text-xs md:text-sm xl:text-base">
        <p>
          * Instantly access all features without the need for an account. Explore the app's
          functionality, but keep in mind that data won't be saved without registration.
        </p>
      </div>
      <!-- TRY-AS-GUEST BUTTON -->
      <try-as-guest />
    </div>
  </div>
</template>

<script setup lang="ts">
// vue-router import
import { RouterLink } from 'vue-router'

// component import
import TryAsGuest from '@/components/login_register/TryAsGuest.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
</script>
