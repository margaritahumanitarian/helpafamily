import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col mb-5 space-y-5 text-center">
      <span>
        {
          'Margarita Humanitarian Foundation is a 501(c)(3) nonprofit registered in the US.'
        }
      </span>
      <div className="flex justify-center items-center cursor-pointer">
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
