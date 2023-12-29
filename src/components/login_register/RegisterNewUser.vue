<template>
  <div class="bg-black flex-grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-brickRed p-5 md:p-8">
        <div class="font-bold text-md md:text-lg flex flex-row group tracking-tight">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 pr-1 group-hover:-translate-x-3 duration-300 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              /></svg></span
          >Go to back
        </div>
        <h2 class="text-black md:text-9xl text-6xl font-bold py-6">CREATE ACCOUNT</h2>
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5">
            <form
              @submit.prevent="registerUser"
              class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
            >
              <div class="md:col-span-5 mb-3">
                <label for="displayName" class="font-bold">Username</label>
                <input
                  v-model="displayName"
                  type="text"
                  name="displayName"
                  class="h-10 my-1 px-4 w-full bg-white placeholder:font-normal border-none"
                  required
                  placeholder="Rocky Balboa"
                />
                <p class="text-xs text-black">Render if not ok</p>
              </div>

              <div class="md:col-span-5 mb-3">
                <label for="email">Email</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  class="h-10 mt-1 px-4 w-full bg-gray-50"
                  required
                  placeholder="example@mail.com"
                />
                <p class="text-xs text-red-500">Render if not ok</p>
              </div>

              <div class="md:col-span-5 mb-3">
                <label for="address">Password</label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  class="h-10 mt-1px-4 w-full bg-gray-50"
                  required
                />
                <p class="text-xs text-red-500">Render if not ok</p>
              </div>
              <div class="md:col-span-5 mb-3">
                <label for="address">Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  class="h-10 mt-1 px-4 w-full bg-gray-50"
                  required
                />
                <p class="text-xs text-red-500">Render if not ok</p>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    class="bg-black text-white text-lg font-bold py-4 px-6 flex flex-row items-center group tracking-wide"
                  >
                    Submit
                    <span class="group-hover:translate-x-3 transition duration-300 ease-in-out"
                      ><svg
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
                </div>
              </div>
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

// router instance
const router = useRouter()

// store instance
const authStore = useAuthStore()

// user data
const email = ref<string>('')
const password = ref<string>('')
const displayName = ref<string>('')

// registering new user with required data: email, password, username
const registerUser = (): void => {
  // verify input values
  // ...

  // create user on firebase database
  authStore
    .createUser(email.value, password.value, displayName.value)
    // then direct user to route accessible for auth users
    .then(() => {
      router.push({
        name: 'shadow-boxing',
        params: { userId: authStore.user?.uid }
      })
      // show confirmation and redirect to login page
      // ...
    })
    .catch((error: Error) => {
      console.error('Unexpected error during registering new user:', error.message)
    })
}
</script>
