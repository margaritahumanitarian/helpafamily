import PropTypes from 'prop-types';
import React from 'react';

function SelectFormControl({ id, label, options, value, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        className="select select-bordered w-full max-w-xs select-sm"
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
      >
        {options.map(({ disabled, label: optionLabel, value: optionValue }) => (
          <option disabled={disabled} key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectFormControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFormControl;
