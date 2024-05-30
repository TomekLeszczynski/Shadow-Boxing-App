<template>
  <!-- SECTION THAT COVERS WHOLE SCREEN -->
  <div class="flex justify-center items-center absolute inset-0 origin-bottom" aria-live="polite">
    <!-- CONTENT CONTAINER -->
    <div class="flex flex-col container justify-between sm:justify-evenly h-full p-5">
      <video
        class="absolute inset-0 h-full w-full opacity-30 -z-20 overflow-hidden object-cover"
        src="@/assets/video/video06.mp4"
        autoplay
        muted
        loop
        tabindex="0"
      />
      <!-- LOGO / HEADING -->
      <p class="flex flex-col text-xl leading-none" aria-label="Shadow Boxing Workout Logotype">
        <span>Shadow</span>
        <span>Boxing</span>
        <span>Workout</span>
      </p>
      <!-- QUOTES BOX -->
      <div>
        <!-- QUOTE -->
        <p
          id="quote"
          class="text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-5 animate-text-show-up-delayed"
          aria-label="quote"
        >
          {{ quote }}
        </p>
        <!-- AUTHOR -->
        <p
          id="author"
          class="text-xl md:text-3xl lg:text-4xl text-end animate-text-show-up-delayed pt-9"
          aria-label="quote's author"
        >
          ~ {{ author }}
        </p>
      </div>
      <!--  SKIP BUTTON -->
      <div class="flex justify-center animate-appear-slow-and-delayed">
        <button
          @click="$emit('skipped')"
          class="mt-3 sm:mt-0 py-4 px-12 group md:w-96 w-full border"
          aria-label="Skip preloader and get to Home View"
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

// shared components import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// helper import
import preloaderQuotes from '@/components/preloader/quotes'

const quote = ref<string>("“Hard work beats talent when talent doesn't work hard.”")
const author = ref<string>('Tim Notke')

// picks random quote & author from quotes' array
const pickQuoteToDisplay = () => {
  // set random number based on array lenght which
  const quoteIndex: number = Math.floor(Math.random() * preloaderQuotes.length)
  const randomQuote = preloaderQuotes[quoteIndex]
  quote.value = randomQuote.quote
  author.value = randomQuote.author
}

onMounted(() => {
  pickQuoteToDisplay()
})
</script>
