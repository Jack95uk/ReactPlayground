import React from 'react';
import PropTypes from 'prop-types';

import CocktailCard from './CocktailCard';

const CocktailList = ({cocktails = []}) => {
  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => <CocktailCard name={cocktail.name} spirits={cocktail.spirits} URL={cocktail.URL} key={cocktail.name}/>)}
    </div>
  )
}

CocktailList.propTypes = {
  cocktails: PropTypes.array
}

export default CocktailList;
