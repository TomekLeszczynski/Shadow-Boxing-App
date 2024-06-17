<template>
  <form @submit.prevent autocomplete="on" role="form" class="items-center grid grid-cols-full">
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
      class="text-red-500 py-3 text-left llg:mb-5 h-36"
      aria-label="Error Message Display"
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
        data-testid="reset-link"
      >
        Reset password
      </RouterLink>
    </div>

    <!-- LOG IN BUTTON -->
    <button
      aria-label="Log in"
      @click="signingIn()"
      type="submit"
      tabindex="0"
      class="bg-custom-orange-dark py-5 px-12 group tracking-wide animate-button-show-from-left"
    >
      <!-- LOADING LABEL WITH SPINNER FROM 'SHARED' -->
      <processing-label v-if="isLoading" processingLabel="Sending" />
      <!-- LOG IN LABEL FROM 'SHARED' -->
      <button-label v-else labelText="Log in" class="text-custom-black" />
    </button>
  </form>
</template>

<script setup lang="ts">
// vue import
import { ref, onUnmounted } from 'vue'

// vue router import
import { useRouter, RouterLink } from 'vue-router'

// pinia auth store instance
import { useAuthStore } from '@/stores/AuthenticationStore'
const authStore = useAuthStore()

// shared components import
import ProcessingLabel from '@/components/shared/ProcessingLabel.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// FORM SECTIONS V-FOR LOOP SETUP
interface loginFormSection {
  title: string
  placeholder: string
  value: string | null
  ariaLabel: string
}

// logging status marker
const isLoading = ref<boolean>(false)

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

// sign-in user and redirect him to 'shadow-boxing' route
const signingIn = async (): Promise<void> => {
  const userEmail = formSection.value.find((section) => section.title === 'email')?.value
  const userPassword = formSection.value.find((section) => section.title === 'password')?.value
  const router = useRouter()
  // check if required data are provided before send request to firebase; code follows firebase docs
  if (userEmail && userPassword) {
    // runs loading spinner
    isLoading.value = true
    // sign in via pinia store / firebase
    try {
      // based on default firebase function for signIn
      await authStore.signInUser(userEmail, userPassword)
      // if success move to shadow-boxing route with user ID
      if (authStore.user) {
        router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid } })
      }
    } catch (error) {
      console.error('Login error:' + error)
    } finally {
      // clear inputs, button set to default
      isLoading.value = false
      formSection.value.forEach((section) => (section.value = null))
    }
  }
}

onUnmounted(() => {
  authStore.authError = ''
})
</script>
