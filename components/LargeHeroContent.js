// @ts-check
// eslint-disable-next-line no-unused-vars
import { ReactElement, useEffect, useState } from 'react'; // ReactElement is only imported for typechecking
import PropTypes from 'prop-types';

/**
 * ## Large Hero Content
 * This is the call to action and content of the `LargeHeroSection` component.
 *
 * ### Modify using tailwind classes or css
 * - `titleSize` : "text-`titleSize`" | Example: `"5xl"` | [Tailwind text sizes](https://tailwindcss.com/docs/font-size)
 * - `mainTextSize` : "max-w-`mainSize`" | [Tailwind max-width sizes](https://tailwindcss.com/docs/max-width)
 *
 * @param {Object} props - { mainTextSize, title, titleSize, fadeInSpeed }
 * @param {String} [props.mainTextSize = 'md'] - change the size of main section "max-w-`mainSize`" | [Tailwind max-width sizes](https://tailwindcss.com/docs/max-width)
 * @param {String} [props.fadeInSpeed = '700'] - change the speed of fade in "duration-`fadeInSpeed`" | Example: `700"`
 * @param {String} props.title - The title of the hero section
 * @param {String} [props.titleSize = '5xl'] - "text-`titleSize`" | Example: `"5xl"` | [Tailwind text sizes](https://tailwindcss.com/docs/font-size)
 * @param {*} props.children - The content of the hero section
 * @returns {ReactElement} JSX
 */

const LargeHeroContent = ({
  children,
  fadeInSpeed = '1000',
  mainTextSize = 'md',
  title,
  titleSize = '5xl',
}) => {
  const [opacityAmount, setOpacityAmount] = useState(0);
  useEffect(() => {
    setOpacityAmount(1);
  }, []);
  return (
    <div
      className={`text-center hero-content text-neutral-content opacity-${opacityAmount} transition ease-in duration-${fadeInSpeed}`}
    >
      <div className={`max-w-${mainTextSize}`}>
        <h1 className={`mb-6 text-${titleSize} font-bold`}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

LargeHeroContent.propTypes = {
  children: PropTypes.node,
  fadeInSpeed: PropTypes.string,
  mainTextSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.string,
};

export default LargeHeroContent;
