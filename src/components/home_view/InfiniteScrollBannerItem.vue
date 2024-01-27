<template>
  <div
    class="text-2xl lg:text-3xl font-public-sans text-narvik whitespace-nowrap animate-infinite-scroll pl-5"
  >
    {{ bannerText }}
  </div>
</template>
<script setup lang="ts">
defineProps(['bannerText'])
</script>
