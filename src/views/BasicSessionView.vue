<template>
  <div class="absolute bg-almost-black inset-0 font-public-sans text-almost-white">
    <div class="flex flex-col mx-auto justify-center items-center h-full p-4">
      <p class="uppercase text-4xl md:text-5xl">jab</p>
      <div class="flex flex-col my-3">
        <!-- ADD CONDITION IF FIGURES => h-3/5 -->
        <p
          class="font-semibold leading-none text-center flex h-full items-center text-[24rem] sm:text-[36rem] md:text-[40rem]"
        >
          3
        </p>
        <!-- <img src="@/assets/graphics/6.1.webp" alt="" class="object-contain h-full" /> -->
      </div>
      <p class="text-2xl text-center md:text-4xl">46 / 100</p>

      <button class="bg-red-500 py-4 md:w-1/4 w-full group tracking-wide mt-6">
        <button-label labelText="Pause" class="text-almost-white" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonLabel from '@/components/shared/ButtonLabel.vue'
</script>

<!-- SEND INFOR TO MOBILE NAV TO DISABLE DURING SESSION -->
