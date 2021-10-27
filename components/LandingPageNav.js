// @ts-check
import { useEffect, useState } from 'react';
// import { BsSearch } from 'react-icons/bs';
// import { Routes } from '../models/routes';
import { FaRegHeart } from 'react-icons/fa';

/**
 * ### Landing Page Nav Bar
 * This component is used to create the nav bar for the landing page which has opacity and fade in options to work in conjunction with the `LargeHeroSection` component.
 *
 * fadeInSpeed - change the speed of fade in "ease-in duration-`fadeInSpeed`" | Example: `"700"` : [tailwind durations](https://tailwindcss.com/docs/transition-duration)
 *
 * @param {Object} props - { fadeInSpeed }
 * @param {String} [props.fadeInSpeed = '700' ] - change the speed of fade in "ease-in duration-`fadeInSpeed`" | Example: `"700"` : [tailwind durations](https://tailwindcss.com/docs/transition-duration)
 * @returns {JSX.Element} JSX
 */
const LandingPageNav = ({ fadeInSpeed = '1000' }) => {
  const [navOpacity, setnavOpacity] = useState(0);
  useEffect(() => {
    setnavOpacity(100);
  }, []);
  return (
    <div
      className={`fixed h-20 nav-bar mb-2 shadow-lg text-neutral-content flex justify-between items-center top-0 left-0 right-0 z-50 opacity-${navOpacity} ease-in duration-${fadeInSpeed}`}
    >
      <div className="flex-none px-6 mx-2">
        <span className="text-lg font-bold">
          {'Margarita Humanitarian Foundation'}
        </span>
      </div>
      {/* <div className="px-2 mx-2 hidden md:flex flex-grow "> */}
      {/* <div className="items-stretch hidden lg:flex">
              <Link href={Routes.Home}>
                <a className="btn btn-ghost btn-sm rounded-btn">{'Home'}</a>
              </Link>
              <Link href={Routes.InKind}>
                <a className="btn btn-ghost btn-sm rounded-btn">{'In-Kind'}</a>
              </Link>
              <Link href=={Routes.Fund}>
                <a className="btn btn-ghost btn-sm rounded-btn">{'Fund'}</a>
              </Link>
              <Link href={Routes.GiveYourTime}>
                <a className="btn btn-ghost btn-sm rounded-btn">
                  {'Give Your Time'}
                </a>
              </Link>
              <Link href={Routes.PartnerWithUs}>
                <a className="btn btn-ghost btn-sm rounded-btn">
                  {'Partner With Us'}
                </a>
              </Link>
            </div> */}
      {/* </div> */}
      <div className="flex items-center">
        <div className="pr-7 hidden md:block">{' Help Families in Need'}</div>
        <div className="flex-row hidden sm:flex">
          <button
            aria-label="favorite-btn"
            className="nav-btn pr-6"
            type="button"
          >
            <FaRegHeart className="nav-icon" />
          </button>
        </div>
      </div>

      {/* <div className="flex-none hidden sm:flex">
            <button aria-label="search-btn" className="nav-btn" type="button">
              <BsSearch className="nav-icon" />
            </button>
          </div> */}
    </div>
  );
};

export default LandingPageNav;
