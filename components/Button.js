import React from 'react';

const Button = (props) => {
  const {
    ariaLabel = 'call-to-action-btn',
    btnType = 'button',
    btnClasses,
    onClickHandler = null,
    btnIsDisabled = false,
    btnLabel = 'Click Me!!',
  } = props;
  return (
    <button
      aria-label={ariaLabel}
      className={btnClasses}
      disabled={btnIsDisabled}
      onClick={onClickHandler}
      type={btnType === 'submit' ? 'submit' : 'button'}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
