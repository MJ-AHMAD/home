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
