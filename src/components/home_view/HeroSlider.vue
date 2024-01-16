<template>
  <div class="animate-flyInLeft h-0 md:h-auto relative">
    <img :src="'src/assets/photos/' + src" :alt="alt" class="absolute inset-0" />
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface ImageInfo {
  src: string
  alt: string
}

const heroImages: ImageInfo[] = [
  {
    src: 'victor-marques-J-hY05bznes-unsplash_opt.webp',
    alt: 'young boxer doing drills'
  },
  {
    src: 'pexels-cottonbro-studio-4753927.jpg',
    alt: 'girl during training with coach'
  },
  {
    src: 'zachary-kadolph-hwHHq82Enf0-unsplash_opt.webp',
    alt: 'woman presents her stance'
  },
  {
    src: 'metin-ozer-IylWs7RLa6A-unsplash_opt.webp',
    alt: 'a man sitting on top of a wooden table next to a punching bag'
  },
  {
    src: 'brandon-webb-hB4p3h5dew0-unsplash_opt.webp',
    alt: 'a woman in boxing gym doing drills training'
  },
  {
    src: 'zachary-kadolph-qWdeefD647E-unsplash_opt.webp',
    alt: 'a woman in boxing ring doing shadow-boxing'
  }
]

const currentIndex = ref(0)
const intervalId = ref<number | undefined>(undefined)
const src = ref('brandon-webb-hB4p3h5dew0-unsplash_opt.webp')
const alt = ref('a woman in boxing gym doing drills training')
const changeImage = () => {
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroImages.length
    src.value = heroImages[currentIndex.value].src
    alt.value = heroImages[currentIndex.value].alt
  }, 3000)
}

onMounted(() => {
  changeImage()
})
onBeforeUnmount(() => {
  clearInterval(intervalId.value)
})
</script>
