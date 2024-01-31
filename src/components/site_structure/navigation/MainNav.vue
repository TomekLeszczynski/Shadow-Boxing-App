<template>
  <!-- MOBILE NAV -->
  <div class="flex absolute inset-0 h-full w-full z-20 xs:hidden" v-if="authStore.authCompleted">
    <!-- HAMBURGER ICON / CLOSE ICON FOR MOBILE NAV -->
    <div
      class="text-almost-white inline-block absolute top-0 right-0 p-3"
      @click="showHamburger = !showHamburger"
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
        class="flex-col flex justify-center text-5xl font-public-sans text-almost-white items-center w-full bg-red-500"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <!-- NAVIGATION ITEMS V-FOR RENDERING -->
        <div class="flex flex-col text-center text-almost-white animate-appear-smooth">
          <component
            v-for="link in navLinks"
            :key="link.name"
            :is="link.component"
            @click="showHamburger = !showHamburger"
            :text="link.text"
            class="border-t py-2 hover:bg-almost-white hover:bg-opacity-30 hover:duration-300 font-semibold"
          />
        </div>
      </div>
    </transition>
  </div>

  <!-- DESKTOP NAVIGATION -->
  <div class="py-3 px-6 text-almost-white text-md md:text-lg lg:text-2xl hidden xs:block h-10">
    <div
      v-if="authStore.authCompleted"
      class="w-100 flex justify-between items-center font-public-sans animate-appear-smooth"
    >
      <!-- NAVIGATION ITEMS V-FOR RENDERING / DYNAMIC CLASSES FOR LOGIN LOGOUT -->
      <component
        v-for="link in navLinks"
        :key="link.name"
        :is="link.component"
        @click="showHamburger = !showHamburger"
        :text="link.text"
        :class="
          link.component === LoginLink || link.component === LogoutLink
            ? 'bg-almost-white text-almost-black hover:bg-red-500 hover:text-almost-white px-5 py-2 hover:duration-200'
            : 'hover:text-almost-grey hover:duration-200'
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref } from 'vue'

// import pinia store
import { useAuthStore } from '@/stores/AuthentificationStore'

// component import / navigation links
import HomeLink from './navigation-links/HomeLink.vue'
import ShadowBoxingLink from './navigation-links/ShadowBoxingLink.vue'
import WeightMonitorLink from './navigation-links/WeightMonitorLink.vue'
import LogoutLink from './navigation-links/LogoutLink.vue'
import LoginLink from './navigation-links/LoginLink.vue'

import HamburgerIcon from '@/components/shared/HamburgerIcon.vue'
import CloseIcon from '@/components/shared/CloseIcon.vue'

// store instance
const authStore = useAuthStore()
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
</script>
