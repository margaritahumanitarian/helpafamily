import React from 'react';
import clsx from 'clsx';

import InputFormControl from './form/InputFormControl';
import Modal from './Modal';
import useStripeSessionWithUserInfo from '../hooks/useStripeSessionWithUserInfo';

export default function MainDonation() {
  const [modalText, setModalText] = React.useState('');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [handleSubmit, isPending] = useStripeSessionWithUserInfo();

  const hideModal = () => setModalOpen(false);

  const showModal = (message) => {
    setModalText(message);
    setModalOpen(true);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (!name) {
      showModal('Please choose a name');
      return;
    }
    if (!email) {
      showModal('Please choose an email');
      return;
    }
    if (!amount) {
      showModal('Please choose an amount to give');
      return;
    }

    await handleSubmit({ name, email, amount });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="p-6  bcolor mb-5 card  bg-base-100 space-y-3 text-black">
          <h2 className="card-title text-color" data-theme="light">
            {'Give Today'}
          </h2>
          <label className="input-labelText"> {'Name'}</label>
          <InputFormControl
            className="input-color"
            id="name"
            onChange={setName}
            value={name}
          />
          <label className="input-labelText"> {'Email'}</label>
          <InputFormControl
            className="input-color"
            id="email"
            onChange={setEmail}
            value={email}
          />

          <label className="input-labelText"> {'Amount'}</label>
          <InputFormControl
            className="input-color"
            id="amount"
            onChange={setAmount}
            value={amount}
          />
          <div className="pb-5" />
          <button
            aria-label="donate-btn"
            type="submit"
            className={clsx('btn-accent rounded-none  m-5', {
              loading: isPending,
            })}
          >
            {'Donate Now'}
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={hideModal}>
        {modalText}
      </Modal>

      <style jsx>{`
        .bcolor {
          background: rgba(26, 30, 30, 0.48);
          box-shadow: 4px 4px 17px rgba(0, 0, 0, 0.25);
          border-radius: 9px;
          border-color: rgba(0, 0, 0, 0.25);
        }

        .text-color {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 42px;
          color: #ffffff;
        }

        .input-labelText {
          text-align: left;
          color: #ffffff;
        }

        .input-color {
          background: #f7f7f7;
          opacity: 0.7;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
