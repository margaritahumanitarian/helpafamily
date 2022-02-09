import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { REGULAR_LOTTIE_DIMENSIONS } from './constants';
import animationData from '../../lotties/astronaut.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Astronaut() {
  const [dimensions, setDimensions] = useState(REGULAR_LOTTIE_DIMENSIONS);
  const [isInitialMobileCheck, setIsInitialMobileCheck] = useState(true);

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const getDimensions = (isMobileSize) => {
    return isMobileSize ? '100%' : REGULAR_LOTTIE_DIMENSIONS;
  };

  useEffect(() => {
    if (isInitialMobileCheck) {
      setDimensions(getDimensions(isMobile()));
      setIsInitialMobileCheck(false);

      window.addEventListener('resize', () => {
        setDimensions(getDimensions(isMobile()));
      });
    }
  }, [isInitialMobileCheck]);

  return (
    <Lottie height={dimensions} options={defaultOptions} width={dimensions} />
  );
}
