import React from 'react';

import Spirits from '../resources/spirits';
import Cocktails from '../resources/cocktails.json';

const GetListFromEnum = (value, resource) => {
  return Object.entries(resource).filter(entry => value & entry[1]).map(entry => entry[0]);
}

const CocktailList = (props) => {
  const searchFilteredCocktails = props.search
    ? Cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(props.search.toLowerCase()))
    : Cocktails;
  const spiritFilteredCocktails = props.selectedSpirits > 0
    ? searchFilteredCocktails.filter(cocktail => props.selectedSpirits & cocktail.spirits)
    : searchFilteredCocktails;
  const orderedCocktails = spiritFilteredCocktails.sort((a, b) => a.name > b.name);
  return (
    <div className="cocktail-list">
      {orderedCocktails.map(cocktail => {
        return (
          <div key={cocktail.name} className="card card-dark">
            <h3>{cocktail.name}</h3>
            <ul>
              {GetListFromEnum(cocktail.spirits, Spirits).sort().map(spirit => <li key={spirit}>{spirit.replace('_', ' ')}</li>)}
            </ul>
            <p>
              <a href={cocktail.URL} target="_blank" className="link">Recipe</a>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CocktailList;
