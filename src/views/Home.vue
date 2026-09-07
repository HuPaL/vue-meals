<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MealCard from '../components/MealCard.vue'

const store = useStore()
const meals = computed(() => store.state.meals)
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
