<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const meals = computed(() => store.state.meals)
console.log(meals.value)
</script>

<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="meal in meals" :key="meal.id">
        {{ meal.name }}
      </li>
    </ul>
  </div>
</template>
