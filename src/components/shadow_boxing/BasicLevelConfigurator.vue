<template>
  <div class="flex flex-col h-full bg-custom-white text-custom-black p-9">
    <!-- FORM SECTION -->
    <form @submit.prevent class="flex flex-col h-full justify-between">
      <div class="h-full">
        <div
          v-for="(section, index) in formSections"
          :key="index"
          class="border-b border-custom-black pb-4"
        >
          <span class="mt-3">{{ section.title }}</span>
          <div class="flex flex-row mt-3 xl:flex-col xl:items-end">
            <div
              v-for="(option, index) in section.options"
              :key="index"
              class="md:w-1/4 text-center flex-1"
            >
              <input
                :type="section.inputType"
                :name="section.name"
                :id="option.value"
                :value="option.value"
                v-model="section.selectedOption"
                class="peer hidden"
              />
              <label
                class="text-lg block cursor-pointer select-none py-2 text-center bg-custom-white bg-opacity-20 peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-custom-white hover:bg-custom-grey hover:bg-opacity-20"
                :for="option.value"
                >{{ option.label }}</label
              >
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
          @click="isClockRunning = true"
          class="bg-red-500 text-custom-white py-4 2xl:w-1/2 w-full group tracking-wide"
          aria-label="Start session"
        >
          <button-label labelText="Start" />
        </button>
      </div>
    </form>

    <countdown-clock v-if="isClockRunning" @countdown-finished="switchViews" />
    <basic-training-display
      v-if="isTrainingRunning"
      :punches="Number(grabSelectedOptions('punches'))"
      :intensity="Number(grabSelectedOptions('intensity'))"
      :display-mode="grabSelectedOptions('display_mode')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import BasicTrainingDisplay from './BasicTrainingDisplay.vue'
import CountdownClock from './CountdownClock.vue'

interface BasicFormSection {
  title: string
  inputType: string
  name: string
  selectedOption: string
  options: { value: string; label: string }[]
}

const formSections = ref<BasicFormSection[]>([
  {
    title: 'Set punches amount',
    inputType: 'radio',
    name: 'punches',
    selectedOption: '50',
    options: [
      { value: '50', label: '50' },
      { value: '100', label: '100' },
      { value: '250', label: '250' }
    ]
  },
  {
    title: 'Set intensity',
    inputType: 'radio',
    name: 'intensity',
    selectedOption: '6',
    options: [
      { value: '6', label: 'Low' },
      { value: '4', label: 'Mid' },
      { value: '3', label: 'High' }
    ]
  },
  {
    title: 'Set display mode',
    inputType: 'radio',
    name: 'display_mode',
    selectedOption: 'figures',
    options: [
      { value: 'digits', label: 'Digits' },
      { value: 'figures', label: 'Figures' }
    ]
  }
])

const isClockRunning = ref<boolean>(false)
const isTrainingRunning = ref<boolean>(false)
const switchViews = () => {
  isClockRunning.value = false
  isTrainingRunning.value = true
}

const grabSelectedOptions = (name: string): string => {
  if (name) {
    const section = formSections.value.find((section) => section.name === name)
    if (section) {
      return section.selectedOption
    }
  }
  return ''
}
</script>
