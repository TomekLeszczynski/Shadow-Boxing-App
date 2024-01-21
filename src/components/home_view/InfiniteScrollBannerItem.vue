<template>
  <div
    class="text-6xl text-white whitespace-nowrap font-semibold py-3 md:py-5 animate-infinite-scroll pl-5"
  >
    {{ bannerText }}
  </div>
</template>
<script setup lang="ts">
defineProps(['bannerText'])
</script>
