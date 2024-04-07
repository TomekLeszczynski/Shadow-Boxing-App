<template>
  <div class="text-9xl">
    <countdown-clock v-if="!trainingState.countdownFinished" />
    <div v-else class="text-center">
      <span class="block border-b-4">0{{ minutes }}</span>
      <div>
        <span v-if="seconds < 10">0</span>
        <span>{{ seconds }}</span>
      </div>
      <div>{{ trainingStatus }}</div>
      <div>
        <span>{{ rounds }}</span
        >/<span>{{ advTrainigStore.rounds }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import CountdownClock from '@/components/shadow_boxing/CountdownClock.vue'
import { useAdvTrainigStore, useTrainingStateStore } from '@/stores/TrainingStore'
const advTrainigStore = useAdvTrainigStore()

import { playFinishSound } from '@/components/shadow_boxing/helpers/playFinishSound'
import finishSound from '@/assets/audio/boxing-bell-signal-finish.mp3'
const minutes = ref<number>(0)
const seconds = ref<number>(15)
const rounds = ref<number>(1)
const rests = ref<number>(rounds.value - 1)
let roundIntervalId: number | undefined
let restIntervalId: number | undefined
const trainingStatus = ref<string | null>('work')
const trainingState = useTrainingStateStore()

const resetTimerValues = (min: number, sec: number) => {
  minutes.value = min
  seconds.value = sec
}

const startRoundInterval = () => {
  playFinishSound(finishSound)
  roundIntervalId = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
      return
    }
    if (seconds.value == 0 && minutes.value > 0) {
      minutes.value--
      seconds.value = 60
      seconds.value--
      return
    }
    playFinishSound(finishSound)
    clearInterval(roundIntervalId)
    if (rests.value > 0) {
      trainingStatus.value = 'rest'
    } else {
      trainingStatus.value = null
    }
  }, 1000)
}
const startRestInterval = () => {
  resetTimerValues(0, 5)
  restIntervalId = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
      return
    }

    clearInterval(restIntervalId)
    rounds.value--
    rests.value--
    trainingStatus.value = 'work'
    resetTimerValues(0, 15)
  }, 1000)
}

watch(
  () => rounds.value,
  (newValue) => {
    rests.value = newValue - 1
  }
)
watch(
  () => trainingStatus.value,
  (newValue) => {
    if (newValue === 'work' && rounds.value > 0) {
      startRoundInterval()
    } else if (newValue === 'rest' && rounds.value > 1) {
      startRestInterval()
    } else {
      clearInterval(roundIntervalId)
      clearInterval(restIntervalId)
    }
  }
)
watch(
  () => trainingState.countdownFinished,
  (newValue) => {
    if (newValue) {
      rounds.value = advTrainigStore.rounds
      startRoundInterval()
    }
  }
)

onUnmounted(() => {
  clearInterval(roundIntervalId)
  clearInterval(restIntervalId)
})
</script>
