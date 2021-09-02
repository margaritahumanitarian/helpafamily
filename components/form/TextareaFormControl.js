import PropTypes from 'prop-types';
import React from 'react';

function TextareaFormControl({ id, label, placeholder, value, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="form-control">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea h-24 textarea-bordered"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

TextareaFormControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextareaFormControl;
