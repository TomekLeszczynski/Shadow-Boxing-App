<template>
  <label
    class="text-lg block cursor-pointer select-none py-2 text-center bg-almost-white bg-opacity-20 peer-checked:bg-jaffa peer-checked:font-bold peer-checked:text-almost-white hover:bg-almost-grey hover:bg-opacity-20"
    >{{ buttonLabel }}</label
  >
</template>
<script setup lang="ts">
defineProps<{ buttonLabel: string }>()
</script>
