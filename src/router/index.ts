import { createRouter, createWebHistory, type NavigationGuard } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from '@/stores/store'

const requiresAuthGuard: NavigationGuard = async (to, from, next) => {
  const store = useStore()
  await store.restoreSession()
  if (store.isAuthenticated) {
    next()
  }
  next('/')
}

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
          await store.getUser()
          next('/')
        } else {
          await store.restoreSession()
        }
        next()
      }
    },
    {
      path: '/streams',
      name: 'streams',
      component: () => import('@/views/StreamsView.vue'),
      beforeEnter: requiresAuthGuard
    }
  ]
})

export default router
