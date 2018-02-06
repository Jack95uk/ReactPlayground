import React from 'react';
import PropTypes from 'prop-types';

import Spirits from '../resources/spirits';

const GetListFromEnum = (value, resource) =>
  Object.entries(resource).filter(entry => value & entry[1]).map(entry => entry[0]);

const CocktailCard = ({ name, spirits, URL }) => {
  const spiritList = GetListFromEnum(spirits, Spirits).sort();
  return (
    <div className="card card-dark">
      <h3>{name}</h3>
      <ul>
        {spiritList.map(spirit => <li key={spirit}>{spirit.replace('_', ' ')}</li>)}
      </ul>
      <p>
        <a href={URL} target="_blank" className="link">Recipe</a>
      </p>
    </div>
  );
};

CocktailCard.propTypes = {
  name: PropTypes.string.isRequired,
  spirits: PropTypes.number.isRequired,
  URL: PropTypes.string.isRequired,
};

export default CocktailCard;
