import PropTypes from 'prop-types';
import React from 'react';

function CheckboxFormControl({
  id,
  isChecked = false,
  isToggle = false,
  label,
  onChange,
}) {
  const handleChange = (event) => onChange(event.target.checked);

  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">{label}</span>
        <input
          checked={isChecked}
          className={isToggle ? 'toggle' : 'checkbox'}
          id={id}
          name={id}
          onChange={handleChange}
          type="checkbox"
        />
      </label>
    </div>
  );
}

CheckboxFormControl.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  isChecked: PropTypes.bool,
  isToggle: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxFormControl;
