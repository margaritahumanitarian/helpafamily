import PropTypes from 'prop-types';
import React from 'react';

const Card = ({
  action,
  actionLabel,
  address,
  addressLabel,
  backgroundImageSource,
  children,
  text,
  title,
}) => (
  <div className="card shadow-xl image-full">
    {backgroundImageSource && (
      <figure>
        <img src={backgroundImageSource} />
      </figure>
    )}
    <div className="card-body justify-end">
      {title && <span className="card-title">{title}</span>}
      {text && <span className="mb-3">{text}</span>}
      {action && (
        <div className="pt-6">
          <button className="btn btn-primary" onClick={action} type="button">
            {actionLabel}
          </button>
        </div>
      )}
      {children}
      {address && (
        <div className="pt-6">
          <div>{addressLabel}</div>
          <span>{address}</span>
        </div>
      )}
    </div>
  </div>
);

Card.propTypes = {
  action: PropTypes.func,
  actionLabel: PropTypes.string,
  addressLabel: PropTypes.string,
  address: PropTypes.string,
  backgroundImageSource: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;
