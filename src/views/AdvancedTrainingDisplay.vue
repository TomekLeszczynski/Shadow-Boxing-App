<template>
  <training-display-layout>
    <template #additional-info>
      <div
        v-if="sessionIsInProgress"
        class="text-4xl capitalize md:text-5xl"
        aria-label="Training Phase"
      >
        {{ advTrainigStore.status }}
      </div>
    </template>
    <template #main-info>
      <div v-if="sessionIsInProgress" class="text-[14rem] text-center divide-y-4 w-[20rem]">
        <span class="block pb-4">0{{ minutes }}</span>
        <div class="pt-4">
          <span v-if="seconds < 10">0</span>
          <span>{{ seconds }}</span>
        </div>
      </div>
    </template>
    <template #training-status-info>
      <span v-if="sessionIsPaused" class="text-[12rem] text-custom-white">Paused</span>
      <div v-if="sessionIsFinished" class="text-[12rem]">
        <p>Well</p>
        <p>done!</p>
      </div>
    </template>
    <template #session-data>
      <span v-if="sessionIsInProgress">Round {{ currentRound }} of </span>
      <span v-if="sessionIsInProgress">{{ advTrainigStore.rounds }}</span>
    </template>
    <template #buttons-section>
      <pause-resume-button :on-click-handler="toggleTimer" :status="advTrainigStore.status" />
      <quit-training-button :status="advTrainigStore.status" />
      <save-close-button :save-session="saveAndCloseSession" />
    </template>
  </training-display-layout>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, onMounted, computed } from 'vue'

import PauseResumeButton from '@/components/shadow_boxing/PauseResumeButton.vue'
import QuitTrainingButton from '@/components/shadow_boxing/QuitTrainingButton.vue'
import SaveCloseButton from '@/components/shadow_boxing/Save&CloseButton.vue'
import TrainingDisplayLayout from '@/components/shadow_boxing/TrainingDisplayLayout.vue'
import {
  playStartSound,
  playFinishSound,
  playSound
} from '@/components/shadow_boxing/helpers/playSounds'
import { useAdvTrainigStore, useTrainingStateStore } from '@/stores/TrainingStore'
import {
  intervalId,
  handleInterval
} from '@/components/shadow_boxing/helpers/advancedTimerInterval'

import {
  getAudioFiles,
  combinationsArray
} from '@/components/shadow_boxing/helpers/advancedAudioCombinationsHandler'
import { nextCommandDelay } from '@/components/shadow_boxing/helpers/nextCommandDelay'

const advTrainigStore = useAdvTrainigStore()
const trainingState = useTrainingStateStore()
const currentRound = ref<number>(0)

const minutes = ref<number>(0)
const seconds = ref<number>(0)

const toggleTimer = (): void => {
  advTrainigStore.toggleStatus()
}
const saveAndCloseSession = () => {
  // SAVE TO FIREBASE FUNCTION
  console.log('Session end! Saving')
}

const sessionCompleted = computed(() => {
  return currentRound.value === advTrainigStore.rounds
})
const sessionIsInProgress = computed(() => {
  return advTrainigStore.status == 'work'
})
const sessionIsPaused = computed(() => {
  return advTrainigStore.status == 'paused'
})
const sessionIsFinished = computed(() => {
  return advTrainigStore.status == 'done'
})
// const isRestTime = computed(() => {
//   return advTrainigStore.status == 'rest'
// })

const completionSignal = computed(() => {
  return sessionCompleted.value && minutes.value == 0 && seconds.value == 0
})
// --- TIMER SETUP ---

const roundDuration: { minutes: number; seconds: number } = { minutes: 3, seconds: 0 }
const restDuration: { minutes: number; seconds: number } = { minutes: 1, seconds: 0 }

const resetTimerValues = (min: number, sec: number) => {
  minutes.value = min
  seconds.value = sec
}

// --- ROUND TIMER ---
const handleWorkTimer = (): void => {
  resetTimerValues(roundDuration.minutes, roundDuration.seconds)
  playStartSound()
  handleInterval(minutes, seconds, switchToRest, playFinishSound)
}
const switchToWork = () => {
  advTrainigStore.status = 'work'
  currentRound.value++
}
const continueWorkAfterPaused = () => {
  clearAllIntervals()
  resetTimerValues(minutes.value, seconds.value)
  handleInterval(minutes, seconds, switchToRest)
  handleAdvancedSession()
}

// --- REST TIMER ---
const handleRestTimer = (): void => {
  if (!completionSignal.value) {
    resetTimerValues(restDuration.minutes, restDuration.seconds)
    handleInterval(minutes, seconds, switchToWork)
  } else {
    advTrainigStore.status = 'done'
  }
}
const switchToRest = () => {
  !sessionCompleted.value ? (advTrainigStore.status = 'rest') : (advTrainigStore.status = null)
}

const clearAllIntervals = (): void => {
  clearInterval(intervalId)
  clearInterval(combinationsIntervalId)
}
const startWorking = () => {
  handleWorkTimer()
  handleAdvancedSession()
}

watch(
  () => advTrainigStore.status,
  (newValue, oldValue) => {
    if (newValue == 'work') {
      if (oldValue == 'paused') {
        continueWorkAfterPaused()
      } else {
        startWorking()
      }
    } else if (newValue == 'rest') {
      handleRestTimer()
    } else {
      clearInterval(intervalId)
    }
  }
)

watch(
  () => trainingState.countdownFinished,
  (newValue) => {
    if (newValue) {
      currentRound.value = 1
      advTrainigStore.status = 'work'
    }
  }
)

// COMBINATIONS HANDLER

const nextCommandMinDelay: number = 3
let currentCombination: string
let combinationsIntervalId: NodeJS.Timeout | undefined = undefined

const tooLateForNextCombination = computed(() => {
  return minutes.value === 0 && seconds.value <= 3
})

const getCombinationIndex = (URLsArray: string[]) => {
  if (URLsArray) {
    const randomCombinationIndex = Math.floor(Math.random() * combinationsArray.length)
    currentCombination = URLsArray[randomCombinationIndex]
  } else {
    console.error('URLs array is empty: ' + Error)
  }
}

const handleAdvancedSession = (): void => {
  if (advTrainigStore.status === 'work' && !tooLateForNextCombination.value) {
    getCombinationIndex(combinationsArray)
    playSound(currentCombination)
    clearInterval(combinationsIntervalId)
    combinationsIntervalId = setInterval(
      handleAdvancedSession,
      nextCommandDelay(nextCommandMinDelay, advTrainigStore.intensity) * 1000
    )
  } else {
    clearInterval(combinationsIntervalId)
  }
}

onMounted(async () => {
  if (combinationsArray.length == 0) {
    await getAudioFiles()
  } else {
    return
  }
})

onUnmounted(() => {
  clearAllIntervals()
  advTrainigStore.$reset()
})
</script>
