<template>
  <div class="flex flex-row mx-auto justify-center items-center gap-9">
    <p class="text-md font-public-sans text-eagle">&copy;{{ currentDate }} / Tomasz Leszczyński</p>
    <a
      class="size-8 hover:scale-90 hover:duration-200"
      href="https://github.com/TomekLeszczynski"
      target="_blank"
      ><img src="@/assets/icons/github-mark-white.png" alt="github icon"
    /></a>
  </div>
</template>

<script setup lang="ts">
const currentDate = new Date().getFullYear()
</script>
