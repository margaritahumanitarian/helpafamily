import React from 'react';
import { useRouter } from 'next/router';

function FoodDistributionSupportCard() {
  const router = useRouter();

  // API takes "amount" in cents. The cost of the food distribution is $150 multiplied by 100 to get correct amount in cents
  const foodDistributionCost = 150;
  const dollarsToCentsMultiplier = 100;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: foodDistributionCost * dollarsToCentsMultiplier,
        cause: 'Producing Food Distribution',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await response.json();
    router.push(result.url);
  };

  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src="/images/FoodDistribution.jpg" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">{'Food Distribution Support'}</h2>
        <p className="mb-3">
          {
            'Help us cover our staffing costs for providing free food boxes for hungry families, such as paid time to manage volunteers for food distribution events or coordination with community groups.'
          }
        </p>
        <p>
          <br />
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary" type="submit">
              {'Support Food Distribution for $150'}
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FoodDistributionSupportCard;
