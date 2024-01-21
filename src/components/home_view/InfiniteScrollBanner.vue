<template>
  <div
    class="bg-boxingPurple overflow-hidden grid grid-cols-1 animate-headerFlyIn"
    aria-live="polite"
  >
    <div class="flex">
      <div v-for="index in 3" :key="index">
        <infinite-scroll-banner-item :bannerText="bannerText" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// component import
import InfiniteScrollBannerItem from './InfiniteScrollBannerItem.vue'

defineProps(['bannerText'])
</script>
