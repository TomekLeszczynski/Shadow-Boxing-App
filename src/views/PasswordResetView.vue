<template>
  <div class="flex flex-col p-4 items-center w-full" data-testid="reset-form">
    <!--  HEADER -->
    <h1
      class="animate-text-show-up text-8xl lg:text-[9rem] text-red-500 font-semibold tracking-tighter py-3 lg:mb-12"
      aria-label="Password reset heading"
    >
      Password reset
    </h1>

    <div class="items-center grid grid-cols-full md:w-1/4">
      <h2 class="text-3xl mt-9 animate-text-show-up-02" aria-label="Instructions for next steps">
        Enter your email address below and we'll send you a link with the instructions.
      </h2>
      <form @submit.prevent autocomplete="on">
        <div class="flex flex-col animate-text-show-up-03">
          <label for="email" class="my-3 text-xl">Email</label>
          <input
            @blur="v$.email.$touch"
            id="email"
            type="email"
            v-model.lazy="userData.email"
            class="h-10 bg-custom-white border-none px-5 placeholder:text-custom-black text-custom-black"
            placeholder="rocky.balboa@mail.com"
            aria-label="Email input"
            :aria-invalid="v$.email.$error"
          />
        </div>
        <!-- VALIDATION ERROR DISPLAY -->

        <div class="h-5" aria-live="assertive" aria-label="Form validation error">
          <span v-if="v$.email.$error" class="text-red-500">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>

        <!-- Submit BUTTON -->
        <button
          aria-label="Submit"
          @click="sendPasswordResetRequest"
          class="bg-custom-orange-dark py-5 px-12 group text-custom-black tracking-wide animate-button-show-from-left w-full mt-12"
        >
          <button-label labelText="Submit" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// vuelidate validation
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
// user data (due to Vuelidate docs)
interface ValidationUserData {
  email: string
}
const userData = reactive<ValidationUserData>({
  email: ''
})
// validation rules (due to Vuelidate docs)
const validationRules = computed(() => {
  return {
    email: { required, email }
  }
})
// vuelidate instance
const v$ = useValidate(validationRules, userData)

// send password-reset-link and redirect to 'log in' route
import { firebaseAuth } from '@/main'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
// const userEmail = ref<string>('')
const sendPasswordResetRequest = () => {
  if (v$.value.$error || !userData.email) {
    return
  } else {
    // send request to firebase
    sendPasswordResetEmail(firebaseAuth, userData.email)
      // move to login page
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch((error) => {
        console.error('Password-Reset-Request error:', error.message)
      })
      // clear input
      .finally(() => {
        userData.email = ''
      })
  }
}
</script>
