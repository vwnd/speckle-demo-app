import { defineStore } from 'pinia'

interface State {
  user: any | null
}

export const useStore = defineStore('store', {
  state: (): State => ({
    user: null
  }),
  getters: {
    isAuthenticated(): boolean {
      return this.user !== null
    }
  },
  actions: {
    redirectToSpeckleAuthPage() {
      // Generate a random challenge
      const challenge =
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      // Store the challenge in localStorage
      localStorage.setItem('SpeckleDemoApp.Challenge', challenge)

      // Redirect to the Speckle Server auth page
      window.location.href = `${import.meta.env.VITE_SPECKLE_SERVER}/authn/verify/${
        import.meta.env.VITE_SPECKLE_APP_ID
      }/${challenge}`
    }
  }
})
