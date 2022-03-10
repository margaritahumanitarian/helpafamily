import Link from 'next/link';
import React from 'react';
import { Routes } from '../models/routes';
import { useState } from 'react';

function SideNavbar({ show, setShow }) {
  const hideMenu = () => setShow(false);

  const [ActiveLinkRef, setActiveLinkRef] = useState();

  return (
    <div
      className={`${
        show ? 'translate-x-0' : '-translate-x-full'
      } fixed h-screen bg-neutral text-neutral-content transform top-0 left-0 w-64 overflow-auto ease-in-out transition-all duration-300 z-30  lg:hidden`}
    >
      <div className="flex-1 justify-center px-2 mx-2 pt-20 ">
        <div
          className="flex flex-col item-start"
          onClick={hideMenu}
          onKeyUp={hideMenu}
          role="none"
        >
          <Link href="/" passHref>
            <a
              className="side-nav-btn"
              href="home"
              onMouseEnter={() => setActiveLinkRef(1)}
              onMouseOut={() => setActiveLinkRef()}
            >
              {'Home'}
            </a>
          </Link>
          <Link href={Routes.InKind} passHref>
            <a
              className="side-nav-btn mt-4"
              href="inkind"
              onMouseEnter={() => setActiveLinkRef(2)}
              onMouseOut={() => setActiveLinkRef()}
            >
              {'In-Kind'}
            </a>
          </Link>
          <Link href={Routes.Fund} passHref>
            <a
              className="side-nav-btn mt-4"
              href="fund"
              onMouseEnter={() => setActiveLinkRef(3)}
              onMouseOut={() => setActiveLinkRef()}
            >
              {'Fund'}
            </a>
          </Link>
          <Link href={Routes.GiveYourTime} passHref>
            <a
              className="side-nav-btn mt-4"
              href="giveyourtime"
              onMouseEnter={() => setActiveLinkRef(4)}
              onMouseOut={() => setActiveLinkRef()}
            >
              {'Give Your Time'}
            </a>
          </Link>
          <Link href={Routes.PartnerWithUs} passHref>
            <a
              className="side-nav-btn mt-4"
              href="partnerwithus"
              onMouseEnter={() => setActiveLinkRef(5)}
              onMouseOut={() => setActiveLinkRef()}
            >
              {'Partner With Us'}
            </a>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center mb-2">
          {'Help Families in Need'}
        </div>
      </div>
      <style jsx>
        {`
          a:nth-child(${ActiveLinkRef}) {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}

export default SideNavbar;
