<template>
  <h1>
    Counter View
    {{ `${counterStore.counter}  Changes: ${counterStore.numberOfChange}` }}
  </h1>
  <p>
    {{ `${counterStore.counter}  Changes: ${counterStore.numberOfChange}` }}
  </p>
  <button @click="counterStore.incrementeBy(1)">+1</button>
  <button @click="counterStore.incrementeBy(2)">+2</button>
  <button @click="counterStore.incrementeBy(5)">+5</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'
const counterStore = useCounterStore()
</script>
