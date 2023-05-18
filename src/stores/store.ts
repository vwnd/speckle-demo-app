import { SpeckleGraphQLClient } from '@/graphql/client'
import { userInfoQuery } from '@/graphql/queries/user-info'
import { defineStore } from 'pinia'

export const SPECKLE_CHALLENGE_KEY = 'SpeckleDemoApp.Challenge'
export const SPECKLE_AUTH_TOKEN_KEY = 'SpeckleDemoApp.AuthToken'
export const SPECKLE_AUTH_REFRESH_TOKEN_KEY = 'SpeckleDemoApp.AuthRefreshToken'

interface State {
  user: {
    email: string
    name: string
    company?: string
    bio?: string
    avatar?: string
  } | null
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
      localStorage.setItem(SPECKLE_CHALLENGE_KEY, challenge)

      // Redirect to the Speckle Server auth page
      window.location.href = `${import.meta.env.VITE_SPECKLE_SERVER}/authn/verify/${
        import.meta.env.VITE_SPECKLE_APP_ID
      }/${challenge}`
    },
    async exchangeAccessCode(accessCode: string) {
      const res = await fetch(`${import.meta.env.VITE_SPECKLE_SERVER}/auth/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accessCode: accessCode,
          appId: import.meta.env.VITE_SPECKLE_APP_ID,
          appSecret: import.meta.env.VITE_SPECKLE_APP_SECRET,
          challenge: localStorage.getItem(SPECKLE_CHALLENGE_KEY)
        })
      })
      const data = await res.json()
      if (data.token) {
        // If retrieving the token was successful, remove challenge and set the new token and refresh token
        localStorage.removeItem(SPECKLE_CHALLENGE_KEY)
        localStorage.setItem(SPECKLE_AUTH_TOKEN_KEY, data.token)
        localStorage.setItem(SPECKLE_AUTH_REFRESH_TOKEN_KEY, data.refreshToken)
      }
      return data
    },
    async getUser() {
      const { data } = await SpeckleGraphQLClient.query(userInfoQuery, {})
      this.user = data.activeUser
    },
    async restoreSession() {
      const token = localStorage.getItem(SPECKLE_AUTH_TOKEN_KEY)
      if (token) {
        await this.getUser()
      }
    }
  }
})
