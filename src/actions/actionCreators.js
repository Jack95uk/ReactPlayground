export function addCocktail(name, spirits, URL) {
  return {
    type: 'ADD_COCKTAIL',
    name,
    spirits,
    URL
  }
}

export function addSpirit(spirit) {
  return {
    type: 'ADD_SPIRIT',
    spirit
  }
}

export function removeSpirit(spirit) {
  return {
    type: 'REMOVE_SPIRIT',
    spirit
  }
}

export function updateHue(degrees) {
  return {
    type: 'UPDATE_HUE',
    degrees
  }
}
