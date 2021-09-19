import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainDonationForm from '@components/MainDonationForm';

const mockHandleSubmit = jest.fn();

jest.mock('../../hooks/useStripeSession', () => ({
  __esModule: true,
  default: () => [mockHandleSubmit, false],
}));

describe('MainDonationForm', () => {
  let portalRoot = document.getElementById('modal-root');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(portalRoot);
  }

  beforeEach(() => {
    mockHandleSubmit.mockReset();
    render(<MainDonationForm />);
  });

  it('should render toggle switch, dropdown select combo box, and bottom button', () => {
    expect(
      screen.getByRole('checkbox', { name: /anyone in need/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /donate/i })).toBeInTheDocument();
  });

  it('should show error dialog if the form is submitted without an amount selected', () => {
    const errorMessage = 'Please choose an amount to give';
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /donate/i }));
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
    expect(mockHandleSubmit).not.toBeCalled();
  });

  it('should not show an error when the form is submitted with an amount correctly selected', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), ['5']);
    userEvent.click(screen.getByRole('button', { name: /donate/i }));
    expect(mockHandleSubmit).toBeCalledWith({
      amount: '5',
      cause: 'Anyone in Need',
    });
  });

  it('should show checkboxes if switch is off', () => {
    expect(
      screen.getByRole('checkbox', { name: /anyone in need/i })
    ).toBeChecked();
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    userEvent.click(screen.getByRole('checkbox', { name: /anyone in need/i }));
    expect(
      screen.getByRole('checkbox', { name: /anyone in need/i })
    ).not.toBeChecked();
    expect(screen.getAllByRole('checkbox')).toHaveLength(5);
  });

  it('should submit selected amount and cause', () => {
    userEvent.click(screen.getByRole('checkbox', { name: /anyone in need/i }));
    userEvent.click(
      screen.getByRole('checkbox', { name: /students in need/i })
    );
    userEvent.click(screen.getByRole('checkbox', { name: /seniors in need/i }));
    userEvent.selectOptions(screen.getByRole('combobox'), ['5']);
    userEvent.click(screen.getByRole('button', { name: /donate/i }));
    expect(mockHandleSubmit).toBeCalledWith({
      amount: '5',
      cause: 'Students in Need, Seniors in Need',
    });
  });
});
