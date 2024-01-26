<template>
  <form @submit.prevent autocomplete="on">
    <div class="grid grid-cols-1 font-public-sans">
      <!--  EMAIL INPUT -->
      <div class="flex flex-row justify-between w-full border-t py-3 animate-text-show-up">
        <label for="email" class="">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="h-10 w-1/2 px-5 bg-almost-white border-none placeholder:text-almost-black text-almost-black"
          placeholder="example@mail.com"
        />
      </div>
      <!--  PASSWORD INPUT -->
      <div class="flex flex-row justify-between w-full border-t py-3 animate-text-show-up">
        <label for="password" class="">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="h-10 w-1/2 px-5 bg-almost-white border-none placeholder:text-almost-black text-almost-black"
          placeholder="********"
        />
      </div>
      <!-- ERROR DISPLAY -->
      <div class="flex flex-row w-full justify-end mb-5 h-60">
        <div aria-live="polite" class="text-almost-white w-1/2 font-semibold py-3 text-justify">
          <span class="text-red-400">
            {{ authStore.authError }} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Natus illum quisquam distinctio. Distinctio perferendis, sed voluptates suscipit iusto
            fugit aspernatur, voluptatibus accusantium accusamus tempore molestias id facilis, nihil
            perspiciatis dolor?
          </span>
        </div>
      </div>

      <!-- FORGOT PASSWORD LINK -->
      <div class="flex flex-row w-full justify-end animate-text-show-up">
        <div class="text-almost-white w-1/2 py-3">
          <RouterLink
            to="/password-reset"
            role="button"
            class="hover:text-gray-400 cursor-pointer font-semibold text-xl"
            ><button>Forgot your password?</button></RouterLink
          >
        </div>
      </div>

      <!-- LOG IN BUTTON -->
      <div class="flex flex-row w-full justify-end">
        <div class="w-1/2 py-3 animate-button-show-from-left">
          <button
            aria-label="log in"
            @click="signingIn"
            class="bg-almost-white text-almost-black py-5 px-12 group tracking-wide w-full"
          >
            <!-- LOADING LABEL WITH SPINNER FROM 'SHARED' -->
            <proceding-label v-if="isLoading" procedingLabel="Sending" />
            <!-- LOG IN LABEL FROM 'SHARED' -->
            <button-label labelText="Log in" v-if="!isLoading" />
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
// vue import
import { ref, onMounted } from 'vue'

// router import
import { useRouter, RouterLink } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// component import
import ProcedingLabel from '@/components/shared/ProcedingLabel.vue'
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// vue-router instance
const router = useRouter()

// pinia store instance
const authStore = useAuthStore()

// form input values
const email = ref<string>('')
const password = ref<string>('')

// loading spinner contoller
const isLoading = ref<boolean>(false)

// signin user and redirect him to 'shadow-boxing' route
const signingIn = () => {
  if (!email.value || !password.value) {
    return
  } else {
    // runs loading spinner
    isLoading.value = true
    // sign in via pinia store / firebase
    authStore
      .signInUser(email.value, password.value)
      .then(() => {
        // if is success move to shadow boxing route
        if (authStore.user) {
          router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid } })
        } else {
          // possible error managed by pinia store
          return
        }
      })
      .catch((error) => {
        console.error('login error:', error.message)
      })
      .finally(() => {
        // clear inputs, button set to default
        isLoading.value = false
        email.value = ''
        password.value = ''
      })
  }
}

onMounted(() => {
  authStore.authError = ''
})
</script>
