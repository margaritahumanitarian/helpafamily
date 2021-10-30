import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../components/Button';

function Modal({ children, isOpen, onClose }) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalContent = isOpen ? (
    <div className="modal modal-open">
      <div className="modal-box">
        {children}
        <div className="modal-action">
          <Button
            ariaLabel="back-btn"
            btnClasses="btn"
            btnLabel="OK"
            btnType="button"
            onClickHandler={onClose}
          />
        </div>
      </div>
    </div>
  ) : null;

  return isMounted
    ? ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    : null;
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
