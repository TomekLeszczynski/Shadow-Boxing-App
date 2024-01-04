<template>
  <div class="flex grow justify-center items-center">
    <!-- LOG IN BACKGROUND -->
    <div
      class="bg-boxingYellow p-5 md:p-8 w-full sm:w-auto h-full sm:h-auto flex flex-col justify-center"
    >
      <!--  HEADING -->
      <h2
        class="text-black md:text-9xl text-8xl text-center font-bold mb-8"
        aria-label="login-heading"
      >
        Log in
      </h2>

      <div class="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div class="lg:col-span-5 pb-8">
          <form
            @submit.prevent
            class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 border-red-50"
            autocomplete="on"
          >
            <!--  EMAIL INPUT -->
            <div class="md:col-span-5 mb-6">
              <label for="email" class="text-lg"> Email </label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="h-10 my-1 px-4 w-full bg-white border-none"
                placeholder="example@mail.com"
              />
            </div>
            <!--  PASSWORD INPUT -->
            <div class="md:col-span-5 mb-5">
              <label for="password" class="text-lg">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                class="h-10 my-1 px-4 w-full bg-white border-none"
                placeholder="********"
              />
            </div>

            <!-- FORGOT PASSWORD LINK -->
            <div role="button" class="x-full font-bold hover:underline cursor-pointer">
              <RouterLink to="/password-reset" class="text-lg">Forgot your password?</RouterLink>
            </div>

            <!-- ERROR DISPLAY -->
            <div aria-live="polite" class="text-boxingRed my-5 font-semibold text-center h-11">
              {{ authStore.authError }}
            </div>
            <!-- LOG IN BUTTON -->
            <button
              aria-label="log in"
              role="button"
              @click="signingIn"
              class="bg-black text-white text-lg font-semibold mt-5 py-5 px-12 flex flex-row items-center justify-center group tracking-wide w-full"
            >
              <!-- LOADING LABEL WITH SPINNER FROM SUPPORT-COMPONENTS -->
              <is-loading-label v-if="isLoading" />
              <!-- LOG IN LABEL FROM SUPPORT-COMPONENTS -->
              <button-label labelText="Log in" v-if="!isLoading" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, onMounted } from 'vue'

// router import
import { useRouter, RouterLink } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// component import
import IsLoadingLabel from '@/components/login_register/supportComponents/IsLoadingLabel.vue'
import ButtonLabel from '@/components/login_register/supportComponents/ButtonLabel.vue'

// vue-router instance
const router = useRouter()

// pinia store instance
const authStore = useAuthStore()

// form input values
const email = ref<string>('')
const password = ref<string>('')

// loading spinner contoller
const isLoading = ref<boolean>(false)

// signin user and redirect him to 'shadow-boxing' route
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

