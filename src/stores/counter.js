import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    numberOfChange: 0
  }),
  actions: {
    incrementeBy(value) {
      this.counter += value
      this.numberOfChange += 1
    }
  }
})
