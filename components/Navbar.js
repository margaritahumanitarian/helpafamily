import Link from 'next/link';
// eslint-disable-next-line sort-imports
import { FaRegHeart } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import Image from 'next/image';
import React from 'react';
import { Routes } from '../models/routes';
import SideNavbar from './SideNavbar';
import { useContextTheme } from 'components/ThemeContext';

export default function Navbar() {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const { toggleTheme, cardsBackgroundColor, theme } = useContextTheme();
  const handleThemeChange = () => {
    toggleTheme();
  };
  return (
    <>
      <SideNavbar setShow={setShowSideNav} show={showSideNav} />
      <div
        className={`navbar ${
          theme === 'dark' ? cardsBackgroundColor : 'bg-neutral'
        } text-neutral-content sticky top-0 z-50 shadow justify-center`}
      >
        <div className="nav-contents-container">
          <button
            className=" btn-ghost flex absolute left-3  lg:hidden"
            onClick={() => setShowSideNav(!showSideNav)}
            type="button"
          >
            {showSideNav ? (
              <ImCross className="inline-block w-5 h-5 stroke-current " />
            ) : (
              <GiHamburgerMenu className="inline-block w-5 h-5 stroke-current " />
            )}
          </button>
          <div className="flex flex-auto pl-8 lg:pl-0 mx-1 xs:text-lg justify-center md:justify-start">
            <div className="flex items-center hidden lg:flex">
              <Link className="" href={Routes.Home}>
                <a className="flex items-center lg:flex">
                  <Image
                    alt="mhf logo"
                    height="40"
                    src="/images/MHF-Color-300x300.png"
                    width="40"
                  />
                </a>
              </Link>
            </div>
            <Link
              className="text-sm font-bold ml-6 xs:text-xs sm:text-sm px-3"
              href={Routes.Home}
            >
              <a className="py-3 lg:px-5 hover:bg-gray-700 rounded ">
                {'Margarita Humanitarian Foundation'}
              </a>
            </Link>
          </div>
          <div className="flex-auto px-2 mx-2 hidden lg:flex">
            <div className="items-stretch hidden lg:flex">
              <Link href={Routes.Home}>
                <a className="p-3 hover:bg-gray-700 rounded ">{'Home'}</a>
              </Link>
              <Link href={Routes.InKind}>
                <a className="p-3 hover:bg-gray-700 rounded ">{'In-Kind'}</a>
              </Link>
              <Link href={Routes.Fund}>
                <a className="p-3 hover:bg-gray-700 rounded ">{'Fund'}</a>
              </Link>
              <Link href={Routes.GiveYourTime}>
                <a className="p-3 hover:bg-gray-700 rounded ">
                  {'Give Your Time'}
                </a>
              </Link>
              <Link href={Routes.PartnerWithUs}>
                <a className="p-3 hover:bg-gray-700 rounded ">
                  {'Partner With Us'}
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-none hidden sm:flex lg:hidden xl:flex">
            <Link href={Routes.Fund}>
              <a className="p-3 hover:bg-gray-700 rounded ">
                {'Help Families in Need'}
              </a>
            </Link>
            <Link href={Routes.InKind}>
              <a className="btn btn-square btn-ghost">
                <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
              </a>
            </Link>
          </div>
          <button
            className="btn btn-square btn-ghost"
            onClick={handleThemeChange}
            type="button"
          >
            {theme === 'dark' ? (
              <FiSun className="inline-block w-5 h-5 stroke-current" />
            ) : (
              <FaRegMoon className="inline-block w-5 h-4 stroke-current" />
            )}
          </button>
        </div>
      </div>
      <style jsx>{`
        .nav-contents-container {
          width: 100%;
          max-width: 1280px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
