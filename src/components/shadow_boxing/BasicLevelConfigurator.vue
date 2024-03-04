<template>
  <div class="flex flex-col h-full bg-almost-white p-9">
    <!-- FORM SECTION -->
    <form @submit.prevent class="flex flex-col h-full justify-between">
      <div class="h-full">
        <!-- SET PUNCHES AMOUNT SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set punches amount</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <!-- 50 PUNCHES-->
            <div class="md:w-1/4 text-center flex-1">
              <input
                type="radio"
                name="punches"
                id="50"
                value="50"
                class="peer hidden"
                v-model="punchesAmount"
              />
              <basic-config-label for="50" buttonLabel="50" />
            </div>

            <!-- 100 PUNCHES-->
            <div class="md:w-1/4 text-center flex-1">
              <input
                type="radio"
                name="punches"
                id="100"
                value="100"
                class="peer hidden"
                v-model="punchesAmount"
              />
              <basic-config-label for="100" buttonLabel="100" />
            </div>

            <!-- 250 PUNCHES -->
            <div class="md:w-1/4 text-center flex-1">
              <input
                type="radio"
                name="punches"
                id="250"
                value="250"
                class="peer hidden"
                v-model="punchesAmount"
              />
              <basic-config-label for="250" buttonLabel="250" />
            </div>
          </div>
        </div>

        <!-- SET INTENSITY SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set intensity</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <!-- LOW INTENSITY -->
            <div class="md:w-1/4 text-center flex-1">
              <input
                type="radio"
                name="intensity"
                id="LowInt"
                value="6"
                class="peer hidden"
                v-model="intensity"
              />
              <basic-config-label for="LowInt" buttonLabel="Low" />
            </div>

            <!-- MID INTENSITY -->
            <div class="w-1/4 text-center flex-1">
              <input
                type="radio"
                name="intensity"
                id="MidInt"
                value="4"
                class="peer hidden"
                v-model="intensity"
              />
              <basic-config-label for="MidInt" buttonLabel="Mid" />
            </div>

            <!--  HI INTENSITY -->
            <div class="w-1/4 text-center flex-1">
              <input
                type="radio"
                name="intensity"
                id="HiInt"
                value="3"
                class="peer hidden"
                v-model="intensity"
              />
              <basic-config-label for="HiInt" buttonLabel="High" />
            </div>
          </div>
        </div>

        <!-- DISPLAY MODE SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set display mode</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <!-- DIGITS OPTION -->
            <div class="w-1/4 text-center flex-1">
              <input
                type="radio"
                name="display_mode"
                id="Digits"
                value="digits"
                class="peer hidden"
                v-model="displayMode"
              />
              <basic-config-label for="Digits" buttonLabel="Digits" />
            </div>

            <!-- FIGURES OPTION -->
            <div class="w-1/4 text-center flex-1">
              <input
                type="radio"
                name="display_mode"
                id="Figures"
                value="figures"
                class="peer hidden"
                v-model="displayMode"
              />
              <basic-config-label for="Figures" buttonLabel="Figures" />
            </div>
          </div>
        </div>
      </div>

      <!-- START BUTTON & ADDITIONAL INFO SECTION -->
      <div class="flex flex-col xl:items-end items-center">
        <p class="mb-3 text-sm md:text-base">
          After pressing Start, you'll have 10 seconds to prepare before the workout begins.
        </p>
        <!-- START BUTTON -->
        <button
          @click="startSession = true"
          class="bg-red-500 py-4 2xl:w-1/2 w-full group tracking-wide"
        >
          <button-label labelText="Start" class="text-almost-white" />
        </button>
      </div>
    </form>
    <basic-training-modal
      v-if="startSession"
      :punches="punchesAmount"
      :intensity="intensity"
      :display-mode="displayMode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import BasicConfigLabel from './helpers/BasicConfigLabel.vue'
import BasicTrainingModal from './BasicTrainingModal.vue'


const punchesAmount = ref<number>(50)
const intensity = ref<number>(6)
const displayMode = ref<string>('figures')
const startSession = ref<boolean>(false)
</script>
