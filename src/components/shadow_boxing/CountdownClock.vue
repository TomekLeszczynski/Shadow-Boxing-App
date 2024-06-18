<template>
  <span class="text-[20rem] md:text-[28rem] lg:text-[36rem]" role="timer" aria-label="Countdown clock">
    {{ clockTimeSpan }}
  </span>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTrainingStateStore } from '@/stores/TrainingStore'
import { playClockSound } from './helpers/playSounds'

const clockTimeSpan = ref<number>(10)
let clockIntervalId: NodeJS.Timeout | undefined = undefined

const trainingState = useTrainingStateStore()
const handleClock = (): void => {
  if (clockTimeSpan.value > 0) {
    playClockSound()
    clockTimeSpan.value--
    return
  }
  if (clockTimeSpan.value === 0 && clockIntervalId) {
    clearInterval(clockIntervalId)
    trainingState.countdownFinished = true
    return
  }
}

const startCountingDown = (): void => {
  playClockSound()
  clockIntervalId = setInterval(handleClock, 1000)
}

onMounted(() => {
  startCountingDown()
})
onBeforeUnmount(() => {
  clearInterval(clockIntervalId)
})
</script>
