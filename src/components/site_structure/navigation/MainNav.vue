<template>
  <!-- MOBILE NAV -->
  <!-- HAMBURGER ICON / CLOSE ICON FOR MOBILE NAV -->
  <div
    class="inline-block absolute top-0 right-0 p-3 xs:hidden z-50"
    @click="toggleHamburger"
    v-if="authStore.authCompleted && noActiveSession"
  >
    <hamburger-icon v-if="!showHamburger" class="w-8 h-8" />
    <close-icon v-if="showHamburger" class="w-8 h-8" />
  </div>
  <!-- MOBILE NAV COMPONENT WITH TRANSITION-->
  <transition
    mode="out-in"
    enter-active-class="transition-transform duration-1000"
    leave-active-class="transition-transform duration-1000"
    enter-from-class="transform translate-x-full"
    leave-to-class="transform translate-x-full"
  >
    <!-- MOBILE NAVIGATION  -->
    <div
      v-if="showHamburger"
      class="flex-col flex justify-center absolute h-full text-5xl items-center w-full bg-red-500 z-20"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <!-- NAVIGATION ITEMS V-FOR RENDERING -->
      <div class="flex flex-col text-center animate-appear-smooth">
        <component
          v-for="link in navLinks"
          :key="link.name"
          :is="link.component"
          @click="toggleHamburger"
          :text="link.text"
          class="border-t py-2 hover:bg-custom-white hover:bg-opacity-30 hover:duration-300 font-semibold"
        />
      </div>
    </div>
  </transition>

  <!-- DESKTOP NAVIGATION -->
  <div class="py-3 px-6 text-md md:text-lg lg:text-2xl hidden xs:block h-10">
    <div
      v-if="authStore.authCompleted"
      class="w-100 flex justify-between items-center animate-appear-smooth"
    >
      <!-- NAVIGATION ITEMS V-FOR RENDERING / DYNAMIC CLASSES FOR LOGIN LOGOUT -->
      <component
        v-for="link in navLinks"
        :key="link.name"
        :is="link.component"
        :text="link.text"
        class="active:text-red-500"
        :class="
          link.component === LoginLink || link.component === LogoutLink
            ? 'bg-custom-white text-custom-black hover:bg-red-500 hover:text-custom-white px-5 py-2 hover:duration-200'
            : 'hover:text-custom-orange-light hover:duration-200'
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref, computed } from 'vue'

// import pinia store
import { useAuthStore } from '@/stores/AuthenticationStore'
import { useBasicTrainingStore, useAdvTrainingStore } from '@/stores/TrainingStore'

// component import / navigation links
import HomeLink from './navigation-links/HomeLink.vue'
import ShadowBoxingLink from './navigation-links/ShadowBoxingLink.vue'
import WeightMonitorLink from './navigation-links/WeightMonitorLink.vue'
import LogoutLink from './navigation-links/LogoutLink.vue'
import LoginLink from './navigation-links/LoginLink.vue'

import HamburgerIcon from './mobile-nav-icons/HamburgerIcon.vue'
import CloseIcon from './mobile-nav-icons/CloseIcon.vue'

// store instance
const authStore = useAuthStore()
const basisStore = useBasicTrainingStore()
const advStore = useAdvTrainingStore()

// mobile nav indicator
const showHamburger = ref<boolean>(false)

// nav links array to use for v-for rendering
const navLinks = [
  { name: 'home', component: HomeLink, text: 'Home' },
  { name: 'shadow-boxing', component: ShadowBoxingLink, text: 'Shadow Boxing' },
  { name: 'weight-monitor', component: WeightMonitorLink, text: 'Weight Monitor' },
  { name: 'login', component: LoginLink, text: 'Login' },
  { name: 'logout', component: LogoutLink, text: 'Logout' }
]

const toggleHamburger = () => {
  showHamburger.value = !showHamburger.value
}

// hide/show hamburger when any training session is active
const noActiveSession = computed(() => {
  return basisStore.status == null && advStore.status == null
})
</script>
