import { ADD_COCKTAIL, LOAD_COCKTAILS } from '../actions/types';

export default function cocktailReducer(state = [], action) {
  switch (action.type) {
    case ADD_COCKTAIL: {
      const {
        id, name, spirits, URL,
      } = action;
      return {
        ...state,
        [id]: {
          name,
          spirits,
          URL,
        },
      };
    }
    case LOAD_COCKTAILS:
      return {
        ...state,
        ...action.cocktails,
      };
    default:
      return state;
  }
}
