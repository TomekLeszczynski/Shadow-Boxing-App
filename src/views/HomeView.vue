<template>
  <div class="grid grid-cols-1 gap-2 md:gap-3 p-4 relative" aria-live="polite">
    <!-- BACKGROUND IMAGE DISPLAYED ON SMALLER DEVICES -->
    <img
      src="@/assets/photos/hero-halftone_opt.webp"
      alt="halftone-image-woman-during-boxing-training"
      class="absolute inset-0 h-full w-full object-contain opacity-30 -z-20 lg:hidden"
      aria-hidden="true"
    />
    <!-- MAIN HEADER -->
    <h1
      class="text-red-500 font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] tracking-tighter py-3 lg:mb-12"
    >
      Shadow Boxing Workout
    </h1>
    <!-- DESCRIPTION & HERO IMAGE SECTION-->
    <div class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-8 mb-9">
      <!-- HERO BOX COMPONENT -->
      <hero-box />
      <div class="h-full flex flex-col justify-between">
        <!-- DESCRIPTION -->
        <div class="text-base sm:text-xl md:text-2xl xl:text-3xl lg:mb-12 animate-text-show-up">
          <p class="mb-3 indent-10">
            This app takes boxing training to a new level. With our app, you can practice 'shadow
            boxing,' refining your combinations, footwork, and head movement.
          </p>
          <p class="mb-3">
            Whether you're an experienced boxer or just starting your journey in the sport, our app
            adapts to your skill level. Additionally, track your progress by saving your workouts
            and weight measurements, allowing you to monitor your achievements.
          </p>
        </div>
        <!-- ACCESS BUTTONS BOX : SIGNUP & TRY AS GUEST -->
        <get-access />
      </div>
    </div>
    <!-- INFINITE SCROLL BANNER -->
    <infinite-scroll-banner bannerText="Online store and Blog section coming soon!" />
  </div>
</template>
<script setup lang="ts">
// component import

import InfiniteScrollBanner from '@/components/home_view/InfiniteScrollBanner.vue'
import HeroBox from '@/components/home_view/HeroBox.vue'
import GetAccess from '@/components/home_view/GetAccess.vue'
</script>
