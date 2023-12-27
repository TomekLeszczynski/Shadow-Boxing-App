import { defineStore } from 'pinia'

export const useAuthStore = defineStore('Authentification', {
  state: () => {
    return { user: null, isLoggedIn: false, authCompleted: false, isAnonymous: false }
  },
  actions:{
    // sign in anonymously
    // register user via form
    // sign in with google account
    // sign in user via form
    // logout current user
    // check user's authentification state
  }
})
