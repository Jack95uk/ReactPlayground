import * as Types from './types';

export const addCocktail = (name, spirits, URL) => ({
  type: Types.ADD_COCKTAIL,
  name,
  spirits,
  URL,
});

export const loadCocktails = cocktails => ({
  type: Types.LOAD_COCKTAILS,
  cocktails,
});

export const addSpirit = spirit => ({
  type: Types.ADD_SPIRIT,
  spirit,
});

export const removeSpirit = spirit => ({
  type: Types.REMOVE_SPIRIT,
  spirit,
});

export const updateHue = degrees => ({
  type: Types.UPDATE_HUE,
  degrees,
});
