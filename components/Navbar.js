import Link from 'next/link';

import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import React from 'react';
import { Routes } from '../models/routes';
import SideNavbar from './SideNavbar';
import { useContextTheme } from 'components/ThemeContext';

export default function Navbar() {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const themes = useContextTheme();
  const changeTheme = () => {
    themes.toggleTheme();
  };
  return (
    <>
      <SideNavbar setShow={setShowSideNav} show={showSideNav} />
      <div
        className={`navbar mb-2 shadow-lg ${
          themes.backgroundColor === 'bg-gray-900'
            ? themes.cardsBackgroundColor
            : 'bg-neutral'
        } text-neutral-content justify-center sticky top-0 z-50 lg:space-between`}
      >
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
        <div className="flex flex-auto justify-center px-2 mx-2">
          <Link
            className="text-sm font-bold ml-4 sm:text-lg"
            href={Routes.Home}
          >
            {'Margarita Humanitarian Foundation'}
          </Link>
        </div>
        <div className="flex-auto px-2 mx-2 hidden lg:flex">
          <div className="items-stretch hidden lg:flex">
            <Link href={Routes.Home}>
              <a className="btn btn-ghost btn-sm rounded-btn">{'Home'}</a>
            </Link>
            <Link href={Routes.InKind}>
              <a className="btn btn-ghost btn-sm rounded-btn">{'In-Kind'}</a>
            </Link>
            <Link href={Routes.Fund}>
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
          </div>
        </div>
        <div className="flex-none hidden sm:flex lg:hidden xl:flex">
          <Link href={Routes.Fund}>{'Help Families in Need'}</Link>
          <Link href={Routes.InKind}>
            <a className="btn btn-square btn-ghost">
              <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
            </a>
          </Link>
        </div>
        <div className="flex-none hidden sm:flex">
          <button className="btn btn-square btn-ghost" type="button">
            <BsSearch className="inline-block w-5 h-5 stroke-current" />
          </button>
        </div>

        <button className="btn btn-square btn-ghost" type="button">
          <FaRegMoon
            className="inline-block w-5 h-4 stroke-current"
            onClick={changeTheme}
          />
        </button>
      </div>
    </>
  );
}
