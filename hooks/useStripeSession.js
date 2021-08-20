import React from 'react';
import { useRouter } from 'next/router';

const dollarsToCentsMultiplier = 100;

const useStripeSession = ({ amount, cause }) => {
  const [isPending, setIsPending] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsPending(true);

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: amount * dollarsToCentsMultiplier,
        cause,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await response.json();

    setIsPending(false);
    router.push(result.url);
  };

  return [handleSubmit, isPending];
};

export default useStripeSession;
