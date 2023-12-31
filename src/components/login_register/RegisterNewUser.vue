<template>
  <div class="bg-black flex-grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-boxingRed p-5 md:p-8">
        <!-- Header -->
        <h2 class="text-black md:text-9xl text-6xl font-bold py-4">CREATE ACCOUNT</h2>

        <div class="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5">
            <!-- form -->
            <form @submit.prevent class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <!-- username input -->
              <div class="md:col-span-5">
                <label for="displayName" class="text-lg" pattern="^[^0-9]+$">Username</label>
                <input
                  @blur="v$.displayName.$touch"
                  id="displayName"
                  v-model="userData.displayName"
                  type="text"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="Rocky Balboa"
                  :aria-invalid="v$.displayName.$error"
                />
                <!-- validation error display -->
                <div class="h-5" aria-live="assertive">
                  <span v-if="v$.displayName.$error" class="text-xs text-white"
                    >{{ v$.displayName.$errors[0]?.$message }}
                  </span>
                </div>
              </div>

              <!--  email input -->
              <div class="md:col-span-5">
                <label for="email" class="text-lg">Email</label>
                <input
                  @blur="v$.email.$touch"
                  id="email"
                  v-model="userData.email"
                  type="email"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="example@mail.com"
                  :aria-invalid="v$.email.$error"
                />
                <!-- validation error display -->
                <div class="h-5" aria-live="assertive">
                  <span v-if="v$.email.$error" class="text-xs text-white">{{
                    v$.email.$errors[0].$message
                  }}</span>
                </div>
              </div>

              <!-- password input  -->
              <div class="md:col-span-5">
                <label for="password" class="text-lg">Password</label>
                <input
                  @blur="v$.password.password.$touch"
                  id="password"
                  v-model="userData.password.password"
                  type="password"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="********"
                  :aria-invalid="v$.password.password.$error"
                />
                <!-- validation error display -->
                <div class="h-5" aria-live="assertive">
                  <span v-if="v$.password.password.$error" class="text-xs text-white"
                    >{{ v$.password.password.$errors[0].$message }}
                  </span>
                </div>
              </div>

              <!-- password confirmation input -->
              <div class="md:col-span-5">
                <label for="confirmPassword" class="text-lg">Repeat Password</label>
                <input
                  @blur="v$.password.confirm.$touch"
                  id="confirmPassword"
                  v-model="userData.password.confirm"
                  type="password"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="********"
                  :aria-invalid="v$.password.confirm.$error"
                />
                <!-- validation error display -->
                <div class="h-5" aria-live="assertive">
                  <span v-if="v$.password.confirm.$error" class="text-xs text-white">{{
                    v$.password.confirm.$errors[0].$message
                  }}</span>
                </div>
              </div>

              <div class="sm:flex justify-between items-center py-6">
                <!-- already a member link -->
                <div class="text-lg">
                  <span>Already a Member?</span>
                  <router-link to="/login" class="hover:underline font-bold"> Log in</router-link>
                </div>

                <!-- submit button -->
                <button
                  @click="registerUser"
                  :disabled="v$.$invalid"
                  :class="{ 'opacity-100': !v$.$invalid }"
                  class="bg-black opacity-50 text-white text-lg font-semibold mt-3 sm:mt-0 py-4 px-12 flex flex-row items-center justify-center group tracking-wide w-full sm:w-auto"
                  :aria-disabled="v$.$invalid ? 'true' : 'false'"
                >
                  Sign up
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </button>
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
import { computed, reactive } from 'vue'

// router import
import { useRouter, RouterLink } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// vuelidate import
import useValidate from '@vuelidate/core'
import { required, email, minLength, alphaNum, sameAs } from '@vuelidate/validators'

// interface import
import { type ValidationUserData } from '@/interfaces'

// router instance
const router = useRouter()

// store instance
const authStore = useAuthStore()

// user data (due to Vuelidate docs)
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
const registerUser = (): void => {
  // create user on firebase database
  authStore
    .createUser(userData.email, userData.password.password, userData.displayName)
    // show confirmation and redirect to login page
    // ...
    .then(() => {
      router.push({
        name: 'login'
      })
    })
    .catch((error: Error) => {
      console.error('Unexpected error during registering new user:', error.message)
    })
}
</script>
