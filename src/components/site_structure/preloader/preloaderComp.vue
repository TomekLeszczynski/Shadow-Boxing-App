<template>
  <div
    class="flex justify-center items-center absolute inset-0 origin-bottom bg-boxingYellow min-w-[320px] animate-preloader-animation"
  >
    <div class="flex flex-col container justify-evenly h-full p-5">
      <div>
        <p class="text-3xl md:text-5xl lg:text-6xl uppercase font-bold">
          {{ quote }}
        </p>
        <p class="text-xl md:text-3xl lg:text-4xl text-end italic">{{ author }}</p>
      </div>
      <p class="text-xl md:text-3xl lg:text-4xl text-black uppercase text-center font-black">
        Get ready!
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted } from 'vue'

// helper import
import preloaderQuotes from '@/components/site_structure/preloader/quotes'

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
