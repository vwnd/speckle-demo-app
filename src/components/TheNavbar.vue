<template>
  <nav class="w-full bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <span class="text-sm text-white font-medium">My First Speckle App</span>
        <button
          @click="handleSignOut"
          type="button"
          class="rounded-md px-2 py-1 text-sm border border-white font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Sign out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { SPECKLE_AUTH_TOKEN_KEY } from '@/stores/store'

function handleSignOut() {
  localStorage.removeItem(SPECKLE_AUTH_TOKEN_KEY)
  location.reload()
}
</script>
