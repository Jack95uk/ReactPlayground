import React from 'react';
import PropTypes from 'prop-types';

import CocktailCard from './CocktailCard';

const CocktailList = ({cocktails, search, selectedSpirits}) => {
  const spiritFilteredCocktails = selectedSpirits > 0
    ? cocktails.filter(cocktail => selectedSpirits & cocktail.spirits)
    : cocktails;
  const searchFilteredCocktails = search.length > 0
    ? spiritFilteredCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()))
    : spiritFilteredCocktails;
  const orderedCocktails = searchFilteredCocktails.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

  return (<div className="cocktail-list">
    {orderedCocktails.map(cocktail => <CocktailCard name={cocktail.name} spirits={cocktail.spirits} URL={cocktail.URL} key={cocktail.name}/>)}
  </div>)
}

CocktailList.propTypes = {
  cocktails: PropTypes.array.isRequired,
  search: PropTypes.string,
  selectedSpirits: PropTypes.number.isRequired
}

export default CocktailList;
