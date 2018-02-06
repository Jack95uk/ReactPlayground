import { loadCocktails } from '../actions';
import Spirits from '../resources/spirits';

const newCocktails = [
  {
    name: 'Hurricane',
    spirits: Spirits.white_rum | Spirits.dark_rum,
    URL: 'https://www.liquor.com/recipes/hurricane/',
  },
  {
    name: 'Sex on the Beach',
    spirits: Spirits.vodka | Spirits.peach_schnapps,
    URL: 'https://www.socialandcocktail.co.uk/cocktails/sex-on-the-beach/',
  },
];

export default function getAndLoadCocktails(dispatch) {
  // set start status
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => dispatch(loadCocktails(newCocktails)));
}
