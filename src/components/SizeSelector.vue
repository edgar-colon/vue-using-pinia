<script setup>
const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const props = defineProps({
  selectedSize: String
})

const emits = defineEmits({
  onChangeSize: String
})
</script>
<template>
  <button
    v-for="size in possibleSizes"
    :class="{ active: props.selectedSize === size }"
    @click="emits('onChangeSize', size)"
  >
    {{ size }}
  </button>
</template>
