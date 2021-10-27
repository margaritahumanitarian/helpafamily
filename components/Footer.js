import Image from 'next/image';
import React from 'react';
import { useContextTheme } from 'components/ThemeContext';
export default function Footer() {
  const { theme, cardsBackgroundColor } = useContextTheme();

  const LineItem = ({ title, link }) => (
    <li className="mt-2 text-gray-300 md:block md:mr-0">
      {link ? (
        <a className="no-underline hover:text-teal-light" href={link || '#'}>
          {title}
        </a>
      ) : (
        title
      )}
    </li>
  );
  return (
    <footer
      className={`flex flex-col items-center ${
        theme === 'dark' ? cardsBackgroundColor : 'bg-neutral'
      } text-neutral-content`}
      style={{ background: '#3D4452' }}
    >
      <div className="flex flex-col justify-between w-11/12 max-w-screen-xl py-7 px-10 sm:flex-row sm:px-0 ">
        <div className="hidden px-4 sm:flex">
          <Image
            alt="mhf logo"
            className="object-contain"
            height="120"
            src="/images/MHF-Color-300x300.png"
            width="120"
          />
        </div>
        <div className="flex flex-col mt-2 px-4  sm:mt-0">
          <p className="uppercase font-bold text-gray-100 md:mb-2">
            {'Contact'}
          </p>
          <ul className="list-reset mb-2  sm:text-left">
            <LineItem title={'661-526-5236'} />
            <LineItem
              link="mailto:hi@margaritahumanitarian.org"
              title="hi@margaritahumanitarian.org"
            />
            <LineItem
              title={
                <>
                  {'1543 E Palmdale Blvd,'}
                  <br /> {'Suite E. Palmdale,'}
                  <br /> {'CA 93550'}
                </>
              }
            />
          </ul>
        </div>

        <div className="flex flex-col mt-4 px-4 sm:mt-0 sm:items-baseline">
          <p className="uppercase font-bold text-gray-100 md:mb-1">
            {'Programs'}
          </p>
          <ul className="list-reset mb-2 sm:text-left">
            <LineItem link="#" title="Laptops for Families" />
            <LineItem link="#" title="Hot Meal Day" />
            <LineItem link="#" title="Humanitarian Clinic" />
            <LineItem link="#" title="Fall Prevention Class" />
            <LineItem link="#" title="Food Distribution Support" />
            <LineItem link="#" title="Health Education Workshop" />
          </ul>
        </div>
        <div className="hidden item-center px-4 sm:flex flex-col ">
          <p className="uppercase text-center font-bold text-gray-100 md:mb-1">
            {'Guide Star'}
          </p>
          <a
            className="mt-2"
            href="https://www.guidestar.org/profile/84-4323038"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="GuideStar Seal of Transparency"
              height="100"
              src="/images/GuideStarSeal.svg"
              width="100"
            />
          </a>
        </div>
      </div>
      <div className="min-w-full">
        <div className="hidden sm:flex">
          <svg
            id="wave"
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,10L18.5,11.7C36.9,13,74,17,111,28.3C147.7,40,185,60,222,60C258.5,60,295,40,332,28.3C369.2,17,406,13,443,11.7C480,10,517,10,554,23.3C590.8,37,628,63,665,66.7C701.5,70,738,50,775,46.7C812.3,43,849,57,886,53.3C923.1,50,960,30,997,23.3C1033.8,17,1071,23,1108,21.7C1144.6,20,1182,10,1218,6.7C1255.4,3,1292,7,1329,16.7C1366.2,27,1403,43,1440,51.7C1476.9,60,1514,60,1551,65C1587.7,70,1625,80,1662,80C1698.5,80,1735,70,1772,55C1809.2,40,1846,20,1883,13.3C1920,7,1957,13,1994,18.3C2030.8,23,2068,27,2105,30C2141.5,33,2178,37,2215,38.3C2252.3,40,2289,40,2326,40C2363.1,40,2400,40,2437,45C2473.8,50,2511,60,2548,65C2584.6,70,2622,70,2640,70L2658.5,70L2658.5,100L2640,100C2621.5,100,2585,100,2548,100C2510.8,100,2474,100,2437,100C2400,100,2363,100,2326,100C2289.2,100,2252,100,2215,100C2178.5,100,2142,100,2105,100C2067.7,100,2031,100,1994,100C1956.9,100,1920,100,1883,100C1846.2,100,1809,100,1772,100C1735.4,100,1698,100,1662,100C1624.6,100,1588,100,1551,100C1513.8,100,1477,100,1440,100C1403.1,100,1366,100,1329,100C1292.3,100,1255,100,1218,100C1181.5,100,1145,100,1108,100C1070.8,100,1034,100,997,100C960,100,923,100,886,100C849.2,100,812,100,775,100C738.5,100,702,100,665,100C627.7,100,591,100,554,100C516.9,100,480,100,443,100C406.2,100,369,100,332,100C295.4,100,258,100,222,100C184.6,100,148,100,111,100C73.8,100,37,100,18,100L0,100Z"
              fill="#97EFF4"
            />
          </svg>
        </div>
        <div className="sm:hidden">
          <svg
            height="110"
            preserveAspectRatio="none"
            viewBox="0 -20 700 110"
            width="100%"
          >
            <path
              d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
              fill="#97EFF4"
            />
          </svg>
        </div>
        <div
          className="flex flex-col bg-teal-light items-center text-gray-800 md:flex-auto md:mb-0"
          // style={{ background: '#97EFF4' }}
        >
          <div className="-mt-8 mb-4 flex flex-col sm:hidden ">
            <p className="uppercase text-center font-bold text-gray-800 md:mb-1">
              {'Guide Star'}
            </p>
            <a
              className="mt-2"
              href="https://www.guidestar.org/profile/84-4323038"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="GuideStar Seal of Transparency"
                height="100"
                src="/images/GuideStarSeal.svg"
                width="100"
              />
            </a>
          </div>
          <div className="w-9/12 hidden text-center sm:block ">
            {
              'Margarita Humanitarian Foundation is a 501(c)(3) non-profit organization that provides humanitarian aid to families in need.'
            }
          </div>
          <div className=" my-2">{`@copyright ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
