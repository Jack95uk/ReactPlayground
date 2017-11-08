import cocktails from '../resources/cocktails';

const initialState = {
  cocktails,
  selectedSpirits: 0,
  hue: 300
}

function happyHour(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SPIRIT':
      return {
        ...state,
        selectedSpirits: state.selectedSpirits |= action.spirit
      }
    case 'REMOVE_SPIRIT':
      return {
        ...state,
        selectedSpirits: state.selectedSpirits &= ~action.spirit
      }
    case 'ADD_COCKTAIL':
      const {name, spirits, URL} = action;
      return {
        ...state,
        cocktails: [
          ...state.cocktails, {
            name,
            spirits,
            URL
          }
        ]
      }
    case 'UPDATE_HUE':
      return {
        ...state,
        hue: action.degrees
      }
    default:
      return state;
  }
}

export default happyHour;
