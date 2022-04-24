<template>
  <ul>
    <li :key="i.key" v-for="i in list">{{ i.value }}</li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
