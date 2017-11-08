import React from 'react';
import PropTypes from 'prop-types';
import Spirits from '../resources/spirits';
import SpiritCheckbox from './SpiritCheckbox';

const SpiritSelector = ({selectedSpirits, addSpirit, removeSpirit}) => {
  const spirits = Object.keys(Spirits).sort((a, b) => {
    if (a > b)
      return 1;
    if (a < b)
      return -1;
    return 0;
  });


  const handleSelection = (e) => {
      if (e.target.checked) {
        addSpirit(Spirits[e.target.name]);
      } else {
        removeSpirit(Spirits[e.target.name]);
      }
    }

  return (
    <div className="spirit-selector">
      <h2>Alcohol</h2>
      <div>
        <p>I have:</p>
        <div className="checkbox-group">
          {spirits.map(spirit => <SpiritCheckbox
            key={Spirits[spirit]}
            name={spirit}
            value={Spirits[spirit]}
            checked={!!(selectedSpirits & Spirits[spirit])}
            onChange={handleSelection}/>)}
        </div>
      </div>
    </div>
  )
}

SpiritSelector.propTypes = {
  selectedSpirits: PropTypes.number.isRequired,
  addSpirit: PropTypes.func.isRequired,
  removeSpirit: PropTypes.func.isRequired
}

export default SpiritSelector;
