<template>
  <div class="max-w-100-lg mx-auto h-full flex-grow flex justify-center items-center">
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
                :class="!v$.$invalid ? 'opacity-100' : 'opacity-50'"
                class="bg-black text-white text-lg font-semibold mt-3 sm:mt-0 py-4 px-12 group tracking-wide w-full sm:w-auto"
                :aria-disabled="v$.$invalid ? 'true' : 'false'"
              >
                <div v-if="inProgress" class="flex flex-row items-center justify-center">
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
                <div v-if="!inProgress" class="flex flex-row items-center justify-center">
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { computed, reactive, ref } from 'vue'

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

// loading spinner contoller
const inProgress = ref<boolean>(false)

// registering new user
// 'Submit' button enabled only when Vuelidate validation is possitive
const registerUser = (): void => {
  // run inProgress button setup
  inProgress.value = true
  // create user on firebase database
  authStore
    .createUser(userData.email, userData.password.password, userData.displayName)
    // show confirmation and redirect to 'done' page
    .then(() => {
      // check if no error
      router.push({
        name: 'login'
      })
      inProgress.value = false
    })
    .catch((error: Error) => {
      console.error('Unexpected error during registering new user:', error.message)
    })
}
</script>
