import { defineStore } from 'pinia'

// firebase import
import { getAuth, signInAnonymously, signOut, onAuthStateChanged } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import type { User } from 'firebase/auth'

// vue-router import
import type { RouteLocationNamedRaw } from 'vue-router'

// create authentification store
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
    
    // signin anonymously with firebase
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
    },

    // register user via form
    // sign in with google account
    // sign in user via form

    // logout current user with firebase
    async logoutUser(
      routerPush: (location: string | RouteLocationNamedRaw) => void
    ): Promise<void> {
      const auth = getAuth()
      try {
        await signOut(auth)
        routerPush({ name: 'home' })
      } catch (error) {
        console.error('Unexpected error during logging out:', error)
      }
    },

    // check user's authentification state and update properties accordingly
    async checkUserAuthState() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          this.isLoggedIn = true
          this.isAnonymous = user.isAnonymous
        } else {
          this.user = null
          this.isLoggedIn = false
          this.isAnonymous = false
        }
        this.authCompleted = true
      })
    }
  }
})
