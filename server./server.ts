import Stripe from 'stripe';
const stripe = Stripe('sk_test_51PZzciCyC8OWGlHKE542bwYjZnBTEmCd4nTubWatfDsfQUWXV3pNVe6MDhhYLSJWjwR4CZ9FYNAVCE56cfbIpP2Z00uh7EeZOl', {
  apiVersion: '2024-06-20; custom_checkout_beta=v1' as any,
});

import Express from 'express';

const app: Express = express();

app.post('/checkout', async (req: Express.Request, res: Express.Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'custom' as any,
    // The URL of your payment completion page
    return_url: '{{RETURN_URL}}'
  });

  res.json({clientSecret: session.client_secret});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
