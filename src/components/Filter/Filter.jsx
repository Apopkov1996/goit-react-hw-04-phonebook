import React from 'react';
import PropTypes from 'prop-types';
import filcss from './filter.module.css';

export const Filter = ({ type, name, value, onChange }) => (
  <label className={filcss.label}>
    <span>Find contacts by name</span>
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
