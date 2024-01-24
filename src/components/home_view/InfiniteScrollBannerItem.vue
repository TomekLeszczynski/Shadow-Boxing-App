<template>
  <div
    class="text-3xl font-public-sans text-almost-white whitespace-nowrap animate-infinite-scroll pl-5"
  >
    {{ bannerText }}
  </div>
</template>
<script setup lang="ts">
defineProps(['bannerText'])
</script>
