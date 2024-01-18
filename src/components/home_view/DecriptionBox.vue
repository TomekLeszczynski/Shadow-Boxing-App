<template>
  <div class="bg-boxingGreen p-6 md:p-9 animate-flyInLeft h-auto">
    <div class="grid grid-cols-full content-end">
      <!-- SMALL HEADER -->
      <h2 class="text-5xl xl:text-8xl font-bold mb-5 md:mb-9 font-playfair-display">
        <div class="animate-[flyIn_1.3s_ease_both]">FOR</div>
        <div class="animate-[flyIn_1.5s_ease_both]">THE LOVE</div>
        <div class="animate-[flyIn_1.7s_ease_both]">OF BOXING</div>
      </h2>
      <!-- APP DESCRIPTION -->
      <div
        class="text-md sm:text-lg md:text-xl xl:text-2xl animate-[flyIn_900ms_ease_both] font-thin"
      >
        <p class="text-wrap mb-3">
          Shadow Boxing Workout is an innovative app that takes boxing training to a new level. With
          our app, you can practice 'shadow boxing,' refining your combinations, footwork, and head
          movement.
        </p>
        <p class="mb-3">
          Whether you're an experienced boxer or just starting your journey in the sport, our app
          adapts to your skill level. Additionally, track your progress by saving your workouts and
          weight measurements, allowing you to monitor your achievements.
        </p>
        <p class="font-semibold">Explore the world of boxing in a completely new way.</p>
      </div>

      <!-- GET-ACCESS COMPONENT -->
      <get-access />
    </div>
  </div>
</template>
<script setup lang="ts">
// component import
import GetAccess from '@/components/home_view/GetAccess.vue'
</script>
