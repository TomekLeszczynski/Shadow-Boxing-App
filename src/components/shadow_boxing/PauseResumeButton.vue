<template>
  <button
    v-if="status == 'work' || status == 'paused'"
    class="row-start-1 row-span-1 p-4 w-full group tracking-wide"
    :class="status == 'paused' ? 'bg-custom-orange-dark' : 'bg-red-500'"
    @click="onClickHandler"
    aria-live="assertive"
  >
    <button-label :labelText="status == 'work' ? 'Pause Training' : 'Resume Training'" />
  </button>
</template>
<script setup lang="ts">
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

defineProps<{
  onClickHandler: () => void
  status: string | null | undefined
}>()
</script>
