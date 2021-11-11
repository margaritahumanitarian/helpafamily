import React, { useEffect, useState } from 'react';

function ScrollIndicator({ count, target }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const renderDots = () => {
    const selectedDotValue = (scrollProgress * count) / 100;
    return [...Array(count).keys()].map((index) => (
      <div
        active={selectedDotValue >= index && selectedDotValue <= index + 1}
        className="h-3 w-3 rounded-full bg-black"
        key={index}
      />
    ));
  };
  useEffect(() => {
    target.current.addEventListener('touchmove', scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener('touchmove', scrollListener);
  });
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }

    if (windowScroll > totalWidth) {
      return setScrollProgress(100);
    }

    setScrollProgress((windowScroll / totalWidth) * 100);
  };
  return <div className="flex flex-row justify-center">{renderDots()}</div>;
}

export default ScrollIndicator;
