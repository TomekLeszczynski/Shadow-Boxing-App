<template>
  <div
    class="flex justify-center items-center absolute inset-0 origin-bottom bg-boxingYellow min-w-[320px]"
    aria-live="polite"
  >
    <div class="flex flex-col container justify-between sm:justify-evenly h-full p-5">
      <div>
        <p class="text-4xl md:text-6xl lg:text-7xl uppercase font-bold mb-5 animate-flyInFast">
          {{ quote }}
        </p>
        <p class="text-xl md:text-3xl lg:text-4xl text-end animate-flyInMid">~ {{ author }}</p>
      </div>
      <div class="flex justify-center animate-[slow-appear_1000ms_linear_700ms_both]">
        <button
          @click="$emit('skipped')"
          class="bg-black text-white text-lg font-semibold mt-3 sm:mt-0 py-4 px-12 group tracking-wide md:w-96 w-full"
          tabindex="0"
        >
          <button-label labelText="Skip" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted } from 'vue'

// helper import
import preloaderQuotes from '@/components/preloader/quotes'

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// quote and author to display
const quote = ref<string>("“Hard work beats talent when talent doesn't work hard.”")
const author = ref<string>('Tim Notke')

const pickQuoteToDisplay = () => {
  const quoteIndex = Math.floor(Math.random() * preloaderQuotes.length)
  const randomQuote = preloaderQuotes[quoteIndex]
  quote.value = randomQuote.quote
  author.value = randomQuote.author
}

onMounted(() => {
  pickQuoteToDisplay()
})
</script>
@/components/preloader/quotes
