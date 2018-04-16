import React from 'react';
import PropTypes from 'prop-types';

import * as Spirits from '../resources/spirits';

import { GetListFromEnum, GetReadablePropName } from '../utilities';

const CocktailCard = ({ name, spirits, URL }) => {
  const spiritList = GetListFromEnum(spirits, Spirits).sort();
  return (
    <div className="card card-dark">
      <h3>
        <a href={URL} target="_blank" className="link">
          {name}
        </a>
      </h3>
      <ul>
        {spiritList.map(spirit => <li key={spirit}>{GetReadablePropName(spirit)}</li>)}
      </ul>
    </div>
  );
};

CocktailCard.propTypes = {
  name: PropTypes.string.isRequired,
  spirits: PropTypes.number.isRequired,
  URL: PropTypes.string.isRequired,
};

export default CocktailCard;
