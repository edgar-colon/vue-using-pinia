<template>
  <h1>
    Home View:
    {{ `${counterStore.counter}  Changes: ${counterStore.numberOfChange}` }}
  </h1>
</template>
<script setup>
import { useCounterStore } from '../stores/counter.js'

const counterStore = useCounterStore()
</script>
