import { UPDATE_HUE } from '../actions/types';

export default function hueReducer(state = 314, action) {
  switch (action.type) {
    case UPDATE_HUE:
      return action.degrees;
    default:
      return state;
  }
}
