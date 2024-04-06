<template>
  <span class="text-[36rem]" role="timer" aria-label="Countdown clock">
    {{ clockTimeSpan }}
  </span>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import clockSound from '@/assets/audio/clock_sound.wav'
import { useTrainingStateStore } from '@/stores/TrainingStore'

const clockTimeSpan = ref<number>(10)
const clockIntervalId = ref<any>(null)
const audio = new Audio(clockSound)

const trainingState = useTrainingStateStore()
const handleClock = (): void => {
  if (clockTimeSpan.value > 0) {
    audio.play()
    clockTimeSpan.value--
  }
  if (clockTimeSpan.value === 0 && clockIntervalId.value) {
    clearInterval(clockIntervalId.value)
    audio.pause()
    trainingState.countdownFinished = true
  }
}

const startCountingDown = (): void => {
  audio.play()
  clockIntervalId.value = setInterval(handleClock, 1000)
}

onMounted(() => {
  startCountingDown()
})
onBeforeUnmount(() => {
  clearInterval(clockIntervalId.value)
})
</script>
