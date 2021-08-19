import React from 'react';
import { useRouter } from 'next/router';

function FallPreventionForEldersCard() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/create-stripe-session', {
      body: JSON.stringify({
        amount: 10000,
        cause: 'Provide 1 Fall Prevention Class Seat to an Elder',
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
        <img src="/images/FallPrevention.jpg" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">{'Fall Prevention Class'}</h2>
        <p className="mb-3">
          {
            'Provide an elderly person with a 6 week course in fall prevention while covering costs such as insurance, curriculum development and review.'
          }
        </p>
        <p>
          <br />
          <form onSubmit={handleSubmit}>
            <button className="btn btn-primary" type="submit">
              {'Provide 1 Seat for $100'}
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FallPreventionForEldersCard;
