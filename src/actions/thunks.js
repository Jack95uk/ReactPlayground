import { loadCocktails } from './actionCreators';
import { newCocktails } from '../resources/newCocktails';

export function GetAndLoadCocktails() {
  // set start status
  return (dispatch) => {
    new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => dispatch(loadCocktails(newCocktails)));
  };
}
