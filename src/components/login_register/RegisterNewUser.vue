<template>
  <div class="bg-black flex-grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-brickRed p-5 md:p-8">
        <h2 class="text-black md:text-9xl text-6xl font-bold py-6">CREATE ACCOUNT</h2>
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5">
            <form
              @submit.prevent="registerUser"
              class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
            >
              <div class="md:col-span-5 mb-3">
                <label for="displayName" class="font-semibold" pattern="^[^0-9]+$">Username</label>
                <input
                  id="displayName"
                  v-model="displayName"
                  type="text"
                  class="h-10 my-1 px-4 w-full bg-white placeholder:font-normal border-none"
                  autocomplete="off"
                  required
                  placeholder="Rocky Balboa"
                />
                <p class="text-xs text-white">Render if not ok</p>
              </div>

              <div class="md:col-span-5 mb-3">
                <label for="email" class="font-semibold">Email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="h-10 my-1 px-4 w-full bg-white placeholder:font-normal border-none"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  autocomplete="off"
                  required
                  placeholder="example@mail.com"
                />
                <p class="text-xs text-white">Render if not ok</p>
              </div>

              <div class="md:col-span-5 mb-3">
                <label for="password" class="font-semibold">Password</label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="h-10 my-1 px-4 w-full bg-white placeholder:font-normal border-none"
                  title="Please enter a password that is at least 8 characters long and includes a mix of letters, numbers, and special characters."
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  autocomplete="off"
                  required
                />
                <p class="text-xs text-white">Render if not ok</p>
              </div>
              <div class="md:col-span-5 mb-3">
                <label for="confirmPassword" class="font-semibold">Repeat Password</label>
                <input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  class="hh-10 my-1 px-4 w-full bg-white placeholder:font-normal border-none"
                  title="Please confirm your password by entering it again."
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  autocomplete="off"
                  required
                />
                <p class="ttext-xs text-white">Render if not ok</p>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end py-6">
                  <button
                    :disabled="!readyToGo"
                    class="bg-black text-white text-lg font-semibold py-4 px-12 flex flex-row items-center group tracking-wide"
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
import { ref, computed } from 'vue'

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
const confirmPassword = ref<string>('')
const displayName = ref<string>('')


// submit form controller
let readyToGo = ref<boolean>(false)

// validate user data




// registering new user with required data: email, password, username
const registerUser = (): void => {
  // validate user data
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
