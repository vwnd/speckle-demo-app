<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
    <input
      class="block w-full rounded-md border-0 py-4 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 shadow-lg shadow-blue-200"
      v-model="searchModelValue"
      type="search"
      placeholder="Search for a stream"
    />
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
const searchModelValue = defineModel({ default: '' })
</script>
