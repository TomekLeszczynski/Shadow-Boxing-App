<template>
  <div class="grid grid-cols-1 gap-2 md:gap-3 p-4 relative overflow-hidden">
    <!-- MAIN COLUMN -->
    <div class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-8 2xl:pt-8 pt-7">
      <div
        class="flex flex-col justify-between text-almost-white font-public-sans relative"
      >
        <!-- HEADING -->
        <h1
          class="text-lg sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-4xl indent-10 font-semibold mb-5 animate-text-show-up"
        >
          Set up your shadow-boxing session, follow the commands to execute punches or slips
          accordingly. Remember to maintain active footwork and head movement.
        </h1>

        <!-- DESCRIPTION -->
        <p
          class="text-sm sm:text-lg lg:text-sm xl:text-base 2xl:text-xl animate-text-show-up md:mb-5 h-0 md:h-auto"
        >
          The numbering system used for different punches in boxing is purposefully designed to aid
          in remembering and developing winning combinations. It's based on a traditional boxing
          stance and follows a formula where even-numbered punches are right-hand punches and
          odd-numbered punches are left-hand punches.
        </p>

        <!-- SELECT LEVEL SECTION -->
        <section>
          <!-- SELECT LEVEL HEADER -->
          <h2
            class="text-xl 2xl:text-3xl pb-3 font-semibold flex items-center border-t py-4 animate-appear-slow-and-delayed"
          >
            Select level
          </h2>

          <!-- LEVEL BUTTONS & DESCRIPTION SECTION -->
          <div class="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            <!--BASIC LEVEL BUTTON -->
            <level-selector
              level="Basic"
              @click="(basicSelected = true) && (advancedSelected = false)"
              class="hover:bg-red-500 active:bg-custom-white active:text-custom-black duration-200 text-left"
              :class="{ 'bg-red-500': basicSelected, 'bg-none': advancedSelected }"
            >
              <!-- BASIC LEVEL DESCRIPTION / SLOT USED -->
              <li class="pb-2">
                <p>Suitable for beginners and those who are looking for a less intense workout;</p>
              </li>
              <li class="pb-2">
                <p>
                  Focuses on basic combinations and slower pace to help users grasp fundamental
                  movements;
                </p>
              </li>
              <li class="pb-2">
                <p>
                  Audio commands and simplified figure which demonstrates each punch, making it
                  easier to follow along;
                </p>
              </li>
            </level-selector>

            <!-- ADVANCED LEVEL BUTTON -->
            <level-selector
              level="Advanced"
              @click="(advancedSelected = true) && (basicSelected = false)"
              class="hover:bg-custom-orange-light active:bg-custom-white active:text-custom-black duration-200 text-left"
              :class="{ 'bg-custom-orange-light': advancedSelected, 'bg-none': basicSelected }"
            >
              <!-- ADVANCED LEVEL DESCRIPTION / SLOT USED -->
              <li class="pb-2">
                <p>Designed for advanced users aiming for a high-intensity workout.</p>
              </li>
              <li class="pb-2">
                <p>Emphasizes rapid movements and more complex combinations;</p>
              </li>
              <li class="pb-2">
                <p>Audio commands allows helps users to stay focused on the movements.</p>
              </li>
            </level-selector>
          </div>
        </section>
      </div>

      <!-- 2ND COLUMN - HERO IMAGE & CONFIGURATOR SECTION -->
      <div class="h-full flex flex-col relative min-h-[33rem]">
        <!-- HERO IMAGE -->
        <div class="animate-appear-slow-and-delayed">
          <img
            src="@/assets/photos/hero-halftone-2_opt.webp"
            alt="halftone-image-woman-during-boxing-training-close-view"
            class="absolute inset-0 h-full w-full object-none opacity-35 -z-10"
          />
        </div>

        <!-- BASIC / ADVANCED COMPONENT WITH VUE TRANSITIONS -->
        <Transition
          mode="out-in"
          enter-active-class="transition-transform duration-1000"
          leave-active-class="transition-transform duration-1000"
          enter-from-class="transform translate-x-full"
          leave-to-class="transform translate-x-full"
        >
          <component
            v-if="basicSelected || advancedSelected"
            :is="switchingConfigurator"
            class="absolute inset-0"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LevelSelector from '@/components/shadow_boxing/LevelSelector.vue'
import BasicLevelConfigurator from '@/components/shadow_boxing/BasicLevelConfigurator.vue'
import AdvancedLeveleConfigurator from '@/components/shadow_boxing/AdvancedLevelConfigurator.vue'

import { ref, computed, onMounted } from 'vue'

// clicked button indicators - helps to handle displayed configurator and dynamic classes (change color on @click)
const basicSelected = ref<boolean>(false)
const advancedSelected = ref<boolean>(false)

// displayed configurator handler
const switchingConfigurator = computed(() => {
  return basicSelected.value === true ? BasicLevelConfigurator : AdvancedLeveleConfigurator
})

import { useTrainingStateStore } from '@/stores/TrainingStore'
const trainingState = useTrainingStateStore()
onMounted(() => {
  trainingState.countdownFinished = false
})
</script>
