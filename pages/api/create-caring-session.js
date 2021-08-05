const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function helloAPI(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Caring',
          },
          unit_amount: req.body.amount,
        },
        quantity: 1,
      },
    ],
    // mode: 'subscription',
    mode: 'payment',
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
  });

  // res.status(200).json({ name: 'John Doe' })
  // console.log(session)
  // console.log(session.url)
  if (process.env.LOCAL_MODE){
    res.status(200).json({ url: session.url })
  } else {
    res.redirect(session.url);
  }
}