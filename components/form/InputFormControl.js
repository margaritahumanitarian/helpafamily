import PropTypes from 'prop-types';
import React from 'react';

function InputFormControl({ id, label, placeholder, type, value, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        className="input input-bordered input-sm"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder || label}
        type={type || 'text'}
        value={value}
      />
    </div>
  );
}

InputFormControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFormControl;
