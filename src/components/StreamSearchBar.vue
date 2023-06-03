<template>
  <input v-model="searchModelValue" type="search" placeholder="Search for a stream" />
</template>

<script setup lang="ts">
const searchModelValue = defineModel({ default: '' })
</script>
