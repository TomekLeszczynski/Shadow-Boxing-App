import { defineStore } from 'pinia'

// firebase import
import {
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
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
      authCompleted: false
    }
  },

  actions: {
    // sign up anonymously with firebase
    async getAccessAsAnAnonymous(): Promise<void> {
      if (!this.user) {
        try {
          await signInAnonymously(firebaseAuth)
        } catch (error: unknown) {
          this.errorsHandling(error)
        }
      }
    },

    // sign up user via form
    async createUser(email: string, password: string, displayName: string): Promise<void> {
      try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        await updateProfile(userCredential.user, { displayName: displayName })
        await sendEmailVerification(userCredential.user)
      } catch (error: unknown) {
        this.errorsHandling(error)
      }
    },

    // sign in user via form
    async signInUser(email: string, password: string): Promise<void> {
      if (!this.user) {
        try {
          const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
          const authenticatedUser = userCredential.user
          if (authenticatedUser && authenticatedUser.emailVerified) {
            this.user = authenticatedUser
          } else {
            throw new Error('User not authenticated or email not verified.')
          }
        } catch (error: unknown) {
          this.errorsHandling(error)
        }
      }
    },

    // log out current user with firebase
    async logoutUser(
      routerPush: (location: string | RouteLocationNamedRaw) => void
    ): Promise<void> {
      try {
        await signOut(firebaseAuth)
        routerPush({ name: 'home' })
      } catch (error: unknown | FirebaseError) {
        this.errorsHandling(error)
      }
    },

    // check user's authentification state and update properties accordingly
    async checkUserAuthState() {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user !== null && user.emailVerified) {
          this.user = user
        } else {
          this.user = null
        }
        this.authCompleted = true
      })
    },

    // Fireabse Authentification Errors handling
    errorsHandling(error: unknown | FirebaseError) {
      if (error instanceof FirebaseError) {
        console.error('Firebase Error:', error.code, error.message)
      } else {
        console.error('Unexpected Error:', error)
        throw new Error('Unexpected Error')
      }
    }
  }
})
