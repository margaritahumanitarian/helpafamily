import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import { isAvailable } from 'utils/isAvailable';
import { useContextTheme } from 'components/ThemeContext';
import useStripeSession from 'hooks/useStripeSession';
// test
function Card({
  backgroundImageSource,
  backgroundImageAltText,
  title,
  paragraphs,
  cause,
  action,
  // address,
  actionCost,
  isExternal,
  simulateHover,
  link,
  listLabel,
  listItems,
}) {
  const { cardsBackgroundColor, textColor } = useContextTheme();
  return (
    <div className="group card flex rounded-md overflow-hidden ml-8 duration-500 z-10 md:hover:scale-110">
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
        className={`card-body flex flex-col p-6 shadow-lg justify-start items-center ${cardsBackgroundColor} ${textColor}`}
      >
        <CardTitle>{title}</CardTitle>
        <hr
          className={`h-1 bg-teal-medium border-none text-teal-medium transition-width transform duration-500 ease-in-out ${
            simulateHover ? 'w-full' : 'w-0'
          } my-1 group-hover:w-full`}
        />
        <div className="flex-1 font-normal leading-5 px-6">
          {paragraphs?.slice(0, 1)?.map((paragraph, index) => (
            <CardParagraph key={index}>
              {paragraph?.length > 170
                ? `${paragraph.slice(0, 170)}...`
                : paragraph}
            </CardParagraph>
          ))}
          {listLabel && (
            <PositionRequirements items={listItems} label={listLabel} />
          )}
        </div>
        {/* not a good practice to use index as key will change later */}
        {/* {address && <CardAddress>{address}</CardAddress>}*/}
        {action && (
          <CardAction
            actionCost={actionCost}
            cause={cause}
            isExternal={isExternal}
            link={link}
            simulateHover={simulateHover}
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
        .card {
          min-width: 327px;
          max-width: 350px;
          min-height: 503px;
          border-radius: 12px;
        }
        .card-body {
          font-size: 14px;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }
      `}</style>
    </div>
  );
}

export function CardTitle({ children }) {
  const { cardsBackgroundColor } = useContextTheme();
  return (
    <span
      className={`card-title w-full text-center m-0 ${cardsBackgroundColor}`}
    >
      {children}
    </span>
  );
}

export function CardParagraph({ children }) {
  return <p data-testid="card-paragraph-test">{children}</p>;
}

export function CardAction({
  children,
  cardStyle,
  actionCost,
  cause,
  isExternal,
  link,
  simulateHover,
}) {
  const [handleSubmit, isPending] = useStripeSession();
  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: cause,
    });
  return (
    <div
      className={`pt-5 ${
        simulateHover ? 'flex' : 'hidden'
      } transition-display transform duration-1500 ease-in-out group-hover:flex ${cardStyle} `}
    >
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

export function CardAddress({ children, label }) {
  return (
    <div className="shaded-text mt-2 text-center shadow-md">
      <div className="font-semibold">{label}</div>
      <span>{children}</span>
    </div>
  );
}

export function PositionRequirements({ label, items }) {
  return (
    <div className="p-2 mt-3 shaded-text">
      <span className="font-semibold">{label}</span>
      <ul className="list-disc text-left pl-6">
        {items.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
