<template>
  <div class="flex grow justify-center items-center">
    <div
      class="bg-boxingYellow p-5 md:p-8 w-full sm:w-auto h-full sm:h-auto flex flex-col justify-center"
    >
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
              <RouterLink to="/password-reset" class="text-lg">Forgot your password?</RouterLink>
            </div>

            <!-- log in button -->
            <button
              aria-label="log in"
              role="button"
              @click="signingIn"
              class="bg-black text-white text-lg font-semibold mt-5 py-5 px-12 flex flex-row items-center justify-center group tracking-wide w-full"
            >
              <div v-if="isLoading" class="flex flex-row items-center justify-center">
                <span>Sending</span>
                <span
                  ><svg
                    class="text-gray-300 animate-spin ml-2"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                      stroke="currentColor"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                      stroke="currentColor"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-900"
                    ></path>
                  </svg>
                </span>
              </div>
              <div v-if="!isLoading" class="flex flex-row items-center justify-center">
                <span>Log in</span>
                <span class="group-hover:translate-x-3 transition duration-300 ease-in-out">
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
              </div>
            </button>
            <div class="text-boxingRed h-5 mt-5 font-semibold text-center">
              {{ authStore.authError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref } from 'vue'

// router import
import { useRouter, RouterLink } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

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
    // show error
    return
  } else {
    isLoading.value = true
    authStore
      .signInUser(email.value, password.value)
      .then(() => {
        if (authStore.user) {
          router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid } })
        } else {
          // show error
          return
        }
      })
      .catch((error) => {
        console.error('login error:', error.message)
      })
    // clear inputs, button set to default
    isLoading.value = false
    email.value = ''
    password.value = ''
  }
}
</script>
