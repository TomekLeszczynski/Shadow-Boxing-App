<template>
  <span
    class="text-3xl transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100"
    >{{ labelText }}</span
  >
</template>
<script setup lang="ts">
defineProps(['labelText'])
</script>
