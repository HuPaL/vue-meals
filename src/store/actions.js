export async function fetchMeals({ commit }, query) {
  commit('SET_QUERY', query)
  commit('SET_LOADING', true)
  commit('SET_ERROR', null)

  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`TheMealDB request failed with status ${response.status}`)
    }
    const data = await response.json()
    commit('SET_MEALS', data.meals ?? [])
  } catch (error) {
    commit('SET_ERROR', error.message)
  } finally {
    commit('SET_LOADING', false)
  }
}
