<template>
  <button
    v-if="status == 'paused'"
    @click="changeRoute(router, 'shadow-boxing')"
    class="bg-red-500 row-start-2 row-span-1 py-4 w-full group tracking-wide"
    aria-live="assertive"
  >
    <button-label labelText="Quit Training" />
  </button>
</template>
<script setup lang="ts">
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import { changeRoute } from './helpers/changeRoute'
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps<{
  status: string | null | undefined
}>()
</script>
