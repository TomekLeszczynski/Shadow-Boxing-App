<template>
  <button
    title="click to select"
    class="group cursor-pointer animate-button-show-from-left"
    aria-label="Click to Select Level"
  >
    <div class="p-4 h-full">
      <h3 class="font-bold text-2xl md:text-4xl text-left relative md:px-5">
        {{ level }}
      </h3>
      <div class="text-sm">
        <div class="md:px-6 md:py-4">
          <ol class="list-disc md:block hidden">
            <slot></slot>
          </ol>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps<{ level: string }>()
</script>
