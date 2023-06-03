<template>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
export interface StreamGridItemProps {
  id: string
  name: string
  commitsCount: number
}

defineProps<StreamGridItemProps>()
</script>
