export const ADD_COCKTAIL = 'ADD_COCKTAIL';
export const LOAD_COCKTAILS = 'LOAD_COCKTAILS';
export const ADD_SPIRIT = 'ADD_SPIRIT';
export const REMOVE_SPIRIT = 'REMOVE_SPIRIT';
export const UPDATE_HUE = 'UPDATE_HUE';

export function addCocktail(name, spirits, URL) {
  return {
    type: ADD_COCKTAIL,
    name,
    spirits,
    URL,
  };
}

export function loadCocktails(cocktails) {
  return {
    type: LOAD_COCKTAILS,
    cocktails,
  };
}

export function addSpirit(spirit) {
  return {
    type: ADD_SPIRIT,
    spirit,
  };
}

export function removeSpirit(spirit) {
  return {
    type: REMOVE_SPIRIT,
    spirit,
  };
}

export function updateHue(degrees) {
  return {
    type: UPDATE_HUE,
    degrees,
  };
}
