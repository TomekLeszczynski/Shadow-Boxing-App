<template>
  <div class="flex flex-col bg-custom-white text-custom-black p-9">
    <!-- FORM SECTION -->
    <form @submit.prevent class="flex flex-col h-full justify-between">
      <div class="h-full">
        <div
          v-for="(section, index) in formSection"
          :key="index"
          class="border-b border-custom-black pb-4"
        >
          <span class="mt-3">{{ section.title }}</span>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <template v-if="!section.plusMinus">
              <div
                v-for="(option, index) in section.options"
                :key="index"
                class="md:w-1/4 text-center flex-1"
              >
                <input
                  :type="section.inputType"
                  :name="section.name"
                  :id="option.id"
                  :value="option.value"
                  v-model="section.selectedOption"
                  class="peer hidden"
                />
                <label
                  :for="option.id"
                  class="text-lg block cursor-pointer select-none py-2 text-center bg-custom-white bg-opacity-20 peer-checked:bg-custom-orange-light peer-checked:font-bold peer-checked:text-custom-white hover:bg-custom-grey hover:bg-opacity-20"
                  >{{ option.label }}</label
                >
              </div>
            </template>
            <template v-else>
              <plus-minus-button @click="updateRoundsAmount(index, true)">&#43;</plus-minus-button>
              <div
                class="md:w-1/4 justify-center items-center font-bold flex-1 flex"
                aria-live="polite"
                aria-atomic="true"
              >
                <span class="text-lg py-1">{{ section.roundsAmountValue }}</span>
              </div>
              <plus-minus-button @click="updateRoundsAmount(index, false)">&#45;</plus-minus-button>
            </template>
          </div>
        </div>
      </div>

      <!-- START BUTTON & ADDITIONAL INFO SECTION -->
      <div class="flex flex-col lg:items-end items-center">
        <p class="mb-3 text-sm md:text-base">
          After pressing Start, you'll have 10 seconds to prepare before the workout begins.
        </p>
        <!-- START BUTTON -->
        <button
          class="bg-custom-orange-light text-custom-white py-4 2xl:w-1/2 w-full group tracking-wide"
          aria-label="Start session"
        >
          <button-label labelText="Start" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import PlusMinusButton from './helpers/PlusMinusButton.vue'

interface AdvancedFormSection {
  title: string
  inputType?: string
  name?: string
  plusMinus: boolean // relate to rounds amount form section - v-for renders proper template
  roundsAmountValue?: number
  selectedOption?: string
  options?: { value: string; label: string; id: string }[]
}

const formSection = ref<AdvancedFormSection[]>([
  {
    title: 'Set rounds amount [maximum 12]',
    plusMinus: true,
    roundsAmountValue: 1
  },
  {
    title: 'Set intensity',
    inputType: 'radio',
    name: 'intensity',
    plusMinus: false,
    selectedOption: '3',
    options: [
      { value: '3', label: 'Low', id: 'LowInt' },
      { value: '6', label: 'Hi', id: 'HiInt' }
    ]
  },
  {
    title: 'Set combinations complexity',
    inputType: 'radio',
    name: 'complexity',
    plusMinus: false,
    selectedOption: '0',
    options: [
      { value: '0', label: 'Low', id: 'LowComplexity' },
      { value: '1', label: 'Hi', id: 'HiComplexity' }
    ]
  }
])

// rounds amount handler = controls value 1 < x < 12
const updateRoundsAmount = (index: number, increment: boolean): void => {
  const section = formSection.value[index]
  if (increment) {
    if (section.roundsAmountValue && section.roundsAmountValue < 12) {
      section.roundsAmountValue++
    }
  } else {
    if (section.roundsAmountValue && section.roundsAmountValue > 1) {
      section.roundsAmountValue--
    }
  }
}
</script>
