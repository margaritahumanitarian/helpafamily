import ReCaptchaV2 from 'react-google-recaptcha';
import React from 'react';
import clsx from 'clsx';

import CheckboxFormControl from './form/CheckboxFormControl';
import Modal from './Modal';
import SelectFormControl from './form/SelectFormControl';
import useStripeSession from '../hooks/useStripeSession';

const AMOUNTS = [
  { value: 0, label: 'Choose your donation amount', disabled: true },
  { value: 5, label: '$5' },
  { value: 25, label: '$25' },
  { value: 50, label: '$50' },
  { value: 75, label: '$75' },
  { value: 125, label: '$125' },
  { value: 250, label: '$250' },
  { value: 500, label: '$500' },
  { value: 1000, label: '$1,000' },
  { value: 5000, label: '$5,000' },
  { value: 10000, label: '$10,000' },
  { value: 25000, label: '$25,000' },
];

const CAUSES = [
  { id: 1, label: 'Students in Need' },
  { id: 2, label: 'People of Color in Need' },
  { id: 3, label: 'Immigrants in Need' },
  { id: 4, label: 'Seniors in Need' },
];

export default function MainDonationForm() {
  const [modalText, setModalText] = React.useState('');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [selectedCauses, setSelectedCauses] = React.useState({});
  const [isAnyoneInNeed, setIsAnyoneInNeed] = React.useState(true);
  const [cause, setCause] = React.useState('');
  const [reCaptchaToken, setReCaptchaToken] = React.useState('');
  const [handleSubmit, isPending] = useStripeSession();

  React.useEffect(() => {
    const allSelected = Object.values(selectedCauses).filter(Boolean);
    if (allSelected.length === CAUSES.length) {
      setIsAnyoneInNeed(true);
      setSelectedCauses({});
    }
  }, [selectedCauses]);

  React.useEffect(() => {
    if (isAnyoneInNeed) {
      setCause('Anyone in Need');
    } else {
      const causes = CAUSES.filter(({ id }) => selectedCauses[id]).map(
        ({ label }) => label
      );
      setCause(causes.join(', '));
    }
  }, [isAnyoneInNeed, selectedCauses]);

  const hideModal = () => setModalOpen(false);

  const showModal = (message) => {
    setModalText(message);
    setModalOpen(true);
  };

  const selectCause = (id) => (value) =>
    setSelectedCauses({ ...selectedCauses, [id]: value });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (!cause) {
      showModal('Please select a cause for donation');
      return;
    }

    if (!amount) {
      showModal('Please choose an amount to give');
      return;
    }

    if (reCaptchaToken === '') {
      showModal('Please submit the captcha');
      return;
    }

    handleSubmit({ amount, cause });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div
          className="p-6 mb-5 card bordered bg-base-100 space-y-3"
          data-theme="cupcake"
        >
          <h2 className="card-title" data-theme="light">
            {'Help us develop programs for:'}
          </h2>
          <CheckboxFormControl
            id="cause"
            isChecked={isAnyoneInNeed}
            isToggle
            label="Anyone in Need"
            onChange={setIsAnyoneInNeed}
          />
          {!isAnyoneInNeed &&
            CAUSES.map(({ id, label }) => (
              <CheckboxFormControl
                id={id}
                isChecked={selectedCauses[id]}
                key={id}
                label={label}
                onChange={selectCause(id)}
              />
            ))}
          <SelectFormControl
            id="amount"
            onChange={setAmount}
            options={AMOUNTS}
            value={amount}
          />
          <ReCaptchaV2
            id="captcha"
            onChange={(token) => setReCaptchaToken(token)}
            onExpired={() => setReCaptchaToken('')}
            sitekey={'6LcjyaccAAAAAAjE2z6vBhs2tOdhC-t0F2OCMj7z'} //need to use env variables process.env.REACT_APP_SITE_KEY
          />
          <button
            className={clsx('btn btn-primary', { loading: isPending })}
            type="submit"
          >
            {'Donate'}
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={hideModal}>
        {modalText}
      </Modal>
    </>
  );
}
