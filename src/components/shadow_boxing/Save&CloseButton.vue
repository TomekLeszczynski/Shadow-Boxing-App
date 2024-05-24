<template>
  <button
    @click="saveAndCloseSession(saveSession)"
    class="row-start-1 row-span-1 py-4 w-full group tracking-wide bg-custom-orange-dark"
  >
    <button-label labelText="Save & Close" />
  </button>
</template>
<script setup lang="ts">
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
import { changeRoute } from './helpers/changeRoute'
import { useRouter } from 'vue-router'
const router = useRouter()

const saveAndCloseSession = (saveSession: () => void): void => {
  saveSession() // SAVE SESSION TO FIREBASE HERE
  changeRoute(router, 'shadow-boxing')
}
defineProps<{
  saveSession: () => void
}>()
</script>
