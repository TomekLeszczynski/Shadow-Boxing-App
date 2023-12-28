<template>
  <button @click.prevent="getAccess">Signin anonymously</button>
</template>
<script setup lang="ts">
// router import
import { useRouter } from 'vue-router'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'
import { firebaseAuth } from '@/main'

const router = useRouter()
const authStore = useAuthStore()

// get access by an anonymous user, redirect user to Home page with Nav items accessible only for auth users
const getAccess = () => {
  if (!firebaseAuth.currentUser) {
    authStore
      .getAccessAsAnAnonymous()
      .then(() => {
        router.push({ name: 'shadow-boxing', params: { userId: authStore.user?.uid || 'Guest' } })
      })
      .catch((error: Error) => {
        console.error('Unexpected error during getting access as an anonymous user:', error.message)
      })
  } else {
    alert('nie da sie kurwa')
  }
}
</script>
