import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../ lotties/astronaut.json';

class AstronautLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie height={400} options={defaultOptions} width={400} />
      </div>
    );
  }
}

export default AstronautLottie;
