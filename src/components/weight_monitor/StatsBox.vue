<template>
  <div
    class="bg-custom-white text-custom-black grid md:grid-cols-none grid-cols-2 items-center text-center px-4 md:p-1"
  >
    <span class="block md:text-center text-left">{{ title }}</span>
    <span
      class="block font-semibold md:text-4xl xl:text-6xl 2xl:text-7xl 2xl:font-semibold md:text-center text-right md:justify-center"
      :class="valueColor"
      >{{ value }}</span
    >
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  value: number
  valueColor?: string
}>()
</script>
