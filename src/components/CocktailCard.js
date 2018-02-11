import React from 'react';
import PropTypes from 'prop-types';

import * as Spirits from '../resources/spirits';

import { GetListFromEnum, GetReadablePropName } from '../utilities';

const CocktailCard = ({ name, spirits, URL }) => {
  const spiritList = GetListFromEnum(spirits, Spirits).sort();
  return (
    <a href={URL} target="_blank" className="link card card-dark">
      <h3>{name}</h3>
      <ul>
        {spiritList.map(spirit => <li key={spirit}>{GetReadablePropName(spirit)}</li>)}
      </ul>
    </a>
  );
};

CocktailCard.propTypes = {
  name: PropTypes.string.isRequired,
  spirits: PropTypes.number.isRequired,
  URL: PropTypes.string.isRequired,
};

export default CocktailCard;
