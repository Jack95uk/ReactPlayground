import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CocktailCard from './CocktailCard';

const CocktailList = ({ cocktails, search, selectedSpirits }) => {
  const filterCocktails = (list = [], string, values) => {
    if (!list) return [];
    let filteredCocktails = values > 0
      ? list.filter(cocktail => values & cocktail.spirits)
      : list;
    filteredCocktails = string.length > 0
      ? filteredCocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(string.toLowerCase()))
      : filteredCocktails;
    return filteredCocktails.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  };

  const cocktailsArray = Object.entries(cocktails)
    .map(([key, value]) => ({
      id: key,
      ...value,
    }));

  const filteredCocktails =
    filterCocktails(cocktailsArray, search, selectedSpirits);
  return (
    <div className="cocktail-list">
      {filteredCocktails.map(cocktail => (
        <CocktailCard
          name={cocktail.name}
          spirits={cocktail.spirits}
          URL={cocktail.URL}
          key={cocktail.name}
        />
      ))}
    </div>
  );
};

CocktailList.propTypes = {
  cocktails: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    spirits: PropTypes.number,
    URL: PropTypes.string,
  })),
  search: PropTypes.string,
  selectedSpirits: PropTypes.number,
};

CocktailList.defaultProps = {
  cocktails: {},
  search: '',
  selectedSpirits: 0,
};

const mapStateToProps = state => ({
  // cocktails: state.cocktails,
  selectedSpirits: state.selectedSpirits,
});

export default connect(mapStateToProps, null)(CocktailList);
