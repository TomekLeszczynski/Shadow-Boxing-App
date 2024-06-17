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
                  class="text-lg block cursor-pointer select-none py-2 text-center bg-custom-white bg-opacity-20 peer-checked:bg-custom-orange-light  peer-checked:text-custom-black hover:bg-custom-grey hover:bg-opacity-20"
                  >{{ option.label }}</label
                >
              </div>
            </template>
            <template v-else>
              <button
                @click="updateRoundsAmount(index, true)"
                class="md:w-1/4 flex-1 text-2xl text-custom-black py-1 hover:bg-custom-grey hover:bg-opacity-20 active:text-custom-white active:bg-custom-orange duration-100 flex justify-center items-center"
              >
                &#43;
              </button>
              <div
                class="md:w-1/4 justify-center items-center font-bold flex-1 flex"
                aria-live="polite"
                aria-atomic="true"
              >
                <span class="text-lg py-1">{{ section.roundsAmountValue }}</span>
              </div>
              <button
                @click="updateRoundsAmount(index, false)"
                class="md:w-1/4 flex-1 text-2xl text-custom-black py-1 hover:bg-custom-grey hover:bg-opacity-20 active:text-custom-white active:bg-custom-orange duration-100 flex justify-center items-center"
              >
                &#45;
              </button>
            </template>
          </div>
        </div>
      </div>

      <!-- START BUTTON & ADDITIONAL INFO SECTION -->
      <div class="flex flex-col lg:items-end items-center">
        <p class="mb-3 text-sm md:text-base font-thin" aria-label="Training instructions">
          Each round lasts for 3 minutes followed by a 1-minute rest period. After pressing Start,
          you'll have 10 seconds to prepare before the workout begins. Training contains audio commands.
        </p>
        <!-- START BUTTON -->
        <button
          @click="sendAdvSessionSetupToStore"
          class="bg-custom-orange-light text-custom-black py-4 2xl:w-1/2 w-full group tracking-wide"
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

interface AdvancedFormSection {
  title: string
  inputType?: string
  name: string
  plusMinus: boolean // relate to rounds amount form section - v-for renders proper template
  roundsAmountValue?: number
  selectedOption?: string
  options?: { value: string; label: string; id: string }[]
}

const formSection = ref<AdvancedFormSection[]>([
  {
    title: 'Set rounds amount',
    name: 'rounds',
    plusMinus: true,
    roundsAmountValue: 1
  },
  {
    title: 'Set intensity',
    inputType: 'radio',
    name: 'intensity',
    plusMinus: false,
    selectedOption: '6',
    options: [
      { value: '6', label: 'Low', id: 'LowIntensity' },
      { value: '3', label: 'Hi', id: 'HiIntensity' }
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

const grabSelectedAdvancedOptions = (name: string) => {
  if (name) {
    const section = formSection.value.find((section) => section.name === name)
    if (section) {
      if (section.name === 'rounds') {
        return section.roundsAmountValue
      } else {
        return section.selectedOption
      }
    }
  }
  return ''
}

// send data to pinia store and change route
import { useAdvTrainingStore } from '@/stores/TrainingStore'
import { useRouter } from 'vue-router'
const advTrainigStore = useAdvTrainingStore()
const router = useRouter()
const sendAdvSessionSetupToStore = () => {
  const data = {
    rounds: Number(grabSelectedAdvancedOptions('rounds')),
    complexity: Number(grabSelectedAdvancedOptions('complexity')),
    intensity: Number(grabSelectedAdvancedOptions('intensity'))
  }
  advTrainigStore.setTrainingData(data)
  router.push({ name: 'advanced' })
}
</script>
