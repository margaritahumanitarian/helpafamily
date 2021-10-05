import Link from 'next/link';
import React from 'react';

import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

import SideNavbar from './SideNavbar';

export default function Navbar() {
  const [showSideNav, setShowSideNav] = React.useState(false);
  return (
    <>
      <SideNavbar setShow={setShowSideNav} show={showSideNav} />
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-center sticky top-0 z-50 lg:space-between">
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
          <span className="text-sm font-bold ml-4  sm:text-lg">
            {'Margarita Humanitarian Foundation'}
          </span>
        </div>
        <div className="flex-auto px-2 mx-2 hidden lg:flex">
          <div className="items-stretch hidden lg:flex">
            <Link href="/">
              <a className="btn btn-ghost btn-sm rounded-btn">{'Home'}</a>
            </Link>
            <Link href="/in-kind">
              <a className="btn btn-ghost btn-sm rounded-btn">{'In-Kind'}</a>
            </Link>
            <Link href="/fund">
              <a className="btn btn-ghost btn-sm rounded-btn">{'Fund'}</a>
            </Link>
            <Link href="/give-your-time">
              <a className="btn btn-ghost btn-sm rounded-btn">
                {'Give Your Time'}
              </a>
            </Link>
            <Link href="/partner-with-us">
              <a className="btn btn-ghost btn-sm rounded-btn">
                {'Partner With Us'}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-none hidden sm:flex lg:hidden xl:flex">
          {'Help Families in Need'}
          <button className="btn btn-square btn-ghost" type="button">
            <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
          </button>
        </div>
        <div className="flex-none hidden sm:flex">
          <button className="btn btn-square btn-ghost" type="button">
            <BsSearch className="inline-block w-5 h-5 stroke-current" />
          </button>
        </div>
      </div>
    </>
  );
}
