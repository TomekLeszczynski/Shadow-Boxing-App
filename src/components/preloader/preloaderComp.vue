<template>
  <!-- SECTION THAT COVERS WHOLE SCREEN -->
  <section
    class="flex justify-center items-center absolute inset-0 origin-bottom min-w-[320px] border-b"
    aria-live="polite"
  >
    <!-- CONTENT CONTAINER -->
    <div
      class="flex flex-col container justify-between sm:justify-evenly h-full p-5 text-almost-white font-public-sans"
    >
      <!-- LOGO / HEADING -->
      <div class="flex flex-col text-xl leading-none">
        <span>Shadow</span>
        <span>Boxing</span>
        <span>Workout</span>
      </div>
      <!-- QUOTES BOX -->
      <div>
        <!-- QUOTE -->
        <p class="text-4xl md:text-6xl lg:text-7xl uppercase mb-5 animate-text-show-up-delayed">
          {{ quote }}
        </p>
        <!-- AUTHOR -->
        <p class="text-xl md:text-3xl lg:text-4xl text-end animate-text-show-up-delayed pt-9">
          ~ {{ author }}
        </p>
      </div>
      <!--  SKIP BUTTON -->
      <div class="flex justify-center animate-appear-slow-and-delayed">
        <button
          @click="$emit('skipped')"
          class="border mt-3 sm:mt-0 py-4 px-12 group md:w-96 w-full bg-almost-black"
          tabindex="0"
        >
          <button-label labelText="Skip" />
        </button>
      </div>
    </div>
  </section>
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

// picks random quote & author from quotes' array
const pickQuoteToDisplay = () => {
  const quoteIndex = Math.floor(Math.random() * preloaderQuotes.length)
  const randomQuote = preloaderQuotes[quoteIndex]
  quote.value = randomQuote.quote
  author.value = randomQuote.author
}

onMounted(() => {
  //  set quote to display when page runs
  pickQuoteToDisplay()
})
</script>
