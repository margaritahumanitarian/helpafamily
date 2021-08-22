import { StatusCodes } from 'http-status-codes';

// PROD_STRIPE_SECRET_KEY only exists on the Netlify deployment server
// STRIPE_SECRET_KEY exists everywhere else
const stripeSecretKey =
  process.env.ENVIRONMENT == 'production'
    ? process.env.PROD_STRIPE_SECRET_KEY
    : process.env.TEST_STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

export default async function stripeCheckoutSessionCreate(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Help ${req.body.cause}`,
          },
          unit_amount: req.body.amount,
        },
        quantity: 1,
      },
    ],
    metadata: {
      cause: `Help ${req.body.cause}`,
    },
    // mode: 'subscription',
    mode: 'payment',
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
  });

  res.status(StatusCodes.OK).json({ url: session.url });
}
