<template>
  <p class="text-md">
    All rights reserved &#x2022; Copyright &copy; {{ currentDate }} &#x2022; Tomasz Leszczyński
  </p>
  <a class="size-8" href="https://github.com/TomekLeszczynski" target="_blank"
      ><img src="@/assets/icons/github-mark-white.png" alt="github icon"
    /></a>
</template>

<script setup lang="ts">
const currentDate = new Date().getFullYear()
</script>
