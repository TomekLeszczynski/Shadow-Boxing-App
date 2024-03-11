<template>
  <label
    class="text-lg block cursor-pointer select-none py-2 text-center bg-custom-white bg-opacity-20 peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-custom-white hover:bg-custom-grey hover:bg-opacity-20"
    >{{ buttonLabel }}</label
  >
</template>
<script setup lang="ts">
defineProps<{ buttonLabel: string }>()
</script>
