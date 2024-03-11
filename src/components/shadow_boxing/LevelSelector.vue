<template>
  <button title="click to select" class="group cursor-pointer animate-button-show-from-left">
    <div class="p-4 h-full">
      <p class="font-bold text-2xl md:text-4xl text-left relative md:px-5">
        {{ level }}
      </p>
      <div class="text-sm">
        <div class="text-justify md:px-6 md:py-4">
          <ul class="list-disc md:block hidden">
            <slot></slot>
          </ul>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps<{ level: string }>()
</script>
