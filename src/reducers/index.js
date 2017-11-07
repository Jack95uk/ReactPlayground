import cocktails from '../resources/cocktails';

const initialState = {
  cocktails,
  selectedSpirits: 0,
  search: '',
  hue: 0
}

function happyHour(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COCKTAIL':
      const {name, spirits, URL} = action;
      return {
        ...state,
        ...{
          cocktails: [
            ...state.cocktails,
            ...{
              name,
              spirits,
              URL
            }
          ]
        }
      }
    case 'UPDATE_SELECTED_SPIRITS':
      return {
        ...state,
        ...{
          selectedSpirits: action.selection
        }
      }
    case 'UPDATE_HUE':
      return {
        ...state,
        ...{
          hue: action.degrees
        }
      }
    case 'APPLY_SEARCH':
    default:
      return state;
  }
}

export default happyHour;
