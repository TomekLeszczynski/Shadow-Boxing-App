<template>
  <div class="absolute bg-custom-black inset-0 text-custom-white overflow-hidden">
    <div v-if="!trainingState.countdownFinished" class="h-full grid grid-rows-12 relative">
      <div
        class="row-start-3 row-span-6 flex justify-center items-center font-semibold leading-none"
        aria-live="assertive"
      >
        <countdown-clock />
      </div>
    </div>
    <div v-else class="h-full grid grid-rows-12 relative">
      <div class="row-start-2 row-span-1 text-center font-thin">
        <slot name="additional-info"></slot>
      </div>
      <div
        class="row-start-3 row-span-6 flex justify-center items-center font-semibold leading-none"
        aria-live="assertive"
      >
        <slot name="main-info"></slot>
        <slot name="training-status-info"></slot>
      </div>
      <div class="row-start-9 row-span-1 text-center font-thin py-5 text-4xl" aria-live="polite">
        <slot name="session-data"></slot>
      </div>
      <div class="row-start-10 z-30 row-span-2 grid-cols-3 grid pt-7">
        <div class="col-start-1 col-span-full px-9 md:col-start-2 md:col-span-1 md:px-0">
          <div class="grid grid-rows-2 gap-3" v-if="trainingState.countdownFinished">
            <slot name="buttons-section"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTrainingStateStore } from '@/stores/TrainingStore'
import CountdownClock from './CountdownClock.vue'
const trainingState = useTrainingStateStore()
</script>
