import { UPDATE_HUE } from '../actions';

export default function hueReducer(state = 300, action) {
  switch (action.type) {
    case UPDATE_HUE:
      return action.degrees;
    default:
      return state;
  }
}
