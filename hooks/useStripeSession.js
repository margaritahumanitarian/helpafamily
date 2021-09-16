import React from 'react';
import { useRouter } from 'next/router';

const dollarsToCentsMultiplier = 100;

const useStripeSession = () => {
  const [isPending, setIsPending] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async ({ amount, cause }) => {
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
