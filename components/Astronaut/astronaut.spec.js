require('jest-canvas-mock');
import Astronaut from './';
import { REGULAR_LOTTIE_DIMENSIONS } from './constants';
import { render } from '@testing-library/react';

describe('Test Astronaut component', () => {
  it('should have correct lottie width', () => {
    window.innerWidth = 1000;
    const { getByLabelText } = render(<Astronaut />);
    expect(getByLabelText('animation')).toHaveStyle(
      `width: ${REGULAR_LOTTIE_DIMENSIONS}px`
    );
  });
  it('should have correct lottie width when resized to mobile screen', () => {
    window.innerWidth = 400;
    const { getByLabelText } = render(<Astronaut />);
    expect(getByLabelText('animation')).toHaveStyle('width: 100%');
  });
});
