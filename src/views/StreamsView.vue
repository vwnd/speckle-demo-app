<template>
  <div>
    <h1>StreamsView</h1>
    <StreamSearchBar v-model="searchQuery" />
    <div v-if="fetching">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

<script setup lang="ts">
import StreamSearchBar from '@/components/StreamSearchBar.vue'
import { streamsQuery } from '@/graphql/queries/streams'
import { useQuery } from '@urql/vue'
import { ref } from 'vue'

const searchQuery = ref('')

const { data, error, fetching } = useQuery({
  query: streamsQuery,
  variables: { searchQuery }
})
</script>
