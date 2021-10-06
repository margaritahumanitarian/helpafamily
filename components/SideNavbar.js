import Link from 'next/link';
import React from 'react';
import { Routes } from '../models/routes';

function SideNavbar({ show, setShow }) {
  return (
    <div
      className={`${
        show ? 'translate-x-0' : '-translate-x-full'
      } fixed h-screen bg-neutral text-neutral-content transform top-0 left-0 w-64 overflow-auto ease-in-out transition-all duration-300 z-30  lg:hidden`}
    >
      <div className="flex-1 justify-center px-2 mx-2 pt-20 ">
        <div
          className="flex flex-col item-start"
          onClick={() => setShow(false)}
        >
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
        <div className="absolute bottom-0 left-0 w-full text-center">
          {'Help Families in Need'}
        </div>
      </div>
    </div>
  );
}
export default SideNavbar;
