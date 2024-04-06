<template>
  <div class="absolute bg-custom-black inset-0 text-custom-white overflow-hidden">
    <!-- COUNTING DOWN -->
    <div v-if="!trainingState.countdownFinished" class="h-full grid grid-rows-12 relative">
      <div
        class="row-start-3 row-span-6 flex justify-center items-center font-semibold leading-none"
        aria-live="assertive"
      >
        <countdown-clock />
      </div>
    </div>
    <!-- TRAINING SESSION -->
    <div v-else class="h-full grid grid-rows-12 relative">
      <!-- CURRENT PUNCH NAME -->
      <div class="row-start-2 row-span-1 text-center">
        <span
          v-if="sessionIsRunning && !isPaused"
          class="text-4xl capitalize md:text-5xl"
          aria-label="Current punch name"
          >{{ currentPunch }}</span
        >
      </div>
      <!-- PUNCH NUMER / ICON DISPLAY -->
      <div
        class="row-start-3 row-span-6 flex justify-center items-center font-semibold leading-none"
        aria-live="assertive"
      >
        <!-- PUNCH NUMBER -->
        <span
          v-if="basicTrainingStore.displayMode === 'digits' && !isPaused"
          class="text-[36rem]"
          aria-label="Punch number"
          >{{ randomPunchIndex !== null ? randomPunchIndex + 1 : '' }}</span
        >
        <!-- PUNCH ICON -->
        <img
          v-if="basicTrainingStore.displayMode === 'figures' && !isPaused && !sessionIsFinished"
          :src="getCurrentPunchImage(currentPunch)"
          alt="Current punch icon"
          class="object-contain h-full"
          aria-label="Currentunch icon"
        />
        <!-- SESSION STATUS INFO DISPLAY -->
        <span v-if="isPaused" class="text-[12rem] text-custom-orange-dark">Paused</span>

        <div v-if="sessionIsFinished" class="text-[12rem]">
          <p>Well</p>
          <p>done!</p>
        </div>
      </div>
      <!-- SESSION DATA DISPLAY -->
      <div
        v-if="sessionIsRunning && !isPaused"
        class="row-start-9 row-span-1 text-center py-5 text-4xl"
        aria-live="polite"
      >
        <div>
          Punch
          <span>{{ sessionPunchesArray.length }}</span>
          of
          <span>{{ basicTrainingStore.punches }}</span>
        </div>
      </div>
      <!-- BUTTONS SECTION -->
      <div class="row-start-10 z-30 row-span-2 grid-cols-3 grid">
        <div class="col-start-2 col-span-1">
          <div class="grid grid-rows-2 h-full gap-6" v-if="trainingState.countdownFinished">
            <button
              v-if="!sessionIsFinished"
              class="row-start-1 row-span-1 py-4 w-full group tracking-wide"
              :class="isPaused ? 'bg-custom-orange-dark' : 'bg-red-500'"
              @click="toggleTimer()"
              aria-live="assertive"
            >
              <button-label
                :labelText="isPaused === false ? 'Pause Training' : 'Resume Training'"
              />
            </button>
            <button
              v-if="isPaused"
              @click="quitSession"
              class="bg-red-500 row-start-2 row-span-1 py-4 w-full group tracking-wide"
              aria-live="assertive"
            >
              <button-label labelText="Quit Training" />
            </button>
            <button
              @click="saveAndCloseSession"
              v-if="sessionIsFinished"
              class="row-start-1 row-span-1 py-4 w-full group tracking-wide bg-custom-orange-dark"
            >
              <button-label labelText="Save & Close" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onBeforeUnmount } from 'vue'

import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import CountdownClock from '@/components/shadow_boxing/CountdownClock.vue'

// audio handling
import { playCurrentPunchSound } from '@/components/shadow_boxing/helpers/basicAudioPunchesHandler'

// punch icons handling
import { getCurrentPunchImage } from '@/components/shadow_boxing/helpers/punchIconsHandler'

const sessionIsRunning = ref<boolean>(false)
const sessionIsFinished = ref<boolean>(false)
const randomPunchIndex = ref<number | null>(null)
const currentPunch = ref<string>('')
const intervalId = ref<any>(null)
const sessionPunchesArray = ref<string[]>([])

import { useBasicTrainingStore, useTrainingStateStore } from '@/stores/TrainingStore'
const basicTrainingStore = useBasicTrainingStore()
const trainingState = useTrainingStateStore()

watch(
  () => trainingState.countdownFinished,
  (newValue) => {
    if (newValue) {
      handleSession()
    }
  }
)

const punchesDelay = computed(() => {
  const intensity = basicTrainingStore.intensity
  return Math.floor(Math.random() * Number(intensity)) + 1
})

const sessionArrayFilled = computed(() => {
  return sessionPunchesArray.value.length === basicTrainingStore.punches
})

const punchesArray: string[] = [
  'jab',
  'cross',
  'lead hook',
  'rear hook',
  'lead uppercut',
  'rear uppercut'
]
const handlePunches = () => {
  randomPunchIndex.value = Math.floor(Math.random() * punchesArray.length)
  currentPunch.value = punchesArray[randomPunchIndex.value]
  sessionPunchesArray.value.push(currentPunch.value)
  playCurrentPunchSound(currentPunch.value)
}

const resetSessionDisplay = () => {
  clearInterval(intervalId.value)
  sessionIsRunning.value = false
  randomPunchIndex.value = null
  currentPunch.value = ''
}

import finishSound from '@/assets/audio/boxing-bell-signal-finish.mp3'
import { playFinishSound } from '@/components/shadow_boxing/helpers/playFinishSound'
const handleSession = (): void => {
  sessionIsRunning.value = true
  if (sessionArrayFilled.value) {
    sessionIsFinished.value = true
    playFinishSound(finishSound)
    resetSessionDisplay()
    return
  } else {
    handlePunches()
    clearInterval(intervalId.value)
    intervalId.value = setInterval(handleSession, punchesDelay.value * 1000)
  }
}

import { useRouter } from 'vue-router'
const router = useRouter()
const changeRouteToConfigurator = () => {
  router.push({ name: 'shadow-boxing' })
}
const saveAndCloseSession = () => {
  // here save session to firebase
  console.log('session end, saving')
  changeRouteToConfigurator()
}
const quitSession = () => {
  resetSessionDisplay()
  changeRouteToConfigurator()
}

// pause / resume timer toggler
const isPaused = ref<boolean>(false)
const toggleTimer = (): void => {
  isPaused.value = !isPaused.value
  if (isPaused.value === false) {
    handleSession()
  } else {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

onBeforeUnmount(() => {
  resetSessionDisplay()
})
</script>
