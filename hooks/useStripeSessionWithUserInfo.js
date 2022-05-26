import React from 'react';
import { useRouter } from 'next/router';

const dollarsToCentsMultiplier = 100;

const useStripeSessionWithUserInfo = () => {
  const [isPending, setIsPending] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async ({ name, email, amount }) => {
    setIsPending(true);

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        name: name,
        email: email,
        amount: amount * dollarsToCentsMultiplier,
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

export default useStripeSessionWithUserInfo;
