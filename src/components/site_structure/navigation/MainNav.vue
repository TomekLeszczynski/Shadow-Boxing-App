<template>
  <!-- MOBILE NAV -->
  <div class="flex absolute inset-0 h-full w-full z-20 xs:hidden" v-if="authStore.authCompleted">
    <!-- HAMBURGER ICON -->
    <div
      class="text-almost-white inline-block absolute top-0 right-0 p-3"
      @click="handleHamburgerButton"
    >
      <!-- STRIPES -->
      <svg
        v-if="!showHamburger"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <!-- X -->
      <svg
        v-if="showHamburger"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
    <!-- NAV MENU -->
    <transition
      mode="out-in"
      enter-active-class="transition-transform duration-1000"
      leave-active-class="transition-transform duration-1000"
      enter-from-class="transform translate-x-full"
      leave-to-class="transform translate-x-full"
    >
      <div
        v-if="showHamburger"
        class="flex-col flex justify-center text-5xl font-public-sans text-almost-white items-center w-full bg-red-500"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <ul class="text-center last:border-b">

          <!-- POPRAWIĆ NA V-FOR -->
          <li class="border-t py-2 hover:bg-almost-white hover:bg-opacity-30 hover:duration-300 font-semibold">Home</li>
          <li class="border-t py-2 hover:bg-almost-white hover:bg-opacity-30 hover:duration-300 font-semibold">Shadow Boxing</li>
          <li class="border-t py-2 hover:bg-almost-white hover:bg-opacity-30 hover:duration-300 font-semibold">Weight Monitor</li>
          <li class="border-t py-2 hover:bg-almost-white hover:bg-opacity-30 hover:duration-300 font-semibold">Login</li>
        </ul>
      </div>
    </transition>
  </div>

  <!-- DESKTOP NAV -->
  <div
    v-if="authStore.authCompleted"
    class="py-3 px-6 text-almost-white text-md md:text-lg lg:text-2xl hidden xs:block"
  >
    <div
      v-if="authStore.authCompleted"
      class="w-100 flex justify-between items-center font-public-sans"
    >
      <router-link to="/" class="hover:text-almost-grey hover:duration-200">Home</router-link>
      <router-link
        v-if="authStore.user"
        :to="{ name: 'shadow-boxing', params: { userId: authStore.user.uid } }"
        class="hover:text-almost-grey hover:duration-200"
        >Shadow Boxing</router-link
      >
      <router-link
        v-if="authStore.user"
        :to="{ name: 'weight-monitor', params: { userId: authStore.user.uid } }"
        class="hover:text-almost-grey hover:duration-200"
        >Weight Monitor</router-link
      >
      <router-link
        v-if="!authStore.user"
        to="/login"
        class="px-5 text-almost-black bg-almost-white hover:text-almost-white hover:bg-red-500 hover:duration-200"
        >Login</router-link
      >
      <button
        v-if="authStore.user"
        @click.prevent="logoutUser"
        class="bg-almost-white text-almost-black hover:bg-red-500 hover:text-almost-white px-5 py-2 hover:duration-200"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref } from 'vue'

// router import
import { RouterLink } from 'vue-router'

// import pinia store
import { useAuthStore } from '@/stores/AuthentificationStore'

// import router
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

// logout user (store function) and redirect to Home page
const logoutUser = () => authStore.logoutUser(router.push)

const showHamburger = ref<boolean>(false)
const handleHamburgerButton = () => {
  showHamburger.value = !showHamburger.value
  console.log(showHamburger.value)
}
</script>
