<script setup>
import SizeSelector from './components/SizeSelector.vue'
import { ref } from 'vue'
const selectedSize = ref('S')
</script>

<template>
  <h1>Seleccione la talla: {{ selectedSize }}</h1>
  <SizeSelector
    :selected-size="selectedSize"
    @on-change-size="selectedSize = $event"
  />
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  text-align: center;
}
button {
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  width: 75px;
  cursor: pointer;
}
.active {
  background-color: black;
  color: white;
  transition: all 0.3s ease-out;
}
</style>
