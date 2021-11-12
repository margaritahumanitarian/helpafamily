import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React, { useRef } from 'react';
import SVGCardBackground from './SVGCardBackground';
import { usePosition } from 'hooks/usePosition';

export default function CardsLayout({ children, description }) {
  const ref = useRef();
  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);
  return (
    <div className="w-full py-20 relative ">
      <h2 className="pb-20 text-3xl md:text-4xl z-10 text-center">
        {description}
      </h2>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden flex justify-center items-center z-0">
        <SVGCardBackground />
      </div>
      <button
        aria-label="move right"
        className={`btn btn-accent rounded-sm btn-size absolute right-4 top-1/2  z-50 ${
          !hasItemsOnRight && 'hidden'
        }`}
        // todo: -translate-y-1/2 this also we need to add to make it vertically center
        // disabled={isPending ? true : false}
        onClick={scrollRight}
        type="button"
      >
        <AiOutlineRight />
      </button>
      <button
        aria-label="move left"
        className={`btn btn-accent rounded-sm btn-size absolute left-4 top-1/2 z-50 ${
          !hasItemsOnLeft && 'hidden'
        }`}
        // todo: -translate-y-1/2 this also we need to add to make it vertically center
        // disabled={isPending ? true : false}
        onClick={scrollLeft}
        type="button"
      >
        <AiOutlineLeft />
      </button>
      <div
        className="flex overflow-x-scroll no-scrollbar p-12 relative"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}
