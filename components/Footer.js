import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="m-5">
        {
          'Margarita Humanitarian Foundation is a 501(c)(3) nonprofit registered in the US.'
        }
      </p>
      <p>
        <a href="https://vercel.com?utm_source=margaritahumanitarian&utm_campaign=oss">
          <Image
            alt="Powered by vercel"
            height="44"
            src="/images/powered-by-vercel.svg"
            width="212"
          ></Image>
        </a>
      </p>
    </footer>
  );
}
