<template>
  <div class="bg-gray-100 flex-grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">Create account</h2>
        <p class="text-gray-500 mb-6">You can also sign in a an anonymous user temporarily</p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600 mr-6">
              <p class="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div class="lg:col-span-2">
              <form
                @submit.prevent="registerUser"
                class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
              >
                <div class="md:col-span-5 mb-3">
                  <label for="displayName">Username</label>
                  <input
                    v-model="displayName"
                    type="text"
                    name="displayName"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    required
                    placeholder="Rocky Balboa"
                  />
                  <p class="text-xs text-red-500">Render if not ok</p>
                </div>

                <div class="md:col-span-5 mb-3">
                  <label for="email">Email Address</label>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    required
                  />
                  <p class="text-xs text-red-500">Render if not ok</p>
                </div>
                <div class="md:col-span-5 mb-3">
                  <label for="address">Confirm Password</label>
                  <input
                    type="password"
                    name="password"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    required
                  />
                  <p class="text-xs text-red-500">Render if not ok</p>
                </div>
                <div class="md:col-span-5 mb-3">
                  <span class="text-blue-500 font-semibold">Already registered</span><span> / </span
                  ><span class="text-blue-500 font-semibold">Sign in as guest</span>
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
  authStore
    .createUser(email.value, password.value, displayName.value)
    .then(() => {
      router.push({
        name: 'shadow-boxing',
        params: { userId: authStore.user?.uid }
      })
    })
    .catch((error: Error) => {
      console.error('Unexpected error during registering new user:', error.message)
    })
}
</script>
