<template>
  <div class="max-w-100-lg mx-auto max-h-100 flex-grow flex justify-center items-center">
    <div class="bg-boxingRed p-5 md:p-8">
      <!-- HEADING -->
      <h2
        aria-label="create-account-heading"
        class="text-black md:text-9xl text-6xl font-bold py-4"
      >
        CREATE ACCOUNT
      </h2>

      <div class="grid text-sm grid-cols-1 lg:grid-cols-1">
        <div class="lg:col-span-5">
          <!-- FORM -->
          <form
            autocomplete="on"
            @submit.prevent
            class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
          >
            <!-- USERNAME INPUT -->
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
              <!-- VALIDATION ERROR DISPLAY -->
              <div class="h-5" aria-live="assertive">
                <span v-if="v$.displayName.$error" class="text-xs text-white"
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
                class="h-10 my-1 px-4 w-full bg-white border-none"
                placeholder="example@mail.com"
                :aria-invalid="v$.email.$error"
              />
              <!-- VALIDATION ERROR DISPLAY -->
              <div class="h-5" aria-live="assertive">
                <span v-if="v$.email.$error" class="text-xs text-white">{{
                  v$.email.$errors[0].$message
                }}</span>
              </div>
            </div>

            <!-- PASSWORD INPUT  -->
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
              <!-- VALIDATION ERROR DISPLAY -->
              <div class="h-5" aria-live="assertive">
                <span v-if="v$.password.password.$error" class="text-xs text-white"
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
                class="h-10 my-1 px-4 w-full bg-white border-none"
                placeholder="********"
                :aria-invalid="v$.password.confirm.$error"
              />
              <!-- VALIDATION ERROR DISPLAY -->
              <div class="h-5" aria-live="assertive">
                <span v-if="v$.password.confirm.$error" class="text-xs text-white">{{
                  v$.password.confirm.$errors[0].$message
                }}</span>
              </div>
            </div>

            <div class="sm:flex justify-between items-center pt-6">
              <!-- ALREADY-A-MEMBER LINK -->
              <div class="text-lg">
                <span>Already a Member?</span>
                <router-link to="/login" class="hover:underline font-bold"> Log in</router-link>
              </div>

              <!-- SUBMIT BUTTON -->
              <button
                @click="registerUser"
                :disabled="v$.$invalid"
                :class="!v$.$invalid ? 'opacity-100' : 'opacity-50'"
                class="bg-black text-white text-lg font-semibold mt-3 sm:mt-0 py-4 px-12 group tracking-wide w-full sm:w-auto"
                :aria-disabled="v$.$invalid ? 'true' : 'false'"
              >
                <!-- IS LOADING BUTTON LABEL -->
                <is-loading-label v-if="inProgress" />
                <!-- DEFAULT BUTTON LABEL -->
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
            <!-- ERROR DISPLAY -->
            <div class="text-white h-5 mt-5 font-semibold">{{ authStore.authError }}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { computed, reactive, ref, onMounted } from 'vue'

// router import
import { useRouter, RouterLink } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// vuelidate import
import useValidate from '@vuelidate/core'
import { required, email, minLength, alphaNum, sameAs } from '@vuelidate/validators'

// component import
import IsLoadingLabel from '@/components/login_register/supportComponents/IsLoadingLabel.vue'

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
// clear up error display
onMounted(() => {
  authStore.authError = ''
})
</script>
