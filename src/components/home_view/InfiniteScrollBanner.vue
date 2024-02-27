<template>
  <div class="overflow-hidden grid grid-cols-1 animate-text-show-up text-almost-white" aria-live="polite">
    <div class="flex">
      <div v-for="index in 4" :key="index">
        <div
          class="text-2xl lg:text-3xl font-public-sans text-narvik whitespace-nowrap animate-infinite-scroll pl-5"
        >
          {{ bannerText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(['bannerText'])
</script>
