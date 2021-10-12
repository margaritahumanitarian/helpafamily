import PropTypes from 'prop-types';
import React from 'react';

function SelectFormControl({ id, label, options, value, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control pb-5 pt-3">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        className="select select-bordered w-full select-sm"
        id={id}
        name={id}
        onBlur={handleChange}
        defaultValue={value}
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
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onChange: PropTypes.func.isRequired,
};

export default SelectFormControl;
