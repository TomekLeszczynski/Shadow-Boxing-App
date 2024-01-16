<template>
  <div class="animate-flyInLeft h-0 md:h-auto relative">
    <img :src="'src/assets/photos/' + src" :alt="alt" class="absolute inset-0" />
    <div class="absolute w-full opacity-50 bottom-0 pr-3 py-2">
      <p class="text-gray-100 text-right text-xs">{{ author }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface ImageInfo {
  src: string
  alt: string
  author: string
}

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
const changeImage = () => {
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroImages.length
    src.value = heroImages[currentIndex.value].src
    alt.value = heroImages[currentIndex.value].alt
    author.value = heroImages[currentIndex.value].author
  }, 3000)
}

onMounted(() => {
  changeImage()
})
onBeforeUnmount(() => {
  clearInterval(intervalId.value)
})
</script>
