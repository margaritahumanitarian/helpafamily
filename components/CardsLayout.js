import Image from 'next/image';
import React from 'react';

export default function CardsLayout({ children, description }) {
  return (
    <div className="w-full py-20 relative ">
      <h2 className="pb-20 text-3xl md:text-4xl z-10 text-center">
        {description}
      </h2>
      <div className="width-full absolute top-0 left-0 h-full w-full z-0">
        <Image alt="vector-background" layout="fill" src="/images/BG.png" />
      </div>
      <div className="flex overflow-x-scroll no-scrollbar p-12">{children}</div>
    </div>
  );
}
