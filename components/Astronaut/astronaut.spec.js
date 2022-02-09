require('jest-canvas-mock');
import Astronaut from './';
import { REGULAR_LOTTIE_DIMENSIONS } from './constants';
import { render } from '@testing-library/react';

describe('Test Astronaut component', () => {
  beforeEach(() => {
    window.innerWidth = 1000;
  });
  it('should have correct lottie width', () => {
    const { getByLabelText } = render(<Astronaut />);
    expect(getByLabelText('animation')).toHaveStyle(
      `width: ${REGULAR_LOTTIE_DIMENSIONS}px`
    );
  });
});
