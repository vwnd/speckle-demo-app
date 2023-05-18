<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()

if (!store.isAuthenticated) {
  store.redirectToSpeckleAuthPage()
}
</script>

<template>
  <main>My Speckle App</main>
</template>
