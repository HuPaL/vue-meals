<script setup>
defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="aspect-square w-full object-cover"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
        {{ meal.strMeal }}
      </h3>
      <span
        class="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
      >
        {{ meal.strCategory }}
      </span>
    </div>
  </article>
</template>
