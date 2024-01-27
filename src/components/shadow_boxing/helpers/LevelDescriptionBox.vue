<template>
  <div class="group cursor-pointer" role="button">
    <div
      class="grid xl:grid-cols-2 bg-almost-white animate-button-show-from-left p-9 group-hover:bg-red-500 h-full"
    >
      <p
        class="text-almost-black font-bold text-5xl border-almost-black text-left group-hover:text-almost-white relative"
      >
        {{ level }}
        <span class="absolute bottom-0 right-0 xl:pr-9 hidden xl:inline-block"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </span>
      </p>
      <div
        class="text-sm xl:border-l border-almost-black xl:pl-9 group-hover:border-almost-white group-hover:text-almost-white"
      >
        <div class="text-justify mb-2 text-lg">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(['level', 'levelDesciption'])
</script>
