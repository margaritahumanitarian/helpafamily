import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

function Card({ backgroundImageSource, backgroundImageAltText, children }) {
  return (
    <div className="card filter brightness-105 shadow-xl  style={{
        boxShadow:
          'rgba(14, 30, 37, 0.1) 0px 0px 4px 0px, rgba(14, 30, 37, 0.15) 0px 0px 16px 0px;',
      }}">
      {backgroundImageSource && (
        <figure>
          <Image
            alt={backgroundImageAltText}
            height="280"
            layout="responsive"
            src={backgroundImageSource}
            width="350"
          />
        </figure>
      )}
      <div className="card-body space-y-3">{children}</div>
    </div>
  );
}

Card.propTypes = {
  backgroundImageSource: PropTypes.string,
  backgroundImageAltText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
  return <span className="card-title m-0">{children}</span>;
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardParagraph({ children }) {
  return <span>{children}</span>;
}

CardParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardAction({ children, linkTo, isPending, onClick }) {
  return (
    <div className="pt-5" style={{ marginTop: 'auto' }}>
      {linkTo ? (
        <a className="btn btn-accent" href={linkTo}>
          {children}
        </a>
      ) : (
        <button
          className={clsx('btn btn-accent w-full h-auto', {
            loading: isPending,
          })}
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      )}
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  isPending: PropTypes.bool,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
};

export function CardAddress({ children, label }) {
  return (
    <div className="shaded-text my-auto">
      <div className="font-semibold">{label}</div>
      <span>{children}</span>
    </div>
  );
}

CardAddress.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export function PositionRequirements({ label, children }) {
  return (
    <div className="p-2 mt-auto shaded-text">
      <span className="font-semibold">{label}</span>
      <ul className="list-disc text-left pl-6">
        {children.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

PositionRequirements.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
