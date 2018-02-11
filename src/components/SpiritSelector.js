import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Spirits from '../resources/spirits';
import SpiritCheckbox from './SpiritCheckbox';
import { addSpirit, removeSpirit } from '../actions/actionCreators';

const SpiritSelector = ({ selectedSpirits, dispatch }) => {
  const spirits = Object
    .entries(Spirits)
    .map(entry => ({ name: entry[0], value: entry[1] }))
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });

  const handleSelection = (e) => {
    if (e.target.checked) {
      dispatch(addSpirit(Spirits[e.target.name]));
    } else {
      dispatch(removeSpirit(Spirits[e.target.name]));
    }
  };

  return (
    <div className="spirit-selector">
      <h2>What&apos;ve you got?</h2>
      <div className="checkbox-group">
        {spirits.map(spirit => (
          <SpiritCheckbox
            key={spirit.value}
            name={spirit.name}
            value={spirit.value}
            checked={!!(selectedSpirits & spirit.value)}
            onChange={handleSelection}
          />
        ))}
      </div>
    </div>
  );
};

SpiritSelector.propTypes = {
  selectedSpirits: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// map selectedSpirits to props only - dispatch actions separately
export default connect(state => ({ selectedSpirits: state.selectedSpirits }))(SpiritSelector);
