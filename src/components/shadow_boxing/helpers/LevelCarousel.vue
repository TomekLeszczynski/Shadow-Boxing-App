<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-public-sans">
    <level-description-box level="Basic" :levelDesciption="beginnerDescription" />
    <level-description-box level="Advanced" :levelDesciption="advancedDescription" />
  </div>
</template>
<script setup lang="ts">
// component import
import LevelDescriptionBox from './LevelDescriptionBox.vue'
// import LevelCarouselItem from './LevelCarouselItem.vue'

const beginnerDescription =
  'Suitable for beginners and those looking for a less intense workout. Focuses on basic techniques and slower pace to help users grasp fundamental movements.'
const advancedDescription =
  'Designed for advanced users aiming for a high-intensity workout. Emphasizes rapid movements and complex combinations to push your limits.'
</script>
