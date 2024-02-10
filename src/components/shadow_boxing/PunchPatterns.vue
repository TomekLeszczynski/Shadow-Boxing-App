<template>
  <div class="text-almost-white font-public-sans bg-jaffa full">
    <p class="font-semibold text-[2.1rem] sm:text-6xl lg:text-9xl p-9">Pattern of punches</p>
    <div class="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 sm:text-2xl">
      <template v-for="punch in punches" :key="punch.number">
        <div class="grid grid-col justify-center p-4 bg-red-500">
          <img :src="`/punchIcons/${punch.picture}.webp`" :alt="punch.name" class="max-h-[20rem]" />
          <p>
            <span class="font-black"> {{ punch.number }} </span>: {{ punch.name }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
const punches = [
  { number: '1', picture: '1.1_red', name: 'jab' },
  { number: '2', picture: '2.1_red', name: 'cross' },
  { number: '3', picture: '3.1_red', name: 'lead hook' },
  { number: '4', picture: '4.1_red', name: 'rear hook' },
  { number: '5', picture: '5.1_red', name: 'lead uppercut' },
  { number: '6', picture: '6.1_red', name: 'rear uppercut' }
]
</script>
