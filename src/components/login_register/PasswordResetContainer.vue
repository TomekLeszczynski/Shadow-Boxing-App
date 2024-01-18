<template>
  <div class="relative flex grow">
    <img
      src="@/assets/photos/service-pnp-ggbain-32400-32442v.jpg"
      alt="old photo of boxing match"
      class="absolute inset-0 -z-10 object-cover w-full h-full opacity-50"
    />
    <div class="max-w-screen-lg mx-auto flex justify-center items-center">
      <div
        class="bg-boxingPurple p-5 md:p-8 w-full sm:w-auto sm:h-auto h-full flex-col justify-center items-center flex"
      >
        <!-- HEADING CONTAINER -->
        <div class="mb-8 text-center">
          <!-- HEADING -->
          <h2
            aria-label="password-reset-heading"
            class="text-black md:text-6xl text-5xl font-bold mb-3"
          >
            Reset your password
          </h2>
          <p>Enter your email address below and we'll send you a link with instructions.</p>
        </div>

        <!-- FORM -->
        <div class="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5 pb-8">
            <form
              @submit.prevent
              autocomplete="on"
              class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2 border-red-50"
            >
              <!--  EMAIL INPUT -->
              <div class="md:col-span-1 mb-6">
                <label for="email" class="text-lg">Email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="example@mail.com"
                />
              </div>

              <!-- SUBMIT BUTTON -->
              <button
                aria-label="submit"
                role="button"
                @click="sendPasswordResetRequest"
                class="bg-black text-white text-lg font-semibold mt-5 py-5 px-12 flex flex-row items-center justify-center group tracking-wide w-full"
              >
                <!-- BUTTON LABEL FROM SUPPORT-COMPONENTS -->
                <button-label labelText="Submit" />
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

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// vue-router instance
const router = useRouter()

// form input values
const email = ref<string>('')

// send password-reset-link and redirect to 'log in' route
const sendPasswordResetRequest = () => {
  // check if input has value
  if (!email.value) {
    return
  } else {
    // send request to firebase
    sendPasswordResetEmail(firebaseAuth, email.value)
      // move to login page
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch((error) => {
        console.error('Password-Reset-Request error:', error.message)
      })
      // clear input
      .finally(() => {
        email.value = ''
      })
  }
}
</script>
