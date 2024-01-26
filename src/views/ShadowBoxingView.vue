<template>
  <div class="w-full p-4">
    <!-- HEADER -->
    <shadow-header-box />
    <level-carousel />
    <general-description />
  </div>
</template>
<script setup lang="ts">
// component import
import LevelCarousel from '@/components/shadow_boxing/helpers/LevelCarousel.vue'
import ShadowHeaderBox from '@/components/shadow_boxing/helpers/ShadowHeaderBox.vue'
import GeneralDescription from '@/components/shadow_boxing/helpers/GeneralDescription.vue'
</script>
