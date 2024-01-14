<template>
  <div class="flex h-full overflow-hidden">
    <div class="grid grid-cols-1 gap-2 md:gap-3 p-2">
      <!-- MAIN HEADER -->
      <h1
        class="text-white font-black animate-headerFlyIn text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 text-left"
      >
        SHADOW BOXING WORKOUT
      </h1>
      <div class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-3">
        <div class="bg-boxingGreen p-4 md:p-9 animate-flyInLeft h-auto">
          <div class="grid grid-cols-full content-end">
            <!-- SMALL HEADER -->
            <h2 class="text-6xl sm:text-7xl md:text-8xl font-bold mb-5 md:mb-9">
              <div class="animate-[flyIn_1.3s_ease_both]">FOR</div>
              <div class="animate-[flyIn_1.5s_ease_both]">THE LOVE</div>
              <div class="animate-[flyIn_1.7s_ease_both]">OF BOXING</div>
            </h2>
            <!-- DESCRIPTION 01 -->
            <div class="text-md sm:text-lg md:text-2xl animate-[flyIn_900ms_ease_both] font-thin">
              <p class="text-wrap mb-3">
                Shadow Boxing Workout is an innovative app that takes boxing training to a new
                level. With our app, you can practice 'shadow boxing,' refining your combinations,
                footwork, and head movement.
              </p>
              <p class="mb-3">
                Whether you're an experienced boxer or just starting your journey in the sport, our
                app adapts to your skill level. Additionally, track your progress by saving your
                workouts and weight measurements, allowing you to monitor your achievements.
              </p>
              <p class="font-semibold">Explore the world of boxing in a completely new way.</p>
            </div>

            <!-- ACCESS-BUTTONS CONTAINER -->
            <div class="grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 my-5 md:my-10">
              <!-- GET STARTED CONTAINER -->
              <div class="w-full flex flex-col justify-between">
                <div class="text-white">
                  <p>
                    * Unlock the full experience by creating an account. Save your training sessions
                    and weight measurements for personalized tracking and progress analysis.
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
                <div class="text-white">
                  <p>
                    * Instantly access all features without the need for an account. Explore the
                    app's functionality, but keep in mind that data won't be saved without
                    registration.
                  </p>
                </div>
                <!-- TRY-AS-GUEST BUTTON -->
                <try-as-guest />
              </div>
            </div>
          </div>
        </div>
        <!-- HERO IMG -->
        <div
          class="animate-flyInLeft bg-small-hero bg-cover bg-center h-0 md:h-auto"
          alt="Young man in boxing gloves is looking up"
        ></div>
      </div>
      <!-- INFINITE SCROLL BANNER -->
      <div class="bg-boxingPurple overflow-hidden grid grid-cols-1 animate-headerFlyIn">
        <infinite-scroll-banner bannerText="ONLINE STORE AND BLOG SECTIONS COMING SOON!" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue-router import
import { RouterLink } from 'vue-router'

// component import
import TryAsGuest from '@/components/login_register/TryAsGuest.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import InfiniteScrollBanner from '@/components/home_view/InfiniteScrollBanner.vue'
</script>
