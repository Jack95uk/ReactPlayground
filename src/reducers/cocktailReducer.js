import cocktails from '../resources/cocktails';

import { ADD_COCKTAIL } from '../actions';

export default function cocktailReducer(state = cocktails, action) {
  switch (action.type) {
    case ADD_COCKTAIL: {
      const { name, spirits, URL } = action;
      return [
        ...state.cocktails, {
          name,
          spirits,
          URL,
        },
      ];
    }
    default: return state;
  }
}
