import React from 'react';
import PropTypes from 'prop-types';

import CocktailCard from './CocktailCard';

const CocktailList = ({ cocktails }) => (
  <div className="cocktail-list">
    {cocktails.map(cocktail => (
      <CocktailCard
        name={cocktail.name}
        spirits={cocktail.spirits}
        URL={cocktail.URL}
        key={cocktail.name}
      />
    ))}
  </div>
);

CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    spirits: PropTypes.number,
    URL: PropTypes.string,
  })),
};

CocktailList.defaultProps = {
  cocktails: [],
};

export default CocktailList;
