<template>
  <div class="flex h-full">
    <!-- <div
      class="absolute inset-0 origin-bottom bg-boxingYellow animate-[flyOutBackgound_700ms_ease_700ms_forwards]"
    ></div> -->
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-white font-black animate-headerFlyIn text-9xl mb-4 text-left">
        SHADOW BOXING WORKOUT
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-boxingGreen p-9 animate-flyInLeft h-auto">
          <div class="grid grid-cols-full content-end">
            <h2 class="text-8xl font-bold mb-9 leading-none">
              <div class="animate-[flyIn_1.3s_ease_1s_both]">HEADER</div>
              <div class="animate-[flyIn_1.5s_ease_1.1s_both]">TEXT</div>
              <div class="animate-[flyIn_1.7s_ease_1.2s_both]">TEST</div>
            </h2>
            <p class="text-xl animate-[flyIn_900ms_ease_1000ms_both]">
              Follow displayed commands and throw or slip away from the punches. Develop your boxing
              combos, footwork and head movement!
            </p>
            <div class="grid gap-12 grid-cols-2 mb-10">
              <div>
                <button
                  aria-label="log in"
                  role="button"
                  class="bg-black text-white text-lg font-semibold mt-5 py-5 px-9 flex flex-row items-center justify-center group tracking-wide w-full animate-[flyInLeft_900ms_ease_1000ms_both]"
                >
                  <button-label
                    labelText="Get Started"
                    class="animate-[flyIn_900ms_ease_1800ms_both] w-full font-thin"
                  />
                </button>
              </div>
              <div>
                <button
                  aria-label="log in"
                  role="button"
                  class="bg-black text-white text-lg font-semibold mt-5 py-5 px-9 flex flex-row items-center justify-center group tracking-wide w-full animate-[flyInLeft_900ms_ease_1000ms_both]"
                >
                  <button-label
                    labelText="Try As Guest"
                    class="animate-[flyIn_900ms_ease_1800ms_both] w-full font-thin"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="animate-flyInLeft bg-small-hero bg-cover bg-center h-auto"></div>
        <!-- <div class="flex-col flex ml-9 mt-10">
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
        </div> -->
      </div>
      <div class="bg-boxingPurple overflow-hidden grid grid-cols-1 animate-headerFlyIn">
        <div class="flex whitespace-nowrap">
          <div
            class="text-5xl text-white whitespace-nowrap font-semibold py-4 animate-infinite-scroll"
          >
            SPORTSWEAR ONLINE STORE AND BLOGS SECTIONS COMING SOON!
          </div>
          <div
            class="text-5xl text-white whitespace-nowrap font-semibold py-4 animate-infite-scroll"
          >
            SPORTSWEAR ONLINE STORE AND BLOGS SECTIONS COMING SOON!
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
import ButtonLabel from '@/components/login_register/supportComponents/ButtonLabel.vue'

const getStartedModalText = 'This is "Get Started" modal info text!'
const tryOutModalText = 'This is "Try Out" modal info text!'
</script>
