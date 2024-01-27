<template>
  <div class="grid grid-cols-1 gap-2 md:gap-3 p-4 relative">
    <div class="animate-appear-slow-and-delayed lg:hidden">
      <img
        src="@/assets/photos/hero-halftone_opt.webp"
        alt="halftone-image-woman-during-boxing-training"
        class="absolute inset-0 h-full w-full object-cover opacity-15 -z-10"
      />
    </div>
    <!-- MAIN HEADER -->
    <header-box />
    <!-- DESCRIPTION & HERO IMAGE SECTION-->
    <section class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-8 mb-9">
      <!-- HERO BOX -->
      <hero-box />
      <div class="h-full flex flex-col justify-between">
        <!-- APP DESCRIPTION -->
        <description-box />
        <!-- BOX WITH ACCESS BUTTONS : SIGNUP & TRY AS GUEST -->
        <get-access />
      </div>
    </section>
    <!-- INFINITE SCROLL BANNER -->
    <infinite-scroll-banner bannerText="Online store and Blog section coming soon!" />
  </div>
</template>
<script setup lang="ts">
// component import
import InfiniteScrollBanner from '@/components/home_view/InfiniteScrollBanner.vue'
import DescriptionBox from '@/components/home_view/DecriptionBox.vue'
import HeaderBox from '@/components/home_view/HeaderBox.vue'
import HeroBox from '@/components/home_view/HeroBox.vue'
import GetAccess from '@/components/home_view/GetAccess.vue'
</script>
