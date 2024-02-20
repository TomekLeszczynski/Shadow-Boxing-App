<template>
  <!-- LABEL -->
  <div class="flex items-center justify-center text-xl">
    <span class="font-public-sans">{{ labelText }}</span>
    <!-- HOVERED ICOM -->
    <span class="group-hover:translate-x-3 transition duration-300 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </span>
  </div>
</template>
<script setup lang="ts">
defineProps(['labelText'])
</script>
