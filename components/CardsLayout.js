import React from 'react';
import SVGCardBackground from './SVGCardBackground';

export default function CardsLayout({ children, description }) {
  return (
    <div className="w-full py-20 relative ">
      <h2 className="pb-20 text-3xl md:text-4xl z-10 text-center">
        {description}
      </h2>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden flex justify-center items-center z-0">
        <SVGCardBackground />
      </div>
      <div className="flex overflow-x-scroll no-scrollbar p-12">{children}</div>
    </div>
  );
}
