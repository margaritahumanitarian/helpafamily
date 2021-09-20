import Lottie from 'react-lottie';
import React from 'react';
import animationData from '../ lotties/astronaut.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function AstronautLottie() {
  return <Lottie height={400} options={defaultOptions} width={400} />;
}

export default AstronautLottie;
