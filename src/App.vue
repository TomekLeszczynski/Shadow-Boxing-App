<template>
  <!-- PRELOADER WITH DYNAMIC ANIMATION CLASS. BUTTON EMITS CLICK EVENT -->
  <preloader-comp
    v-if="usePreloader"
    @skipped="skipPreloader"
    :class="usePreloaderAnimation ? 'animate-preloader' : ''"
  />
  <!-- DISPLAY CONTENT AFTER USER SKIPPED PRELOADER -->
  <div v-if="!usePreloader" class="flex flex-col relative h-lvh">
    <!-- NAVIGATION SECTION -->
    <nav>
      <main-nav />
    </nav>
    <!-- MAIN SECTION -->
    <main class="flex flex-1 container mx-auto">
      <!-- ROUTES WITH TRANSITION SET -->

      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-350"
          leave-active-class="transition-opacity duration-350"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!--  FOOTER -->
    <footer class="flex flex-row justify-between items-center px-5 text-white py-3">
      <author-credits />
    </footer>
  </div>
</template>

<script setup lang="ts">
// vue import
import { onMounted, ref } from 'vue'

// router import
import { RouterView, useRoute, useRouter } from 'vue-router'

// component import
import MainNav from '@/components/site_structure/navigation/MainNav.vue'
import AuthorCredits from './components/site_structure/footer/AuthorCredits.vue'
import preloaderComp from '@/components/preloader/preloaderComp.vue'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// preloader indicator
const usePreloader = ref(false)

// unmount preloader animation indicator
const usePreloaderAnimation = ref<boolean>(false)

// router instances
const route = useRoute()
const router = useRouter()

// 'skip' button handler
const skipPreloader = () => {
  // add animtion class to preloader component
  usePreloaderAnimation.value = true
  // let run animation and turn off preloader component after animation ends
  setTimeout(() => {
    usePreloader.value = false
  }, 700)
}

// check the route on onMounted. Display preloader only when user enters website or refresh home view.
onMounted(async () => {
  // wait till router ready
  await router.isReady()
  // check if current route is 'home'. display preloader if true
  if (route.name === 'home') {
    // set to false when want to turn off
    usePreloader.value = false
    // if current route is not home, keep preloader off.
  } else {
    usePreloader.value = false
  }

  // runs authorization stage checkers
  const authStore = useAuthStore()
  await authStore.checkUserAuthState()
})
</script>
