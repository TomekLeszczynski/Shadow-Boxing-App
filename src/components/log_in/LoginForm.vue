<template>
  <form @submit.prevent autocomplete="on" class="items-center grid grid-cols-full md:w-1/4">
    <!-- EMAIL & INPUTS -->
    <div class="flex flex-col animate-text-show-up">
      <label for="email" class="my-3 text-xl">Email</label>
      <input
        id="email"
        type="email"
        v-model.lazy="email"
        class="h-10 bg-custom-white border-none px-5 placeholder:text-custom-black text-custom-black"
        placeholder="rocky.balboa@mail.com"
        aria-label="email input"
      />
    </div>

    <!--  PASSWORD INPUT -->
    <div class="flex flex-col animate-text-show-up">
      <label for="password" class="my-3 text-xl">Password</label>
      <input
        id="password"
        type="password"
        v-model.lazy="password"
        class="h-10 bg-custom-white border-none px-5 placeholder:text-custom-black text-custom-black"
        placeholder="********"
        aria-label="Password input"
      />
    </div>

    <!-- ERROR DISPLAY -->
    <p
      class="text-red-500 py-3 text-justify llg:mb-5 h-36"
      aria-label="error-message"
      aria-live="assertive"
      role="alert"
    >
      {{ authStore.authError }}
    </p>

    <!-- FORGOT PASSWORD LINK -->
    <div class="text-xl animate-text-show-up py-3 lg:py-6">
      <span>Trouble Logging In?</span>
      <RouterLink
        to="/password-reset"
        class="cursor-pointer hover:underline font-semibold"
        aria-label="Reset password link"
      >
        Reset password
      </RouterLink>
    </div>

    <!-- LOG IN BUTTON -->
    <button
      aria-label="Log in"
      @click="signingIn"
      class="bg-custom-orange-dark py-5 px-12 group tracking-wide animate-button-show-from-left"
    >
      <!-- LOADING LABEL WITH SPINNER FROM 'SHARED' -->
      <proceding-label v-if="isLoading" procedingLabel="Sending" />
      <!-- LOG IN LABEL FROM 'SHARED' -->
      <button-label v-else labelText="Log in" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/AuthentificationStore'

import ProcedingLabel from '@/components/shared/ProcedingLabel.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

const router = useRouter()
const authStore = useAuthStore()

// signin user and redirect him to 'shadow-boxing' route
const email = ref<string>('')
const password = ref<string>('')
const isLoading = ref<boolean>(false)

const signingIn = () => {
  if (!email.value || !password.value) {
    return
  } else {
    // runs loading spinner
    isLoading.value = true
    // sign in via pinia store / firebase
    authStore
      .signInUser(email.value, password.value)
      .then(() => {
        // if is success move to shadow boxing route
        if (authStore.user) {
          router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid } })
        } else {
          // possible error managed by pinia store
          return
        }
      })
      .catch((error) => {
        console.error('login error:', error.message)
      })
      .finally(() => {
        // clear inputs, button set to default
        isLoading.value = false
        email.value = ''
        password.value = ''
      })
  }
}

onMounted(() => {
  authStore.authError = ''
})
</script>
