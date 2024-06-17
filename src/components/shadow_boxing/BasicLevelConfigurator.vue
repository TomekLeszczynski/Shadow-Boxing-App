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
                class="text-lg block cursor-pointer select-none py-2 text-center bg-custom-white bg-opacity-20 peer-checked:bg-red-500  peer-checked:text-custom-black hover:bg-custom-grey hover:bg-opacity-20"
                :for="option.value"
                >{{ option.label }}</label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- START BUTTON & ADDITIONAL INFO SECTION -->
      <div class="flex flex-col xl:items-end items-center">
        <p class="mb-3 text-sm md:text-base font-thin" aria-label="Training instructions">
          After pressing Start, you'll have 10 seconds to prepare before the workout begins.
          Training contains audio commands.
        </p>
        <!-- START BUTTON -->
        <button
          @click="sendBasicSessionSetupToStore"
          class="bg-red-500 text-custom-white py-4 2xl:w-1/2 w-full group tracking-wide"
          aria-label="Start session"
        >
          <button-label class="text-custom-black" labelText="Start" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

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

// get data from configurator
const grabSelectedOptions = (name: string): string => {
  if (name) {
    const section = formSections.value.find((section) => section.name === name)
    if (section) {
      return section.selectedOption
    }
  }
  return ''
}

// send data to pinia store and change route
import { useBasicTrainingStore } from '@/stores/TrainingStore'
import { useRouter } from 'vue-router'
const basicTrainingStore = useBasicTrainingStore()
const router = useRouter()

const sendBasicSessionSetupToStore = () => {
  const data = {
    punches: Number(grabSelectedOptions('punches')),
    intensity: Number(grabSelectedOptions('intensity')),
    displayMode: grabSelectedOptions('display_mode')
  }
  basicTrainingStore.setTrainingData(data)
  router.push({ name: 'basic' })
}
</script>
