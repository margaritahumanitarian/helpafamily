import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-center">
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
        </div>
      </div>
      <div className="flex-none hidden sm:flex">
        {'Help Families in Need'}
        <button className="btn btn-square btn-ghost" type="button">
          <svg
            className="inline-block w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none hidden sm:flex">
        <button className="btn btn-square btn-ghost" type="button">
          <svg
            className="inline-block w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
