<template>
  <!-- FORM -->
  <form autocomplete="on" @submit.prevent class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
    <!-- USERNAME INPUT -->
    <div class="md:col-span-5">
      <label for="displayName" class="text-lg" pattern="^[^0-9]+$">Username</label>
      <input
        @blur="v$.displayName.$touch"
        id="displayName"
        v-model="userData.displayName"
        type="text"
        class="h-10 my-1 px-4 w-full bg-almost-white border-none"
        placeholder="Rocky Balboa"
        :aria-invalid="v$.displayName.$error"
      />
      <!-- VALIDATION ERROR DISPLAY -->
      <div class="h-5" aria-live="assertive">
        <span v-if="v$.displayName.$error" class="text-red-500"
          >{{ v$.displayName.$errors[0]?.$message }}
        </span>
      </div>
    </div>

    <!--  EMAIL INPUT -->
    <div class="md:col-span-5">
      <label for="email" class="text-lg">Email</label>
      <input
        @blur="v$.email.$touch"
        id="email"
        v-model="userData.email"
        type="email"
        class="h-10 my-1 px-4 w-full bg-almost-white border-none"
        placeholder="example@mail.com"
        :aria-invalid="v$.email.$error"
      />
      <!-- VALIDATION ERROR DISPLAY -->
      <div class="h-5" aria-live="assertive">
        <span v-if="v$.email.$error" class="text-red-500">{{
          v$.email.$errors[0].$message
        }}</span>
      </div>
    </div>

    <!-- PASSWORD INPUT  -->
    <div class="md:col-span-5">
      <label for="password" class="text-lg text-almost-black">Password</label>
      <input
        @blur="v$.password.password.$touch"
        id="password"
        v-model="userData.password.password"
        type="password"
        class="h-10 my-1 px-4 w-full bg-almost-white border-none"
        placeholder="********"
        :aria-invalid="v$.password.password.$error"
      />
      <!-- VALIDATION ERROR DISPLAY -->
      <div class="h-5" aria-live="assertive">
        <span v-if="v$.password.password.$error" class="text-red-500"
          >{{ v$.password.password.$errors[0].$message }}
        </span>
      </div>
    </div>

    <!-- PASSWORD CONFIMRATION INPUT -->
    <div class="md:col-span-5">
      <label for="confirmPassword" class="text-lg">Repeat Password</label>
      <input
        @blur="v$.password.confirm.$touch"
        id="confirmPassword"
        v-model="userData.password.confirm"
        type="password"
        class="h-10 my-1 px-4 w-full bg-almost-white border-none"
        placeholder="********"
        :aria-invalid="v$.password.confirm.$error"
      />
      <!-- VALIDATION ERROR DISPLAY -->
      <div class="h-5" aria-live="assertive">
        <span v-if="v$.password.confirm.$error" class="text-red-500">{{
          v$.password.confirm.$errors[0].$message
        }}</span>
      </div>
    </div>
    <!-- ERROR DISPLAY -->
    <p class="h-5 mt-5 font-semibold text-base text-red-500" aria-label="error message">
      {{ authStore.authError }}
    </p>

    <div class="sm:flex justify-between items-center pt-6 text-almost-black">
      <!-- ALREADY-A-MEMBER LINK -->
      <div class="text-lg">
        <span>Already a Member?</span>
        <router-link to="/login" class="hover:underline font-bold" role="button">
          Log in</router-link
        >
      </div>

      <!-- SUBMIT BUTTON -->
      <button
        @click="registerUser"
        :disabled="v$.$invalid"
        :class="!v$.$invalid ? 'opacity-100' : 'opacity-50'"
        class="bg-almost-black text-almost-white text-lg font-semibold mt-3 sm:mt-0 py-4 px-12 group tracking-wide w-full sm:w-auto"
        :aria-disabled="v$.$invalid ? 'true' : 'false'"
      >
        <!-- IS LOADING BUTTON LABEL -->
        <proceding-label v-if="inProgress" procedingLabel="Sending" />
        <!-- DEFAULT BUTTON LABEL -->
        <div v-else class="flex flex-row items-center justify-center">
          <span>Sign up</span>
          <span
            :class="{
              'group-hover:translate-x-3 transition duration-300 ease-in-out': !v$.$invalid
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/AuthentificationStore'

// vuelidate import
import useValidate from '@vuelidate/core'
import { required, email, minLength, alphaNum, sameAs } from '@vuelidate/validators'

// user data (due to Vuelidate docs)
interface ValidationUserData {
  displayName: string
  email: string
  password: {
    password: string
    confirm: string
  }
}
const userData = reactive<ValidationUserData>({
  displayName: '',
  email: '',
  password: {
    password: '',
    confirm: ''
  }
})

// validation rules (due to Vuelidate docs)
const validationRules = computed(() => {
  return {
    displayName: { required, alphaNum, minLength: minLength(2) },
    email: { required, email },
    password: {
      password: {
        required,
        minLength: minLength(8)
      },
      confirm: { required, sameAs: sameAs(userData.password.password) }
    }
  }
})

// vuelidate instance
const v$ = useValidate(validationRules, userData)

// registering new user

// 'Submit' button enabled only when Vuelidate validation is possitive
const router = useRouter()
const authStore = useAuthStore()
const inProgress = ref<boolean>(false)

const registerUser = (): void => {
  // run inProgress button setup
  inProgress.value = true
  // create user on firebase
  authStore
    .createUser(userData.email, userData.password.password, userData.displayName)

    .then(() => {
      router.push({
        name: 'done'
      })
    })
    .catch((error: Error) => {
      console.error('Unexpected error during registering new user:', error.message)
    })
    .finally(() => {
      // set button label to default
      inProgress.value = false
    })
}
</script>
