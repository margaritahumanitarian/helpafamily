import PropTypes from 'prop-types';
import React from 'react';

function InputFormControl({
  error,
  id,
  label,
  placeholder,
  required = false,
  type,
  value,
  onChange,
}) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{`${label}${
            required ? ' *' : ''
          }`}</span>
        </label>
      )}
      <input
        className={`input input-bordered input-sm ${
          error ? 'input-error' : ''
        }`}
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder || label}
        type={type || 'text'}
        value={value}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500">{error}</span>
        </label>
      )}
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
