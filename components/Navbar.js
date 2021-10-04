import Link from 'next/link';
import React from 'react';

import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function SideNav({ show, setShow }) {
  return (
    <div
      className={`${
        show ? 'flex' : 'hidden'
      } fixed h-screen top-0 left-0 shadow-lg bg-neutral text-neutral-content z-10 transition-all lg:hidden`}
    >
      <div className="flex-1 px-2 mx-2 pt-20 md:flex">
        <div
          className="flex flex-col item-start"
          onClick={() => setShow(false)}
        >
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
        <div className="absolute bottom-0 left-0 w-full text-center">
          {'Help Families in Need'}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showSideNav, setShowSideNav] = React.useState(false);
  return (
    <>
      <SideNav setShow={setShowSideNav} show={showSideNav} />
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-center sticky top-0 z-50">
        <button
          className=" btn-ghost flex  lg:hidden"
          onClick={() => setShowSideNav(!showSideNav)}
          type="button"
        >
          {showSideNav ? (
            <ImCross className="inline-block w-5 h-5 stroke-current " />
          ) : (
            <GiHamburgerMenu className="inline-block w-5 h-5 stroke-current " />
          )}
        </button>
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">
            {'Margarita Humanitarian Foundation'}
          </span>
        </div>
        <div className="flex-1 px-2 mx-2 hidden md:flex">
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
        <div className="flex-none hidden sm:flex">
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
