import React from 'react';

import Spirits from '../resources/spirits.json';
import Cocktails from '../resources/cocktails.json';

const GetListFromEnum = (value, resource) => {
  return Object.entries(resource).filter(entry => value & entry[1]).map(entry => entry[0]);
}

const CocktailList = (props) => {
  const filteredCocktails = props.search
    ? Cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(props.search.toLowerCase()))
    : Cocktails;
  const filteredCocktails2 = props.selectedSpirits > 0
    ? filteredCocktails.filter(cocktail => props.selectedSpirits & cocktail.spirits)
    : filteredCocktails;
  return (
    <div className="cocktail-list">
      {filteredCocktails2.map(cocktail => {
        return (
          <div key={cocktail.name}>
            <h3>{cocktail.name}</h3>
            <ul>
              {GetListFromEnum(cocktail.spirits, Spirits).map(spirit => <li key={spirit}>{spirit.replace('_', ' ')}</li>)}
            </ul>
            <p>
              <a href={cocktail.URL} target="_blank">Recipe</a>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CocktailList;
