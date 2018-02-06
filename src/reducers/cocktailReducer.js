import cocktails from '../resources/cocktails';

import { ADD_COCKTAIL, LOAD_COCKTAILS } from '../actions';

export default function cocktailReducer(state = cocktails, action) {
  switch (action.type) {
    case ADD_COCKTAIL: {
      const { name, spirits, URL } = action;
      return [
        ...state, {
          name,
          spirits,
          URL,
        },
      ];
    }
    case LOAD_COCKTAILS:
      return [
        ...state,
        ...action.cocktails,
      ];
    default:
      return state;
  }
}
