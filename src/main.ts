import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql from '@urql/vue'

import App from './App.vue'
import router from './router'
import { SpeckleGraphQLClient } from './graphql/client'

const app = createApp(App)

app.use(urql, SpeckleGraphQLClient)
app.use(createPinia())
app.use(router)

app.mount('#app')
