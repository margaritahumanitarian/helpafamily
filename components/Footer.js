import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 grid md:flex bg-neutral text-neutral-content">
      <div className="flex flex-col md:flex-row md:flex-auto items-center md:mr-4 mb-4 md:mb-0">
        <div className="mb-2 md:mb-0">
          <Image
            alt="mhf logo"
            height="120"
            src="/images/MHF-Color-300x300.png"
            width="120"
          />
        </div>
        <div className="pl-4">
          {
            'Margarita Humanitarian Foundation is a 501(c)(3) non-profit organization that provides humanitarian aid to families in need.'
          }
        </div>
      </div>
      <div className="flex md:flex-initial items-center justify-center md:ml-auto">
        <a
          className="mr-4 mt-2"
          href="https://vercel.com?utm_source=margaritahumanitarian&utm_campaign=oss"
        >
          <Image
            alt="Powered by Vercel"
            height="44"
            src="/images/powered-by-vercel.svg"
            width="212"
          />
        </a>
        <a
          href="https://www.guidestar.org/profile/84-4323038"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="GuideStar Seal of Transparency"
            height="80"
            src="/images/GuideStarSeal.svg"
            width="80"
          />
        </a>
      </div>
    </footer>
  );
}
