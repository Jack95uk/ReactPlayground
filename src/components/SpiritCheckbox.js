import React from 'react';
import PropTypes from 'prop-types';

const SpiritCheckbox = ({name, value, checked, onChange}) => {
  return (
    <div key={value} className="spirit-option">
      <label>
        <input type="checkbox" name={name} checked={checked} onChange={onChange} style={{
            display: "none"
          }}/>
        <span className="custom-checkbox">&otimes;</span>
        <span>{name.replace('_', ' ')}</span>
      </label>
    </div>
  )
}

SpiritCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default SpiritCheckbox;
