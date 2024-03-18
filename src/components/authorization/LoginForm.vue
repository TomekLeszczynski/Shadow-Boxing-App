<template>
  <form @submit.prevent autocomplete="on" class="items-center grid grid-cols-full">
    <!-- EMAIL & PASSWORD INPUTS -->
    <div
      v-for="(section, index) in formSection"
      :key="index"
      class="flex flex-col animate-text-show-up"
    >
      <label class="capitalize my-3 text-xl" :for="section.title">{{ section.title }}</label>
      <input
        :id="section.title"
        :type="section.title"
        v-model="section.value"
        :placeholder="section.placeholder"
        :aria-label="section.ariaLabel"
        class="h-10 text-lg bg-custom-white border-none px-5 placeholder:text-custom-grey text-custom-black"
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
    <div class="text-xl animate-text-show-up py-3 lg:py-6 whitespace-nowrap">
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
      @click="signingIn()"
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

interface loginFormSection {
  title: string
  placeholder: string
  value: string | null
  ariaLabel: string
}

const formSection = ref<loginFormSection[]>([
  {
    title: 'email',
    placeholder: 'rocky.balboa@mail.com',
    value: null,
    ariaLabel: 'Email input'
  },
  {
    title: 'password',
    placeholder: '********',
    value: null,
    ariaLabel: 'Password input'
  }
])

// signin user and redirect him to 'shadow-boxing' route
const isLoading = ref<boolean>(false)

const signingIn = () => {
  const userEmail = formSection.value.find((section) => section.title === 'email')?.value
  const userPassword = formSection.value.find((section) => section.title === 'password')?.value

  if (!userEmail || !userPassword) {
    return
  } else {
    // runs loading spinner
    isLoading.value = true
    // sign in via pinia store / firebase
    authStore
      .signInUser(userEmail, userPassword)
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
        formSection.value.forEach((section) => (section.value = null))
      })
  }
}

onMounted(() => {
  authStore.authError = ''
})
</script>
