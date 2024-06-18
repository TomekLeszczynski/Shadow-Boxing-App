<template>
  <training-display-layout>
    <template #additional-info>
      <span
        v-if="sessionIsInProgress"
        class="text-4xl capitalize md:text-5xl"
        aria-label="Current punch name"
        >{{ currentPunch }}</span
      >
    </template>
    <template #main-info>
      <span
        v-if="basicTrainingStore.displayMode === 'digits' && sessionIsInProgress"
        class="text-[36rem]"
        aria-label="Punch number"
        >{{ randomPunchIndex !== null ? randomPunchIndex + 1 : '' }}</span
      >
      <!-- PUNCH ICON -->
      <img
        v-if="basicTrainingStore.displayMode === 'figures' && sessionIsInProgress"
        :src="getCurrentPunchImage(currentPunch)"
        alt="Current punch icon"
        class="object-contain h-full"
        aria-label="Current punch icon"
      />
    </template>
    <template #training-status-info>
      <span v-if="sessionIsPaused" class="text-6xl md:text-[12rem] text-custom-white">Paused</span>
      <div v-if="sessionIsFinished" class="text-8xl md:text-[12rem]">
        <p>Well</p>
        <p>done!</p>
      </div>
    </template>
    <template #session-data>
      <div
        v-if="sessionIsInProgress"
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
    </template>
    <template #buttons-section>
      <pause-resume-button :on-click-handler="toggleTimer" :status="basicTrainingStore.status" />
      <quit-training-button :status="basicTrainingStore.status" />
      <save-close-button v-if="sessionIsFinished" :save-session="saveAndCloseSession" />
    </template>
  </training-display-layout>
</template>

<script setup lang="ts">
import { ref, watch, computed, onUnmounted } from 'vue'
import TrainingDisplayLayout from '@/components/shadow_boxing/TrainingDisplayLayout.vue'
import PauseResumeButton from '@/components/shadow_boxing/PauseResumeButton.vue'
import QuitTrainingButton from '@/components/shadow_boxing/QuitTrainingButton.vue'
import SaveCloseButton from '@/components/shadow_boxing/Save&CloseButton.vue'
import { playCurrentPunchSound } from '@/components/shadow_boxing/helpers/basicAudioPunchesHandler'
import { getCurrentPunchImage } from '@/components/shadow_boxing/helpers/punchIconsHandler'
import { useBasicTrainingStore, useTrainingStateStore } from '@/stores/TrainingStore'
import { playFinishSound, playStartSound } from '@/components/shadow_boxing/helpers/playSounds'
import { nextCommandDelay } from '@/components/shadow_boxing/helpers/nextCommandDelay'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'
import { useAuthStore } from '@/stores/AuthenticationStore'
const authStore = useAuthStore()

const randomPunchIndex = ref<number | null>(null)
const currentPunch = ref<string>('')
let punchesIntervalId: NodeJS.Timeout | undefined
const sessionPunchesArray = ref<string[]>([])
const basicTrainingStore = useBasicTrainingStore()
const trainingState = useTrainingStateStore()
const punchesArray: string[] = [
  'jab',
  'cross',
  'lead hook',
  'rear hook',
  'lead uppercut',
  'rear uppercut'
]

const sessionArrayFilled = computed(() => {
  return sessionPunchesArray.value.length === basicTrainingStore.punches
})
const sessionIsInProgress = computed(() => {
  return basicTrainingStore.status == 'work'
})
const sessionIsPaused = computed(() => {
  return basicTrainingStore.status == 'paused'
})
const sessionIsFinished = computed(() => {
  return basicTrainingStore.status == 'done'
})

const toggleTimer = (): void => {
  basicTrainingStore.toggleStatus()
  if (sessionIsInProgress.value) {
    handleSession()
  } else {
    clearInterval(punchesIntervalId)
  }
}

watch(
  () => trainingState.countdownFinished,
  (newValue) => {
    if (newValue) {
      playStartSound()
      handleSession()
    }
  }
)

const handlePunches = () => {
  randomPunchIndex.value = Math.floor(Math.random() * punchesArray.length)
  currentPunch.value = punchesArray[randomPunchIndex.value]
  sessionPunchesArray.value.push(currentPunch.value)
  playCurrentPunchSound(currentPunch.value)
}

const handleSession = (): void => {
  const minDelay: number = 1
  if (basicTrainingStore.status != 'done') {
    if (sessionArrayFilled.value) {
      playFinishSound()
      basicTrainingStore.status = 'done'
      return
    } else if (sessionIsInProgress.value) {
      handlePunches()
      clearInterval(punchesIntervalId)
      punchesIntervalId = setInterval(
        handleSession,
        nextCommandDelay(minDelay, basicTrainingStore.intensity) * 1000
      )
    } else {
      basicTrainingStore.status = 'work'
      handleSession()
    }
  }
}
const resetSessionDisplay = () => {
  clearInterval(punchesIntervalId)
  randomPunchIndex.value = null
  currentPunch.value = ''
  basicTrainingStore.status = null
}

const saveAndCloseSession = async (): Promise<void> => {
  const user = authStore.user
  if (user && basicTrainingStore.status === 'done') {
    try {
      const trainingCollection = collection(db, 'users', user.uid, 'trainings')
      await addDoc(trainingCollection, {
        training: 'basic',
        punches: basicTrainingStore.punches,
        intensity: basicTrainingStore.intensity,
        displayMode: basicTrainingStore.displayMode,
        date: new Date()
      })
    } catch (error) {
      console.error('Saving Advanced Training Session Error:' + error)
    }
  }
}

onUnmounted(() => {
  resetSessionDisplay()
  trainingState.$reset()
})
</script>
