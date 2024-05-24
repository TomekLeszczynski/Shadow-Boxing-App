<template>
  <div class="overflow-hidden grid grid-cols-1 animate-text-show-up" aria-live="polite">
    <div class="flex">
      <div v-for="index in 4" :key="index">
        <div
          class="text-2xl lg:text-3xl whitespace-nowrap animate-infinite-scroll pl-5"
          :aria-label="bannerText"
        >
          {{ bannerText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// props for displayed banner text
defineProps(['bannerText'])
</script>
