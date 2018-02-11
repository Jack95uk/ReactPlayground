import { ADD_SPIRIT, REMOVE_SPIRIT } from '../actions/types';

export default function spiritReducer(state = 0, action) {
  switch (action.type) {
    case ADD_SPIRIT:
      return state | action.spirit;
    case REMOVE_SPIRIT:
      return state & ~action.spirit;
    default:
      return state;
  }
}
