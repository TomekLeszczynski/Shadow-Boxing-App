<!-- PREPARED FOR OPTIONAL FUNCTIONALITY: TIME SPAN SELECTOR -->
<template>
  <div class="text-lg mt-12">
    <span class="mr-6">Measures from recent:</span>
    <select
      class="text-custom-white border-b p-2 bg-custom-black"
      v-model="reduceValue"
      @change="emitReduceValueChange"
    >
      <option value="0">All</option>
      <option value="7">7 days</option>
      <option value="14">14 days</option>
      <option value="30">month</option>
      <option value="180">6 months</option>
      <option value="365">year</option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const reduceValue = ref<number>(30)
const emit = defineEmits(['update:reduceValue'])
const emitReduceValueChange = () => {
  emit('update:reduceValue', reduceValue.value)
}
</script>
