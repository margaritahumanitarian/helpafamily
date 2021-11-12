import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { isAvailable } from 'utils/isAvailable';
import { useContextTheme } from 'components/ThemeContext';
import useStripeSession from 'hooks/useStripeSession';

function Card({
  backgroundImageSource,
  backgroundImageAltText,
  title,
  paragraphs,
  cause,
  action,
  address,
  actionCost,
  isExternal,
  link,
}) {
  const { cardsBackgroundColor, textColor } = useContextTheme();
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className="carousel-card rounded-md overflow-hidden ml-8 hover:scale-110 duration-500  z-10"
      onMouseLeave={() => setIsHover(false)}
      onMouseOver={() => setIsHover(true)}
    >
      {backgroundImageSource && (
        <figure>
          <Image
            alt={backgroundImageAltText}
            height="280"
            layout="responsive"
            objectFit="cover"
            src={backgroundImageSource}
            width="400"
          />
        </figure>
      )}
      <div
        className={`carousel-body flex flex-col p-6 shadow-lg justify-start items-center ${cardsBackgroundColor} text-${textColor} rounded-b-md auto-rows-card`}
      >
        <CardTitle>{title}</CardTitle>
        <hr
          className={`h-1  bg-teal-medium border-none text-teal-medium duration-200 ${
            isHover && 'w-full my-1'
          }`}
        />
        {paragraphs.map((paragraph, index) => (
          <CardParagraph key={index}>{paragraph}</CardParagraph>
        ))}
        {/* not a good practice to use index as key will change later */}
        {address && <CardAddress>{address}</CardAddress>}
        {isHover && action && (
          <CardAction
            actionCost={actionCost}
            cause={cause}
            isExternal={isExternal}
            link={link}
          >
            {action} {isAvailable(actionCost) && `$${actionCost.toString()}`}
          </CardAction>
        )}
      </div>
      <style jsx>{`
        .card-shadow {
          box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
            rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
        }
        .carousel-card {
          min-width: 300px;
        }
        .carousel-body {
          min-height: 300px;
        }
      `}</style>
    </div>
  );
}

export function CardTitle({ children }) {
  const { cardsBackgroundColor } = useContextTheme();
  return (
    <span className={`card-title w-full text-left m-0 ${cardsBackgroundColor}`}>
      {children}
    </span>
  );
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

export function CardAction({
  children,
  cardStyle,
  actionCost,
  cause,
  isExternal,
  link,
}) {
  const [handleSubmit, isPending] = useStripeSession();
  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: cause,
    });
  return (
    <div className={`pt-5 ${cardStyle} `}>
      {isExternal ? (
        <a className="btn btn-accent" href={link}>
          {children}
        </a>
      ) : (
        <button
          aria-label="Card Action"
          className={clsx('btn btn-accent shadow-md w-full h-auto', {
            loading: isPending,
          })}
          onClick={handleOnClick}
          type="button"
        >
          {!isPending && children}
        </button>
      )}
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  linkTo: PropTypes.string,
  style: PropTypes.string,
};

export function CardAddress({ children, label }) {
  return (
    <div className="shaded-text mt-2 text-center shadow-md">
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
        {React.Children.map(children, (listItem) => (
          <li>{listItem}</li>
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
