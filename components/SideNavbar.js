import Link from 'next/link';
import React from 'react';
import { Routes } from '../models/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';

function SideNavbar({ show, setShow }) {
  const hideMenu = () => setShow(false);

  const [HoverLinkRef, setHoverLinkRef] = useState();

  const router = useRouter();

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
              className={`side-nav-btn mt-4 ${
                router.pathname == '/' && HoverLinkRef != 1 && 'active'
              }`}
              href="home"
              onMouseEnter={() => setHoverLinkRef(1)}
              onMouseOut={() => setHoverLinkRef()}
            >
              {'Home'}
            </a>
          </Link>
          <Link href={Routes.InKind} passHref>
            <a
              className={`side-nav-btn mt-4 ${
                router.pathname == Routes.InKind &&
                HoverLinkRef != 2 &&
                'active'
              }`}
              href="inkind"
              onMouseEnter={() => setHoverLinkRef(2)}
              onMouseOut={() => setHoverLinkRef()}
            >
              {'In-Kind'}
            </a>
          </Link>
          <Link href={Routes.Fund} passHref>
            <a
              className={`side-nav-btn mt-4 ${
                router.pathname == Routes.Fund && HoverLinkRef != 3 && 'active'
              }`}
              href="fund"
              onMouseEnter={() => setHoverLinkRef(3)}
              onMouseOut={() => setHoverLinkRef()}
            >
              {'Fund'}
            </a>
          </Link>
          <Link href={Routes.GiveYourTime} passHref>
            <a
              className={`side-nav-btn mt-4 ${
                router.pathname == Routes.GiveYourTime &&
                HoverLinkRef != 4 &&
                'active'
              }`}
              href="giveyourtime"
              onMouseEnter={() => setHoverLinkRef(4)}
              onMouseOut={() => setHoverLinkRef()}
            >
              {'Give Your Time'}
            </a>
          </Link>
          <Link href={Routes.PartnerWithUs} passHref>
            <a
              className={`side-nav-btn mt-4 ${
                router.pathname == Routes.PartnerWithUs &&
                HoverLinkRef != 5 &&
                'active'
              }`}
              href="partnerwithus"
              onMouseEnter={() => setHoverLinkRef(5)}
              onMouseOut={() => setHoverLinkRef()}
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
          a:nth-child(${HoverLinkRef}) {
            transform: scale(1.1);
          }
          .active {
            background-color: rgb(54 62 75 / 0.6);
            border-color: rgb(50 56 64);
            border-width: 3px;
            border-style: solid;
            box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
          }
          .active:hover {
            background-color: rgb(54 62 75 / 1);
          }
        `}
      </style>
    </div>
  );
}

export default SideNavbar;
