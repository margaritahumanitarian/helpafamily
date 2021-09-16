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

  it('should render switch, select and button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should show error dialog if amount not selected', () => {
    const errorMessage = 'Please choose an amount to give';
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
    expect(mockHandleSubmit).not.toBeCalled();
  });

  it('should not show error when amount selected and submit the form', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), ['5']);
    userEvent.click(screen.getByRole('button'));
    expect(mockHandleSubmit).toBeCalledWith({
      amount: '5',
      cause: 'Anyone in Need',
    });
  });

  it('should show checkboxes if switch is off', () => {
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getAllByRole('checkbox')).toHaveLength(5);
  });

  it('should submit selected amount and cause', () => {
    userEvent.click(screen.getByRole('checkbox'));
    userEvent.click(screen.getByLabelText('Students in Need'));
    userEvent.click(screen.getByLabelText('Seniors in Need'));
    userEvent.selectOptions(screen.getByRole('combobox'), ['5']);
    userEvent.click(screen.getByRole('button'));
    expect(mockHandleSubmit).toBeCalledWith({
      amount: '5',
      cause: 'Students in Need, Seniors in Need',
    });
  });
});
