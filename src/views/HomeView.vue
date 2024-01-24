<template>
  <div class="grid grid-cols-1 gap-2 md:gap-3 p-4 border-b">
    <!-- MAIN HEADER -->
    <header-box />
    <!-- DESCRIPTION & HERO IMAGE SECTION-->
    <section class="grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-8 mb-9">
      <!-- HERO BOX -->
      <hero-box />
      <div>
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
