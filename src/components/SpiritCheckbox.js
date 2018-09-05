import React from 'react';
import PropTypes from 'prop-types';

import { GetReadablePropName } from '../utilities';

const SpiritCheckbox = ({
  name, checked, onChange, prefix,
}) => (
  <div className="spirit-option">
    <label htmlFor={prefix + name}>
      <input
        id={prefix + name}
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
  prefix: PropTypes.string,
};

SpiritCheckbox.defaultProps = {
  checked: false,
  prefix: '',
};

export default SpiritCheckbox;
