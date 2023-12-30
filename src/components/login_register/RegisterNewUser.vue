<template>
  <div class="bg-black flex-grow">
    <div class="max-w-screen-lg mx-auto h-full flex-grow flex justify-center items-center">
      <div class="bg-brickRed p-5 md:p-8">
        <h2 class="text-black md:text-9xl text-6xl font-bold py-4">CREATE ACCOUNT</h2>
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="lg:col-span-5">
            <form
              @submit.prevent="registerUser"
              class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
            >
              <div class="md:col-span-5">
                <label for="displayName" class="font-semibold" pattern="^[^0-9]+$">Username</label>
                <input
                  @blur="v$.displayName.$touch"
                  id="displayName"
                  v-model="state.displayName"
                  type="text"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="Rocky Balboa"
                />
                <div class="h-5">
                  <span v-if="v$.displayName.$error" class="text-xs text-white">{{
                    v$.displayName.$errors[0]?.$message
                  }}</span>
                </div>
              </div>
              <div class="md:col-span-5">
                <label for="email" class="font-semibold">Email</label>
                <input
                  @blur="v$.email.$touch"
                  id="email"
                  v-model="state.email"
                  type="email"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                  placeholder="example@mail.com"
                />
                <div class="h-5">
                  <span v-if="v$.email.$error" class="text-xs text-white">{{
                    v$.email.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="md:col-span-5">
                <label for="password" class="font-semibold">Password</label>
                <input
                  @blur="v$.password.password.$touch"
                  id="password"
                  v-model="state.password.password"
                  type="password"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                />
                <div class="h-5">
                  <span v-if="v$.password.password.$error" class="text-xs text-white">{{
                    v$.password.password.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="md:col-span-5">
                <label for="confirmPassword" class="font-semibold">Repeat Password</label>
                <input
                  @blur="v$.password.confirm.$touch"
                  id="confirmPassword"
                  v-model="state.password.confirm"
                  type="password"
                  class="h-10 my-1 px-4 w-full bg-white border-none"
                />
                <div class="h-5">
                  <span v-if="v$.password.confirm.$error" class="text-xs text-white">{{
                    v$.password.confirm.$errors[0].$message
                  }}</span>
                </div>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end py-6">
                  <button
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
import { computed, reactive } from 'vue'

// router import
import { useRouter } from 'vue-router'

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
const state = reactive<ValidationUserData>({
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
      confirm: { required, sameAs: sameAs(state.password.password) }
    }
  }
})

// vuelidate instance
const v$ = useValidate(validationRules, state)

// registering new user with required data: email, password, username
const registerUser = (): void => {
  //

  // create user on firebase database
  authStore
    .createUser(state.email, state.password.password, state.displayName)
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
