// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe(
  'pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG',
  {betas: ['custom_checkout_beta_2']},
);
stripe.initCustomCheckout({clientSecret}).then((checkout) => {
  console.log(checkout);
});
var stripe = Stripe('pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG');
var elements = stripe.elements({
  clientSecret: 'CLIENT_SECRET',
});
var elements = stripe.elements({
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
});
elements.update({locale: 'fr'});
elements.submit()
  .then(function(result) {
    // Handle result.error
  });
var paymentElement = elements.create('payment');
// Customize which fields are collected by the Payment Element
var paymentElement = elements.create('payment', {
  fields: {
    billingDetails: {
      name: 'never',
      email: 'never',
    }
  }
});
