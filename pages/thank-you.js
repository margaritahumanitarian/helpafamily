import React from 'react';

export default function Home() {
  return (
    <html>
      <head>
        <title>{'Thank You'}</title>
      </head>
      <body>
        <div className="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{'Thank You'}</h1>
              <p>{'With gratitude from Margarita Humanitarian Foundation.'}</p>
              <p>
                {
                  'Thanks so much for your generosity. We promise to use it to help the causes you indicated your support for, and to be extra thoughtful about putting it to good use.'
                }
              </p>
              <h2 className="m-5 text-3xl font-bold">{'Receipt to Follow'}</h2>
              <p>
                {
                  "Your donation is fully tax-deductible. We'll email you a fully-compliant IRS 501(c)(3) donation receipt for your records shortly."
                }
              </p>
              <h2 className="m-5 text-3xl font-bold">
                {'About Our Donation Software'}
              </h2>
              <p>
                {
                  'This page was put together thanks to the kindness of our volunteers. It went live on August 5, 2021, so pardon the dust if you discover any problems. Thanks for your patience and understanding.'
                }
              </p>
              <h3 className="m-5 text-xl font-bold">
                {'Improve our Donation Software'}
              </h3>
              <p>
                {'This donation system is entirely open source on '}
                <a
                  className="link link-secondary"
                  href="https://github.com/margaritahumanitarian/helpafamily"
                >
                  {'GitHub'}
                </a>
                {
                  ". We're looking for volunteer contributors to help make it better. Report bugs or propose ideas for improvements by submitting GitHub issues, or even submit little pull requests as proposals."
                }
              </p>
              <h3 className="m-5 text-xl font-bold">{'Reach Out to Us'}</h3>
              <p>
                {'Follow Margarita Humanitarian Foundation for more updates: '}
                <a
                  className="link link-secondary"
                  href="https://www.instagram.com/margaritahforg/"
                >
                  {'Instagram'}
                </a>{' '}
                {'and'}
                <a
                  className="link link-secondary"
                  href="https://twitter.com/margaritahforg"
                >
                  {'Twitter'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
