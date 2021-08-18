import React from 'react';
import { useRouter } from 'next/router';

function FallPreventionForEldersCard() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: 10000,
        cause: 'Fall prevention class',
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
        <h2 className="card-title">{'Fall prevention class'}</h2>
        <p className="mb-3">
          {'Provide an elderly person with a 6 week course in fall prevention while covering costs such as insurance, curriculum development and review.'}
        </p>
        <p>
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary" type="submit">
              {'Provide one seat for $100'}
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FallPreventionForEldersCard;
