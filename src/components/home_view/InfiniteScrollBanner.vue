<template>
  <div class="flex">
    <div
      class="text-6xl text-white whitespace-nowrap font-semibold py-2 md:py-4 animate-infinite-scroll pl-5"
    >
      {{ bannerText }}
    </div>
    <div
      class="text-6xl text-white whitespace-nowrap font-semibold py-2 md:py-4 animate-infinite-scroll pl-5"
    >
      {{ bannerText }}
    </div>
    <div
      class="text-6xl text-white whitespace-nowrap font-semibold py-2 md:py-4 animate-infinite-scroll pl-5"
    >
      {{ bannerText }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['bannerText'])
</script>
