<template>
  <div class="overflow-hidden grid grid-cols-1 animate-text-show-up" aria-live="polite">
    <div class="flex">
      <div v-for="index in 4" :key="index">
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
