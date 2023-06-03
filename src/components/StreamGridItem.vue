<template>
  <div
    class="py-5 px-5 border rounded-lg hover:shadow-lg bg-white hover:shadow-blue-100 flex justify-between"
  >
    <p class="text-gray-800 font-medium">{{ name }}</p>
    <div class="flex text-gray-200 items-center space-x-3 text-sm">
      <DocumentArrowUpIcon class="h-5 w-5" />
      <span>{{ commitsCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'

export interface StreamGridItemProps {
  id: string
  name: string
  commitsCount: number
}

defineProps<StreamGridItemProps>()
</script>
