<script setup lang="ts">
// router import
import { RouterView } from 'vue-router'

// component import
import MainNav from '@/components/Navigation/MainNav.vue'
import FlaticonCredits from '@/components/Footer/FlaticonCredits.vue'
</script>

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
