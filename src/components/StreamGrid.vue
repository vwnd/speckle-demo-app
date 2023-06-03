<template>
  <div class="border p-8 rounded-lg">
    <div v-if="fetching" class="flex text-gray-600 justify-center text-sm">Loading...</div>
    <div v-if="error" class="flex text-red-600 justify-center text-sm">{{ error.message }}</div>
    <div class="grid grid-cols-3 gap-4">
      <StreamGridItem
        v-for="stream in streams"
        :key="stream.id"
        :id="stream.id"
        :name="stream.name"
        :commits-count="stream.commitsCount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CombinedError } from '@urql/core'
import StreamGridItem, { type StreamGridItemProps } from './StreamGridItem.vue'

export interface StreamGridProps {
  streams: StreamGridItemProps[]
  fetching?: boolean
  error?: CombinedError
}

defineProps<StreamGridProps>()
</script>
