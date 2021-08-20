import PropTypes from 'prop-types';
import React from 'react';

function Card({ backgroundImageSource, children }) {
  return (
    <div className="card shadow-xl image-full">
      {backgroundImageSource && (
        <figure>
          <img src={backgroundImageSource} />
        </figure>
      )}
      <div className="card-body justify-end">{children}</div>
    </div>
  );
}

Card.propTypes = {
  backgroundImageSource: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
  return <span className="card-title">{children}</span>;
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardParagraph({ children }) {
  return <span className="mb-3">{children}</span>;
}

CardParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardAction({ children, isPending, onClick }) {
  return (
    <div className="pt-6">
      <button
        className={`btn btn-primary ${isPending ? 'loading' : ''}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  isPending: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export function CardAddress({ children, label }) {
  return (
    <div className="pt-6">
      <div>{label}</div>
      <span>{children}</span>
    </div>
  );
}

CardAddress.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Card;
