import React from 'react';
import { useRouter } from 'next/router';

function HumanitarianClinicCard() {
  const router = useRouter();

  // API takes "amount" in cents. The cost of the humanitarian clinic is $30 multiplied by 100 to get correct amount in cents
  const humanitarianClinicCost = 30;
  const dollarsToCentsMultiplier = 100;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: humanitarianClinicCost * dollarsToCentsMultiplier,
        cause: '1 patient at a free humanitarian clinic',
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
    <div className="card shadow-xl image-full hover:ring-4 hover:ring-opacity-30 hover:ring-white">
      <figure>
        <img src="/images/Humanitarian.jpg" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">{'Humanitarian Clinic'}</h2>
        <p className="mb-3">
          {
            'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.'
          }
        </p>
        <p>
          <br />
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary " type="submit">
              {'Help 1 Patient for $30'}
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default HumanitarianClinicCard;
