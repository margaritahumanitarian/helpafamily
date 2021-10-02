// @ts-check
// eslint-disable-next-line no-unused-vars
import { ReactElement, useEffect, useState } from 'react'; // ReactElement is only imported for typechecking
import PropTypes from 'prop-types';

/**
 * ## Large Hero Section
 * This component is the main `LargeHeroSection` component hosting the image.
 *
 * ### Modify using tailwind classes or css
 * - `opacity` : "bg-opacity-`opacity`" | Example: `"30"` | [Tailwind opacity](https://tailwindcss.com/docs/background-opacity)
 *
 * @param {Object} props - { bgImage, mainTextSize, opacity, title, titleSize }
 * @param {String} props.bgImage - Background image url
 * @param {String} [props.opacity = '60' ] "bg-opacity-`opacity`" | Example: `"30"` | [Tailwind opacity](https://tailwindcss.com/docs/background-opacity)
 * @param {*} props.children - Children elements
 * @returns {ReactElement} JSX
 */

const LargeHeroSection = ({ bgImage, children, opacity = '60' }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`hero-overlay bg-opacity-${opacity}`} />
      {children}
    </div>
  );
};

LargeHeroSection.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.string.isRequired,
  opacity: PropTypes.string,
};

export default LargeHeroSection;
