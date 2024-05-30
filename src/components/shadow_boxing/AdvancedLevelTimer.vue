<script setup lang="ts">
import { ref, watch, onUnmounted, computed } from 'vue'
import { useAdvTrainingStore, useTrainingStateStore } from '@/stores/TrainingStore'
const advTrainingStore = useAdvTrainingStore()
const trainingState = useTrainingStateStore()
const totalRounds = ref<number>(0)
const currentRound = ref<number>(0)

const minutes = ref<number>(0)
const seconds = ref<number>(0)

const setInitialValues = () => {
  totalRounds.value = advTrainingStore.rounds
  currentRound.value = 1
  advTrainingStore.status = 'work'
}

const sessionCompleted = computed(() => {
  return currentRound.value === totalRounds.value
})
import {
  intervalId,
  handleInterval
} from '@/components/shadow_boxing/helpers/advancedTimerInterval'
import { playFinishSound, playStartSound } from '@/components/shadow_boxing/helpers/playSounds'

interface TimerValues {
  minutes: number
  seconds: number
}
const roundDuration: TimerValues = { minutes: 0, seconds: 30 }
const restDuration: TimerValues = { minutes: 0, seconds: 10 }

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
  advTrainingStore.status = 'work'
  currentRound.value++
}

// --- REST TIMER ---
const handleRestTimer = (): void => {
  resetTimerValues(restDuration.minutes, restDuration.seconds)
  handleInterval(minutes, seconds, switchToWork, undefined)
}
const switchToRest = () => {
  !sessionCompleted.value ? (advTrainingStore.status = 'rest') : (advTrainingStore.status = null)
}

watch(
  () => advTrainingStore.status,
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
