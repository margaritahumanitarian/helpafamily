import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainDonationForm from '@components/MainDonationForm';

describe('MainDonationForm', () => {
  let portalRoot = document.getElementById('modal-root');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(portalRoot);
  }

  // needed to separate this from __tests__/components/MainDonationForm.spec.js
  // so to replicate the form same as in homepage
  it('should display reset form when all causes are chosen in homepage', () => {
    const { getByRole, getByText } = render(<MainDonationForm inNeed />);
    userEvent.click(
      getByRole('checkbox', { name: /people of color in need/i })
    );
    userEvent.click(getByRole('checkbox', { name: /immigrants in need/i }));
    userEvent.click(getByRole('checkbox', { name: /students in need/i }));
    userEvent.click(getByRole('checkbox', { name: /seniors in need/i }));
    expect(getByText(/reset form/i)).toBeTruthy();
  });
});
