export function addCocktail(name, spirits, URL) {
  return {
    type: 'ADD_COCKTAIL',
    name,
    spirits,
    URL
  }
}

export function applySearch(text) {
  return {
    type: 'APPLY_SEARCH',
    text
  }
}

export function updateHue(degrees) {
  return {
    type: 'UPDATE_HUE',
    degrees
  }
}
