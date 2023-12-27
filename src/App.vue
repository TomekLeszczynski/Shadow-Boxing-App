<template>
  <nav>
    <main-nav />
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <flaticon-credits />
  </footer>
</template>

<script setup lang="ts">
// router import
import { RouterView } from 'vue-router'

// component import
import MainNav from '@/components/site_structure/navigation/MainNav.vue'
import FlaticonCredits from '@/components/site_structure/footer/FlaticonCredits.vue'
</script>
