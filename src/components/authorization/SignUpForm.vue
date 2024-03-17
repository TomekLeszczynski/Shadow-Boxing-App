<template>
  <!-- FORM -->
  <form autocomplete="on" @submit.prevent class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
    <!-- USERNAME INPUT -->
    <div class="md:col-span-5 animate-text-show-up">
      <label for="displayName" class="text-xl" pattern="^[^0-9]+$">Username</label>
      <input
        @blur="v$.displayName.$touch"
        id="displayName"
        v-model="userData.displayName"
        type="text"
        class="h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"
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
    <div class="md:col-span-5 animate-text-show-up">
      <label for="email" class="text-xl">Email</label>
      <input
        @blur="v$.email.$touch"
        id="email"
        v-model="userData.email"
        type="email"
        class="h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"
        placeholder="rocky.balboa@mail.com"
        :aria-invalid="v$.email.$error"
      />
      <!-- VALIDATION ERROR DISPLAY -->
      <div class="h-5" aria-live="assertive">
        <span v-if="v$.email.$error" class="text-red-500">{{ v$.email.$errors[0].$message }}</span>
      </div>
    </div>

    <!-- PASSWORD INPUT  -->
    <div class="md:col-span-5 animate-text-show-up">
      <label for="password" class="text-xl">Password</label>
      <input
        @blur="v$.password.password.$touch"
        id="password"
        v-model="userData.password.password"
        type="password"
        class="h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"
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
    <div class="md:col-span-5 animate-text-show-up">
      <label for="confirmPassword" class="text-xl">Repeat Password</label>
      <input
        @blur="v$.password.confirm.$touch"
        id="confirmPassword"
        v-model="userData.password.confirm"
        type="password"
        class="h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"
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
    <p class="h-5 mt-5 text-lg text-red-500" aria-label="error message">
      {{ authStore.authError }}
    </p>

    <div class="grid grid-cols-1 text-xl animate-text-show-up py-3 lg:py-6">
      <!-- ALREADY-A-MEMBER LINK -->
      <div class="text-xl animate-text-show-up py-3 lg:py-6">
        <span>Already a Member? </span>
        <router-link
          to="/login"
          class="hover:underline font-semibold cursor-pointer"
          aria-label="Log in link"
        >
          Log in</router-link
        >
      </div>

      <!-- SUBMIT BUTTON -->
      <button
        @click="registerUser"
        class="bg-custom-orange-dark py-5 px-12 group tracking-wide animate-button-show-from-left"
      >
        <!-- IS LOADING BUTTON LABEL -->
        <proceding-label v-if="inProgress" procedingLabel="Sending" />
        <!-- DEFAULT BUTTON LABEL -->
        <button-label v-else labelText="Sign in" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/AuthentificationStore'
import ProcedingLabel from '@/components/shared/ProcedingLabel.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

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
  if (v$.value.$error || v$.value.$invalid) return
  else {
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
}
</script>
