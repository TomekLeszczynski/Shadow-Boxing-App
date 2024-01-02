<template>
  <div class="flex grow bg-[url('@/assets/photos/service-pnp-ggbain-32400-32442v.jpg')] bg-cover">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-boxingBlue p-5 md:p-8 w-full sm:w-auto">
        <div class="mb-8 text-center">
          <h2 class="text-black md:text-6xl text-5xl font-bold mb-3">Reset your password</h2>
          <p class="">
            * Enter your email address below and we'll send you a link with instructions.
          </p>
        </div>

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

              <!-- submit button -->
              <button
                aria-label="submit"
                role="button"
                @click="sendPasswordResetRequest"
                class="bg-black text-white text-lg font-semibold mt-5 py-5 px-12 flex flex-row items-center justify-center group tracking-wide w-full"
              >
                <span>Submit</span>
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

// firebase import
import { firebaseAuth } from '@/main'
import { sendPasswordResetEmail } from 'firebase/auth'

// router import
import { useRouter } from 'vue-router'

// vue-router instance
const router = useRouter()

// form input values
const email = ref<string>('')

// send password-reset-link and redirect to 'log in' route
const sendPasswordResetRequest = () => {
  if (!email.value) {
    // show error
    return
  } else {
    sendPasswordResetEmail(firebaseAuth, email.value)
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch((error) => {
        console.error('Password-Reset-Request error:', error.message)
      })
    // clear input
    email.value = ''
  }
}
</script>
