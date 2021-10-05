import Link from 'next/link';
import React from 'react';

import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-center sticky top-0 z-50">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">
          {'Margarita Humanitarian Foundation'}
        </span>
      </div>
      <div className="flex-1 px-2 mx-2 hidden md:flex">
        <div className="items-stretch hidden lg:flex">
          <Link href="/">
            <a className="nav-link">{'Home'}</a>
          </Link>
          <Link href="/in-kind">
            <a className="nav-link">{'In-Kind'}</a>
          </Link>
          <Link href="/fund">
            <a className="nav-link">{'Fund'}</a>
          </Link>
          <Link href="/give-your-time">
            <a className="nav-link">{'Give Your Time'}</a>
          </Link>
          <Link href="/partner-with-us">
            <a className="nav-link">{'Partner With Us'}</a>
          </Link>
        </div>
      </div>
      <div className="flex-none hidden sm:flex">
        {'Help Families in Need'}
        <button className="nav-btn" type="button">
          <FaRegHeart className="nav-icon" />
        </button>
      </div>
      <div className="flex-none hidden sm:flex">
        <button className="nav-btn" type="button">
          <BsSearch className="nav-icon" />
        </button>
      </div>
    </div>
  );
}
