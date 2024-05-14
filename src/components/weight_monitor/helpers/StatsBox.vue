<template>
  <div class="bg-custom-white text-custom-black grid items-center text-center border-custom-black">
    <span class="block">{{ title }}</span>
    <span class="block text-8xl font-semibold justify-center" :class="valueColor">{{ value }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  value: number
  valueColor?: string
}>()
</script>
