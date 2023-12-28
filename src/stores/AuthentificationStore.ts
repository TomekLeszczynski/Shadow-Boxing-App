import { defineStore } from 'pinia'

// firebase import
import {
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import type { User } from 'firebase/auth'

// vue-router import
import type { RouteLocationNamedRaw } from 'vue-router'

// firebase getAuth instance
import { firebaseAuth } from '@/main'

// create authentification store
export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      user: null as User | null,
      authCompleted: false,
    }
  },

  actions: {
    // sign in anonymously with firebase
    async getAccessAsAnAnonymous(): Promise<void> {
      try {
        await signInAnonymously(firebaseAuth)
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          console.error('Firebase Authentification Error:', error.code, error.message)
        } else {
          console.error('Unknown Error during Signing In Anonymously:', error)
          throw new Error('Unexpected Error')
        }
      }
    },

    // register user via form
    async createUser(email: string, password: string, displayName: string): Promise<void> {
      try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        await updateProfile(userCredential.user, { displayName: displayName })
        this.user = userCredential.user
      } catch (error) {
        if (error instanceof Error) {
          console.error('Unexpected error: from authStore.ts:', error)
          throw error
        } else {
          console.error('Unexpected error: from authStore.ts:', error)
          throw new Error('Unexpected error')
        }
      }
    },

    // sign in user via form

    // logout current user with firebase
    async logoutUser(
      routerPush: (location: string | RouteLocationNamedRaw) => void
    ): Promise<void> {
      try {
        await signOut(firebaseAuth)
        routerPush({ name: 'home' })
      } catch (error) {
        console.error('Unexpected error during logging out:', error)
      }
    },

    // check user's authentification state and update properties accordingly
    async checkUserAuthState() {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user !== null) {
          this.user = user
        } else {
          this.user = null
        }
        this.authCompleted = true
      })
    }
  }
})
