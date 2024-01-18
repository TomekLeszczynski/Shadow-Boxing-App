<template>

  <!--  THIS MODAL IS NOT STYLED YET -->



  <button @click="openModal = true" class="p-1 flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 bg-none text-gray-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg>
  </button>
  <teleport to="body">
    <div v-if="openModal" class="fixed top-0 left-0 flex z-50">
      <div
        class="bg-black bg-opacity-50 w-screen h-screen flex-grow flex justify-center items-center"
      >
        <div class="mx-auto bg-boxingGreen p-8">
          <p class="text-boxingYellow text-4xl">{{ modalText }}</p>
          <button @click="openModal = false" class="size-16 text-white">Close</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
// vue import
import { ref } from 'vue'

const openModal = ref<boolean>(false)
defineProps(['modalText'])
</script>
