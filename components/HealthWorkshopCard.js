import React from 'react';
import { useRouter } from 'next/router';

function HealthWorkshopCard() {
  const router = useRouter();

  // API takes "amount" in cents. The cost of the health workshop is $5000 multiplied by 100 to get correct amount in cents
  const healthWorkshopCost = 2000;
  const dollarsToCentsMultiplier = 100;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: healthWorkshopCost * dollarsToCentsMultiplier,
        cause: 'Creating a Health Workshop',
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
    <div className="card shadow-xl image-full hover:ring-4">
      <figure>
        <img src="/images/HealthWorkshop.jpg" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">{'Health Education Workshop'}</h2>
        <p className="mb-3">
          {
            'Help in establishing one free health education workshop for a community that is facing major disparities in health conditions and to help those people who need care and attention.'
          }
        </p>
        <p className="mb-3">
          {
            'Also, your donation will go toward health-themed mini gift bags to motivate people to attend a workshop, equipment such as trainer simulaids for edema and breast disease, venue costs, and to hire public health educators to prepare presentations.'
          }
        </p>
        <p>
          <br />
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary " type="submit">
              {'Create 1 Workshop for $2000 '}
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default HealthWorkshopCard;
