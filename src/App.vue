<script setup></script>

<template>
  <router-link to="/">Home</router-link>
  {{ ' ' }}
  <router-link to="/counter">Counter</router-link>
  <router-view></router-view>
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
