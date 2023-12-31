<template>
  <div class="flex grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-boxingYellow p-5 md:p-8 w-full sm:w-auto">
        <h2 class="text-black md:text-9xl text-8xl text-center font-bold mb-8">Log in</h2>

        <div class="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5 pb-8">
            <form
              @submit.prevent
              class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 border-red-50"
            >
              <!--  email input -->
              <div class="md:col-span-5 mb-6">
                <label for="email" class="text-lg">Email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="example@mail.com"
                />
              </div>
              <!--  password input -->
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

              <!-- forgot password link -->
              <div class="x-full font-bold hover:underline cursor-pointer">
                <span class="text-lg">Forgot your password?</span>
              </div>

              <!-- log in button -->
              <button
                aria-label="log in"
                role="button"
                @click="signingIn"
                disabled
                class="bg-black text-white text-lg font-semibold mt-5 py-5 px-12 flex flex-row items-center justify-center group tracking-wide w-full"
              >
                Log in
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref } from 'vue'

// router import
import { useRouter } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// vue-router instance
const router = useRouter()

// pinia store instance
const authStore = useAuthStore()

// form input values
const email = ref<string>('')
const password = ref<string>('')

// signin user and redirect him to 'shadow-boxing' route
const signingIn = () => {
  authStore
    .signInUser(email.value, password.value)
    .then(() => {
      router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid } })
    })
    .catch((error) => {
      console.error('login error:', error.message)
    })
}
</script>
