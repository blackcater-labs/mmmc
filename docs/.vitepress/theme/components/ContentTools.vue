<script setup lang="ts">
import { tools } from '../../content'
</script>

<template>
  <div flex="~ wrap gap-2">
    <ContentTool
      v-for="item of tools"
      :key="item.name"
      :item="item"
    />
  </div>
</template>
