import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from '@/stores/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async (to, from, next) => {
        const store = useStore()
        if (to.query.access_code) {
          const accessCode = to.query.access_code as string
          await store.exchangeAccessCode(accessCode)
        }
        next()
      }
    }
  ]
})

export default router
