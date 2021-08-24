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
      <a href="https://vercel.com?utm_source=margaritahumanitarian&utm_campaign=oss">
        <Image
          alt="Powered by Vercel"
          height="44"
          src="/images/powered-by-vercel.svg"
          width="212"
        />
      </a>
    </footer>
  );
}
