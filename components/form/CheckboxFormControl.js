import PropTypes from 'prop-types';
import React from 'react';

function Checkbox({ id, isChecked = false, isToggle = false, onChange }) {
  const handleChange = (event) => onChange(event.target.checked);

  return (
    <input
      checked={isChecked}
      className={isToggle ? 'toggle' : 'checkbox'}
      id={id}
      name={id}
      onChange={handleChange}
      type="checkbox"
    />
  );
}

function CheckboxFormControl({ id, label, isChecked, isToggle, onChange }) {
  return (
    <div className="form-control">
      {label ? (
        <label className="cursor-pointer label">
          <span className="label-text">{label}</span>
          <Checkbox
            id={id}
            isChecked={isChecked}
            isToggle={isToggle}
            onChange={onChange}
          />
        </label>
      ) : (
        <Checkbox
          id={id}
          isChecked={isChecked}
          isToggle={isToggle}
          onChange={onChange}
        />
      )}
    </div>
  );
}

CheckboxFormControl.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxFormControl;
