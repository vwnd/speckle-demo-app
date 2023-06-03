<template>
  <div>
    <h1>StreamsView</h1>
    <StreamSearchBar v-model="searchQuery" />
    <StreamGrid :streams="streams" :error="error" :fetching="fetching" />
  </div>
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
