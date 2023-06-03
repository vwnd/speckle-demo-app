<template>
  <header class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Streams</h1>
  </header>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-8">
    <StreamSearchBar v-model="searchQuery" />
    <StreamGrid :streams="streams" :error="error" :fetching="fetching" />
  </main>
</template>

<script setup lang="ts">
import StreamGrid from '@/components/StreamGrid.vue'
import type { StreamGridItemProps } from '@/components/StreamGridItem.vue'
import StreamSearchBar from '@/components/StreamSearchBar.vue'
import { streamsQuery } from '@/graphql/queries/streams'
import { useQuery } from '@urql/vue'
import { ref, computed } from 'vue'

const searchQuery = ref('')

const { data, error, fetching } = useQuery({
  query: streamsQuery,
  variables: { searchQuery }
})

const streams = computed<StreamGridItemProps[]>(() => {
  if (!data) return []
  return data.value.streams.items.map((stream: any) => ({
    id: stream.id,
    name: stream.name,
    commitsCount: stream.commits.totalCount
  }))
})
</script>
