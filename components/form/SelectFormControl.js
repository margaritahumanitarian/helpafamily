import PropTypes from 'prop-types';
import React from 'react';

function SelectFormControl({ id, label, options, value, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select select-bordered w-full max-w-xs select-sm"
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
      >
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectFormControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFormControl;
