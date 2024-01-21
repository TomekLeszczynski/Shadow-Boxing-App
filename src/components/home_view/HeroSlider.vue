<template>
  <div class="animate-flyInLeft h-0 md:h-auto relative" aria-live="polite">
    <img :src="'src/assets/photos/' + src" :alt="alt" class="absolute inset-0 object-cover h-full w-full" />
    <div class="absolute w-full opacity-50 bottom-0 pr-3 py-2">
      <p class="text-gray-100 text-right text-xs">{{ author }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted, onBeforeUnmount } from 'vue'

// images-object interface
interface ImageInfo {
  src: string
  alt: string
  author: string
}

// array of slider images - consider move the array to database
const heroImages: ImageInfo[] = [
  {
    src: 'victor-marques-J-hY05bznes-unsplash_opt.webp',
    alt: 'young boxer doing drills',
    author: 'Photo by Victor Marques'
  },
  {
    src: 'pexels-cottonbro-studio-4753927.jpg',
    alt: 'girl during training with coach',
    author: 'Photo by cottonbro studio'
  },
  {
    src: 'metin-ozer-IylWs7RLa6A-unsplash_opt.webp',
    alt: 'a man sitting on top of a wooden table next to a punching bag',
    author: 'Photo by Mein Ozer'
  },
  {
    src: 'brandon-webb-hB4p3h5dew0-unsplash_opt.webp',
    alt: 'a woman in boxing gym doing drills training',
    author: 'Photo by Brandon Webb'
  },
  {
    src: 'zachary-kadolph-qWdeefD647E-unsplash_opt.webp',
    alt: 'a woman in boxing ring doing shadow-boxing',
    author: 'Photo by Zachary Kadolph'
  }
]

const currentIndex = ref(0)
const intervalId = ref<number | undefined>(undefined)
const src = ref('brandon-webb-hB4p3h5dew0-unsplash_opt.webp')
const alt = ref('a woman in boxing gym doing drills training')
const author = ref('Photo by Brandon Webb')

// display images from the array one-by-one
const changeImage = () => {
  // set interval to change image every 3 secs.
  intervalId.value = setInterval(() => {
    // change currentIndex value
    currentIndex.value = (currentIndex.value + 1) % heroImages.length
    // set diplayed image according to updated currentIndex
    src.value = heroImages[currentIndex.value].src
    alt.value = heroImages[currentIndex.value].alt
    author.value = heroImages[currentIndex.value].author
  }, 3000)
}

onMounted(() => {
  // start display images from the array
  changeImage()
})
onBeforeUnmount(() => {
  // reset display interval before component unmount
  clearInterval(intervalId.value)
})
</script>
