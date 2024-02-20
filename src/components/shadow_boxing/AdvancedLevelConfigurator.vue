<template>
  <div class="flex flex-col bg-almost-white p-9">
    <!-- FORM SECTION -->
    <form @submit.prevent class="flex flex-col h-full justify-between">
      <div class="h-full">
        <!-- SET ROUNDS AMOUNT SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set rounds amount [maximum 12]</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <increase-button @click="roundsAmount <= 11 ? roundsAmount++ : ''" />
            <div class="md:w-1/4 justify-center items-center font-bold flex-1 flex">
              <p class="text-lg py-1">{{ roundsAmount }}</p>
            </div>
            <decrease-button @click="roundsAmount > 1 ? roundsAmount-- : ''" />
          </div>
        </div>

        <!-- SET INTENSITY SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set intensity</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <div class="md:w-1/4 text-center flex-1">
              <input type="radio" name="intensity" id="LowInt" value="6" class="peer hidden" />
              <advanced-config-label buttonLabel="Low" for="LowInt" />
            </div>

            <div class="w-1/4 text-center flex-1">
              <input type="radio" name="intensity" id="HiInt" value="3" class="peer hidden" />
              <advanced-config-label buttonLabel="High" for="HiInt" />
            </div>
          </div>
        </div>

        <!-- SET COMPLEXITY SECTION -->
        <div class="border-b border-almost-black pb-4">
          <p class="mt-3">Set combinations complexity</p>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <div class="md:w-1/4 text-center flex-1">
              <input type="radio" name="complexity" id="LowComplex" value="6" class="peer hidden" />
              <advanced-config-label buttonLabel="Low" for="LowComplex" />
            </div>
            <div class="w-1/4 text-center flex-1">
              <input type="radio" name="complexity" id="HiComplex" value="3" class="peer hidden" />
              <advanced-config-label buttonLabel="High" for="HiComplex" />
            </div>
          </div>
        </div>
      </div>

      <!-- START BUTTON & ADDITIONAL INFO SECTION -->
      <div class="flex flex-col lg:items-end items-center">
        <p class=" mb-3 text-sm md:text-base">
          After pressing Start, you'll have 10 seconds to prepare before the workout begins.
        </p>
        <!-- START BUTTON -->
        <button class="bg-jaffa py-4 2xl:w-1/2 w-full group tracking-wide">
          <button-label labelText="Start" class="text-almost-white" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref } from 'vue'

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import AdvancedConfigLabel from './helpers/AdvancedConfigLabel.vue'
import IncreaseButton from './helpers/IncreaseButton.vue'
import DecreaseButton from './helpers/DecreaseButton.vue'

// rounds amount marker for increase/decrease configurator buttons
const roundsAmount = ref<number>(1)
</script>
