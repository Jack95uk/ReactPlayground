import React from 'react';
import PropTypes from 'prop-types';

import { GetReadablePropName } from '../utilities';

const SpiritCheckbox = ({ name, checked, onChange }) => (
  <div key={name} className="spirit-option">
    <label htmlFor={name}>
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <span className="custom-checkbox">&otimes;</span>
      <span>{GetReadablePropName(name)}</span>
    </label>
  </div>
);

SpiritCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

SpiritCheckbox.defaultProps = {
  checked: false,
};

export default SpiritCheckbox;
