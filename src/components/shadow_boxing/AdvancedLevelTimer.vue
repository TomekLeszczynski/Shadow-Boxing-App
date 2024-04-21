<script setup lang="ts">
import { ref, watch, onUnmounted, computed } from 'vue'

import { playSound } from '@/components/shadow_boxing/helpers/playSounds'
import { useAdvTrainigStore, useTrainingStateStore } from '@/stores/TrainingStore'
const advTrainigStore = useAdvTrainigStore()
const trainingState = useTrainingStateStore()
const totalRounds = ref<number>(0)
const currentRound = ref<number>(0)

const minutes = ref<number>(0)
const seconds = ref<number>(0)

const setInitialValues = () => {
  totalRounds.value = advTrainigStore.rounds
  currentRound.value = 1
  advTrainigStore.trainingStatus = 'work'
}

const sessionCompleted = computed(() => {
  return currentRound.value === totalRounds.value
})
import {
  intervalId,
  handleInterval
} from '@/components/shadow_boxing/helpers/advancedTimerInterval'
import startSound from '@/assets/audio/boxing-bell-signal-start.mp3'
import finishSound from '@/assets/audio/boxing-bell-signal-finish.mp3'

const roundDuration: { minutes: number; seconds: number } = { minutes: 0, seconds: 30 }
const restDuration: { minutes: number; seconds: number } = { minutes: 0, seconds: 10 }

const resetTimerValues = (min: number, sec: number) => {
  minutes.value = min
  seconds.value = sec
}

// --- ROUND TIMER ---
const handleWorkTimer = (): void => {
  resetTimerValues(roundDuration.minutes, roundDuration.seconds)
  playSound(startSound)
  handleInterval(minutes, seconds, switchToRest, finishSound)
}
const switchToWork = () => {
  advTrainigStore.trainingStatus = 'work'
  currentRound.value++
}

// --- REST TIMER ---
const handleRestTimer = (): void => {
  resetTimerValues(restDuration.minutes, restDuration.seconds)
  handleInterval(minutes, seconds, switchToWork, null)
}
const switchToRest = () => {
  !sessionCompleted.value
    ? (advTrainigStore.trainingStatus = 'rest')
    : (advTrainigStore.trainingStatus = null)
}

watch(
  () => advTrainigStore.trainingStatus,
  (newValue) => {
    if (newValue == 'work') {
      handleWorkTimer()
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
      setInitialValues()
    }
  }
)

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
