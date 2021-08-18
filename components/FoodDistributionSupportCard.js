import React from 'react';
import { useRouter } from 'next/router';

function FoodDistributionSupportCard() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: 150*100,
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
    <div className="card lg:card-side bordered">
      <div className="card-body">
        <h2 className="card-title">Food Distribution Support</h2>
        <p className="mb-3">
          Help us cover our staffing costs for providing free food boxes for hungry families,
           such as paid time to manage volunteers for food distribution events or coordination
            with community groups.
        </p>
        <p>
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary">
            Support Food Distribution for $150 <span />
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FoodDistributionSupportCard;
