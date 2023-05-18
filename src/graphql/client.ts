import { SPECKLE_AUTH_TOKEN_KEY } from '@/stores/store'
import { Client, cacheExchange, fetchExchange } from '@urql/vue'

export const SpeckleGraphQLClient = new Client({
  url: `${import.meta.env.VITE_SPECKLE_SERVER}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = localStorage.getItem(SPECKLE_AUTH_TOKEN_KEY)
    return { headers: { Authorization: token ? `Bearer ${token}` : '' } }
  }
})
