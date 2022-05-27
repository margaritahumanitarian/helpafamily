import { StatusCodes } from 'http-status-codes';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
    customer_email: req.body.email,
  });

  res.status(StatusCodes.OK).json({ url: session.url });
}
