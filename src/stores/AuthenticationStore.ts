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

// create authentication store
export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      user: null as User | null,
      authCompleted: false,
      authError: ''
    }
  },

  actions: {
    // sign up anonymously with firebase
    async getAccessAsAnAnonymous(): Promise<void> {
      try {
        await signInAnonymously(firebaseAuth)
      } catch (error: unknown) {
        this.errorsHandling(error)
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

    // check user's authentication state and update properties accordingly
    async checkUserAuthState() {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user !== null && (user.emailVerified || user.isAnonymous)) {
          this.user = user
        } else {
          this.user = null
        }
        this.authCompleted = true
      })
    },

    // Firebase Authentication Errors handling
    errorsHandling(error: unknown | FirebaseError) {
      if (error instanceof FirebaseError) {
        console.error('Firebase Error:', error.code, error.message)
        switch (error.code) {
          case 'auth/email-already-exists':
            this.authError =
              'Registration failed. The email address is already associated with an existing account. Please use a different email address or try to log in.'
            break
          case 'auth/user-not-found':
            this.authError =
              'Invalid login credentials. User not found. Please check your email or sign up for an account.'
            break
          case 'auth/invalid-email':
            this.authError = 'Invalid email. Please check the email and try again.'
            break
          case 'auth/invalid-password':
            this.authError = 'Invalid password. Please check the password and try again.'
            break
          case 'auth/invalid-credential':
            this.authError =
              'Invalid login credentials. Please check your email and password and try again.'
            break
          case 'auth/too-many-requests':
            this.authError =
              'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
            break
          default:
            this.authError =
              'Oops! Something went wrong on our end. Please try again later or contact support if the issue persists'
        }
      } else {
        console.error('Unexpected Error:', error)
        switch (error) {
          case 'Error: User not authenticated or email not verified.':
            this.authError =
              'Authentication Failed: Your account has not been authenticated or your email address is not verified.'
            break
          default:
            this.authError =
              'Oops! Something went wrong on our end. Please try again later or contact support if the issue persists'
        }
        throw new Error('Unexpected Error')
      }
    }
  }
})
