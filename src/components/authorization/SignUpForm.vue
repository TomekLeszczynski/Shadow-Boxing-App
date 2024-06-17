<template>
  <!-- FORM -->
  <form autocomplete="on" @submit.prevent class="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
    <!-- FORM INPUTS -->
    <div
      v-for="(section, index) in formSection"
      :key="index"
      class="md:col-span-5 animate-text-show-up"
    >
      <!-- DISPLAYNAME, EMAIL, PASSWORD, PASSWORD CONFIRMATION INPUTS -->
      <label class="text-xl capitalize" :for="section.id">{{ section.title }}</label>
      <input
        @blur="section.blur"
        :id="section.id"
        v-model="section.value"
        :type="section.type"
        :placeholder="section.placeholder"
        :aria-placeholder="section.placeholder"
        class="h-10 text-lg my-1 px-5 w-full bg-custom-white border-none placeholder:text-custom-grey text-custom-black"
      />
      <!-- VALIDATION ERRORS SECTION -->
      <div class="h-5" aria-live="assertive">
        <span v-if="section.error()" class="text-red-500">{{ section.errorMessage() }}</span>
      </div>
    </div>

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
        tabindex="0"
        aria-label="Sign in"
        aria-live="polite"
        type="submit"
      >
        <!-- IS LOADING BUTTON LABEL -->
        <processing-label v-if="inProgress" processingLabel="Sending" />
        <!-- DEFAULT BUTTON LABEL -->
        <button-label v-else labelText="Sign in" class="text-custom-black" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
// vue import
import { computed, ref, type Ref } from 'vue'

// vue router import
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()

// pinia import
import { useAuthStore } from '@/stores/AuthenticationStore'
const authStore = useAuthStore()

// shared components import
import ProcessingLabel from '@/components/shared/ProcessingLabel.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// vuelidate import
import useValidate from '@vuelidate/core'
import { required, email, minLength, alphaNum, sameAs } from '@vuelidate/validators'

// sign-up progress marker
const inProgress = ref<boolean>(false)

// user data (due to Vuelidate docs); need to be type of Ref included
interface ValidationUserData {
  displayName: Ref<string>
  email: Ref<string>
  password: {
    password: Ref<string>
    confirm: Ref<string>
  }
}

const userData: ValidationUserData = {
  displayName: ref(''),
  email: ref(''),
  password: {
    password: ref(''),
    confirm: ref('')
  }
}

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

// FORM SECTIONS V-FOR LOOP SETUP

// interface created for form section used in v-for loop
interface signUpFormSection {
  title: string
  blur?: () => void
  id: string
  value: string | Ref<string> | null
  type: string
  placeholder: string
  error: () => boolean // check if vuelidate error
  errorMessage: () => string | Ref<string> // vuelidate error message to display
}

// form sections including vuelidate userData values
const formSection = ref<signUpFormSection[]>([
  // for displayName / with validation
  {
    title: 'username',
    blur: () => v$.value.displayName.$touch(),
    id: 'displayName',
    value: userData.displayName,
    type: 'text',
    placeholder: 'Rocky Balboa',
    error: () => v$.value.displayName.$error,
    errorMessage: () => v$.value.displayName.$errors[0].$message
  },

  // for email / with validation
  {
    title: 'email',
    blur: () => v$.value.email.$touch(),
    id: 'email',
    value: userData.email,
    type: 'email',
    placeholder: 'rocky.balboa@mail.com',
    error: () => v$.value.email.$error,
    errorMessage: () => v$.value.email.$errors[0].$message
  },

  // for password / with validation - min 8 characters
  {
    title: 'password',
    blur: () => v$.value.password.password.$touch(),
    id: 'password',
    value: userData.password.password,
    type: 'password',
    placeholder: '********',
    error: () => v$.value.password.password.$error,
    errorMessage: () => v$.value.password.password.$errors[0].$message
  },

  // password confirmation / related to password input value
  {
    title: 'repeat password',
    blur: () => v$.value.password.confirm.$touch(),
    id: 'confirmPassword',
    value: userData.password.confirm,
    type: 'password',
    placeholder: '********',
    error: () => v$.value.password.confirm.$error,
    errorMessage: () => v$.value.password.confirm.$errors[0].$message
  }
])

// CREATE NEW USER

const registerUser = async (): Promise<void> => {
  // check if no vuelidate errors or empty fields before sending request to firebase
  if (v$.value.$error || v$.value.$invalid) {
    return
  } else {
    // run inProgress button lable
    inProgress.value = true
    // create user on firebase; based on default firebase function for creating User
    try {
      await authStore.createUser(
        userData.email.value,
        userData.password.password.value,
        userData.displayName.value
      )
      // send to 'done'-view with further instructions
      router.push({
        name: 'done'
      })
    } catch (error) {
      console.error('Unexpected error during registration:' + error)
    } finally {
      // clear inputs, button set to default
      inProgress.value = false
      formSection.value.forEach((section) => (section.value = null))
    }
  }
}
</script>
