<!-- 
  1. DESCRIBE SCRIPT ELEMENTS
  2. ADD QUIT BUTTON
  3. CONSIDER PINIA STORE DATA STOAGE FOR TRAINING SESSION SETUP DATA: DATA MAY FLOWS BETWEEN SESSION MODAL, 'WELL DONE' PAGE, AND NEED TO BE SAVED ON USER'S FIREBASE ACCOUNT
  4. CREATE MODAL BASE COMPONENT WITH ALL THE BUTTONS AND MAIN FUNCTIONALITY. ELEMENTS OF SPECIFIC TRAINING MODALS PLACED IN AS '<SLOT>'S 
  5. CREATE AND ADD INITIAL COUNTDOWN (10SECS) - SHARED WITH ADVANCED SESSION OR SET AS BASE MODAL ELEMENT.
  6. FIX AUDIO FILES IMPORTING ISSUES: CREATE AN OBJECT WITH PATHS TO EACH PUNCH NAME AND THEN DYNAMICALLY LOAD AUDIO FILES
 -->

<template>
  <div class="fixed bg-almost-black inset-0 font-public-sans text-almost-white">
    <div class="flex flex-col mx-auto justify-center items-center h-full p-4">
      <!-- CURRENT PUNCH NAME DISPLAY / PUNCH NAME COMES FROM NA ARRAY OF PUNCHES -->
      <p class="uppercase text-4xl md:text-5xl">{{ currentPunch }}</p>

      <!-- CURRENT PUNCH NUMBER OR FIGURE ICON DISPLAY = RELATED TO FACTOR (displayMode) SELECTED BY USER IN CONFIGURATOR DURING SESSION SETTING -->
      <div class="flex flex-col my-3" :class="{ 'h-3/5': displayMode === 'figures' }">
        <!-- FIGURE IMG FILE DISPLAYED / RELATED TO CURRENT PUNCH NAME/NUMER  -->
        <img
          v-if="displayMode === 'figures'"
          :src="getPunchImageSrc(currentPunch)"
          alt="current punch figure icon"
          class="object-contain h-full"
        />
        <!-- CURRENT PUNCH NUMBER DISPLAYED (IF displayMode SET TO DIGITS) -->
        <p
          v-else
          class="font-semibold leading-none text-center flex h-full items-center text-[24rem] sm:text-[36rem] md:text-[40rem]"
        >
          <!-- CHECK IF THERE IS randomPunchIndex / NUMBER IS ASSOCIATED WITH AN ARRAY OF PUNCHES, SO THE INDEX MUST BE INCREASED BY ONE TO GET THE RIGHT NUMBER OF THE PUNCH -->
          {{ randomPunchIndex !== null ? randomPunchIndex + 1 : '' }}
        </p>
      </div>

      <!-- PUNCHES CLOCK = PUNCHES THROWN / TOTAL PUNCHES SET IN CONFIGURATOR -->
      <p class="text-2xl text-center md:text-4xl">
        <span class="text-almost-grey">Punches:</span>
        {{ sessionPunchesArray.length }}
        / {{ punches }}
      </p>
      <!-- PAUSE / RESUME SESSION BUTTON -->
      <button
        class="bg-red-500 py-4 md:w-1/4 w-full group tracking-wide mt-6"
        @click="toggleTimer()"
      >
        <!-- BUTTON LABEL WITH DYNAMIC LABEL DEPENDING ON 'isPaused' STATUS -->
        <button-label :labelText="isPaused ? 'Pause' : 'Resume'" class="text-almost-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref, onMounted } from 'vue'

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// props that transfers data from training configurator
const props = defineProps<{
  punches: number
  intensity: number
  displayMode: string
}>()

const audioMap: Record<string, HTMLAudioElement> = {}
const randomPunchIndex = ref<number>(0)
const currentPunch = ref<string>('jab')
const intervalId = ref<number | null>(null)

const isPaused = ref<boolean>(false)
const sessionPunchesArray = ref<string[]>(['jab'])
const punchesArray: string[] = [
  'jab',
  'cross',
  'lead hook',
  'rear hook',
  'lead uppercut',
  'rear uppercut'
]

const loadAudioFiles = async () => {
  for (const punch of punchesArray) {
    const { default: punchSound } = await import(`@/assets/audio/${punch}-sound.wav`)
    const audio = new Audio(punchSound)
    audioMap[punch] = audio
  }
}

const playCurrentPunchSound = () => {
  if (currentPunch.value) {
    const audio = audioMap[currentPunch.value]
    if (audio) {
      audio.play()
    }
  }
}

const imageMap: Record<string, string> = {
  jab: '/1.1.webp',
  cross: '/2.1.webp',
  'lead hook': '/3.1.webp',
  'rear hook': '/4.1.webp',
  'lead uppercut': '/5.1.webp',
  'rear uppercut': '/6.1.webp'
}

const getPunchImageSrc = (punch: string) => {
  if (!punch || !(punch in imageMap)) {
    return ''
  } else {
    return imageMap[punch]
  }
}

const toggleTimer = () => {
  isPaused.value = !isPaused.value
  if (isPaused.value) {
    handleSession()
  } else {
    intervalId.value ? clearInterval(intervalId.value) : ''
  }
}

const handleSession = (): void => {
  const punchesDelay = Math.floor(Math.random() * Number(props.intensity)) + 1

  randomPunchIndex.value = Math.floor(Math.random() * punchesArray.length)
  currentPunch.value = punchesArray[randomPunchIndex.value]
  sessionPunchesArray.value.push(currentPunch.value)
  playCurrentPunchSound()
  intervalId.value ? clearInterval(intervalId.value) : ''
  intervalId.value = setInterval(handleSession, punchesDelay * 1000)
}

onMounted(async () => {
  await loadAudioFiles()
})
</script>
