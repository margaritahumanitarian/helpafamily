require('jest-canvas-mock');
import { render, screen } from '@testing-library/react';
import Astronaut from './';
import { REGULAR_LOTTIE_DIMENSIONS } from './constants';

describe('Test Astronaut component', () => {
  beforeEach(() => {
    window.innerWidth = 1000;
  });
  it('should have correct lottie width', () => {
    const { getByLabelText } = render(<Astronaut />);
    screen.debug();
    expect(getByLabelText('animation')).toHaveStyle(
      `width: ${REGULAR_LOTTIE_DIMENSIONS}px`
    );
  });
});
