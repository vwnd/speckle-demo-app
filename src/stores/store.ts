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
  }
})
