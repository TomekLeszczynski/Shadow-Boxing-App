<template>
  <div class="flex h-full overflow-hidden">
    <div class="grid grid-cols-1 gap-2 md:gap-3 p-2">
      <!-- MAIN HEADER -->
      <header-box />
      <!-- PATTERN STRIPE -->
      <div class="w-full h-16 bg-patternA bg-contain animate-[flyInDown_1s_ease-out_both]"></div>
      <!-- DESCRIPTION & SLIDER SECTION -->
      <div class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-3">
        <!-- APP DESCRIPTION -->
        <description-box />
        <!-- HERO IMG SLIDER -->
        <hero-slider />
      </div>
      <!-- PATTERN STRIPE -->
      <div class="w-full h-16 bg-patternA bg-contain"></div>
      <!-- INFINITE SCROLL BANNER -->
      <infinite-scroll-banner bannerText="ONLINE STORE AND BLOG SECTIONS COMING SOON!" />
    </div>
  </div>
</template>
<script setup lang="ts">
// component import
import InfiniteScrollBanner from '@/components/home_view/InfiniteScrollBanner.vue'
import HeroSlider from '@/components/home_view/HeroSlider.vue'
import DescriptionBox from '@/components/home_view/DecriptionBox.vue'
import HeaderBox from '@/components/home_view/HeaderBox.vue'
</script>
