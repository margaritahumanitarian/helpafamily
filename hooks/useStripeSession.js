import { useRouter } from 'next/router';

const dollarsToCentsMultiplier = 100;

const useStripeSession = ({ amount, cause }) => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    router.push(result.url);
  };

  return handleSubmit;
};

export default useStripeSession;
