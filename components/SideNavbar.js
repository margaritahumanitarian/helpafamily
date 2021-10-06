import Link from 'next/link';
import React from 'react';
import { Routes } from '../models/routes';

function SideNavbar({ show, setShow }) {
  const hideMenu = () => setShow(false);

  return (
    <div
      className={`${
        show ? 'translate-x-0' : '-translate-x-full'
      } fixed h-screen bg-neutral text-neutral-content transform top-0 left-0 w-64 overflow-auto ease-in-out transition-all duration-300 z-30  lg:hidden`}
    >
      <div className="flex-1 justify-center px-2 mx-2 pt-20 ">
        <div className="flex flex-col item-start" onClick={hideMenu}>
          <Link href="/">
            <a className="side-nav-btn">{'Home'}</a>
          </Link>
          <Link href={Routes.InKind}>
            <a className="side-nav-btn">{'In-Kind'}</a>
          </Link>
          <Link href={Routes.Fund}>
            <a className="side-nav-btn">{'Fund'}</a>
          </Link>
          <Link href={Routes.GiveYourTime}>
            <a className="side-nav-btn">{'Give Your Time'}</a>
          </Link>
          <Link href={Routes.PartnerWithUs}>
            <a className="side-nav-btn">{'Partner With Us'}</a>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center mb-2">
          {'Help Families in Need'}
        </div>
      </div>
    </div>
  );
}
export default SideNavbar;
