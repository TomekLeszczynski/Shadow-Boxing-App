<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
    <div>
      <a
        style="text-decoration: none"
        href="https://www.flaticon.com/free-icons/fight"
        title="fight icons"
        >Fight icons created by Freepik - Flaticon</a
      >
    </div>
  </footer>
</template>
