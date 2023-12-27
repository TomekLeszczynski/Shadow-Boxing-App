import { defineStore } from 'pinia'

// firebase import
import { getAuth, signInAnonymously } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import type { User } from 'firebase/auth'

export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      user: null as User | null,
      isLoggedIn: false,
      authCompleted: false,
      isAnonymous: false
    }
  },
  actions: {
    // sign in anonymously
    async getAccessAsAnAnonymous(): Promise<void> {
      const auth = getAuth()
      try {
        await signInAnonymously(auth)
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          console.error('Firebase Authentification Error:', error.code, error.message)
        } else {
          console.error('Unknown Error during Signing In Anonymously:', error)
          throw new Error('Unexpected Error')
        }
      }
    }
    // register user via form
    // sign in with google account
    // sign in user via form
    // logout current user
    // check user's authentification state
  }
})
