// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe(
  'pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG',
  {betas: ['custom_checkout_beta_2']},
);
stripe.initCustomCheckout({clientSecret}).then((checkout) => {
  console.log(checkout);
});
