import React from 'react';
import { useRouter } from 'next/router';

function HotMealDayCard() {
  const router = useRouter();

  // API takes "amount" in cents. The cost of the a hot meal day is $250 multiplied by 100 to get correct amount in cents
  const hotMealDayCost = 250;
  const dollarsToCentsMultiplier = 100;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: hotMealDayCost * dollarsToCentsMultiplier,
        cause: 'Hot Meal for 60 Hungry People.',
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
        <h2 className="card-title">{'Hot Meal Day'}</h2>
        <p className="mb-3">
          {
            'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
          }
        </p>
        <p>
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary" type="submit">
              {'Feed 60 people for $250'}
            </button>
          </form>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default HotMealDayCard;
