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

// If you disable collecting fields in the Payment Element, you
// must pass equivalent data when calling `stripe.confirmPayment`.
form.addEventListener('submit', async (event) => {
  stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: 'https://example.com',
      payment_method_data: {
        billing_details: {
          name: 'Jenny Rosen',
          email: 'jenny.rosen@example.com',
        }
      },
    },
  })
  .then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
    }
  });
});
var paymentElement = elements.getElement('payment');
// Create a Payment Element with customized fields
var paymentElement = elements.create('payment', {
  business: { name: 'Stripe Shop' },
  defaultValues: {
    billingDetails: {
      name: 'Jenny Rosen',
    }
  }
});

// Update with modified defaultValues
paymentElement.update({
  defaultValues: {
    billingDetails: {
      email: 'john.smith@example.com',
      phone: '5554242424',
    }
  }
});

// In the resulting options, business remains the same,
// while defaultValues is overwritten with the updated value
//
// {
//  business: { name: 'Stripe Shop' },
//  defaultValues: {
//   billingDetails: {
//     email: 'john.smith@example.com',
//     phone: '5554242424',
//   }
// }
elements.fetchUpdates()
  .then(function(result) {
    // Handle result.error
  });
// Collapse a Payment Element
var paymentElement = elements.getElement('payment');
paymentElement.collapse();
var expressCheckoutElement = elements.create('expressCheckout');
var expressCheckoutElement = elements.getElement('expressCheckout');
var expressCheckoutElement = elements.getElement('expressCheckout');

expressCheckoutElement.update({
  layout: 'horizontal',
});
expressCheckoutElement.on('click', function(event) {
  // Handle click event
});
expressCheckoutElement.on('confirm', function(event) {
  // call Stripe function to initiate payment confirmation
  stripe.confirmPayment({
    elements,
    clientSecret,
    confirmParams: {
      return_url: 'https://example.com',
    },
  })
  .then(function(result) {
    if (result.error) {
      // Inform the customer that there's an error.
    }
  });
});
expressCheckoutElement.on('cancel', function() {
  // handle cancel event
});
expressCheckoutElement.on('shippingaddresschange', function(event) {
  var resolve = event.resolve;
  var address = event.address;
  // handle shippingaddresschange event

  // call event.resolve within 20 seconds
  resolve(payload);
});
expressCheckoutElement.on('shippingratechange', function(event) {
  var resolve = event.resolve;
  var shippingRate = event.shippingRate;
  // handle shippingratechange event

  // call event.resolve within 20 seconds
  resolve(payload);
});
var linkAuthenticationElement = elements.create('linkAuthentication');
var linkAuthenticationElement = elements.getElement('linkAuthentication');
// Create the Address Element in shipping mode
var addressElement = elements.create('address', {
  mode: 'shipping',
});

// Create the Address Element in billing mode
var addressElement = elements.create('address', {
  mode: 'billing',
});
var addressElement = elements.getElement('address');
var addressElement = elements.getElement('address');

addressElement.update({
  validation: {
    phone: {
      required: 'never',
    },
  },
});
var addressElement = elements.getElement('address');

addressElement.getValue()
.then(function(result) {
  if (result.complete) {
    // Allow user to proceed to the next step
    // Optionally, use value to store the address details
  }
})
var element = elements.create('issuingCardNumberDisplay', {
  issuingCard: 'ic_1ITi6XKYfU8ZP6raDAXem8ql',
  nonce: 'ephkn_priv_v9QGxPyA1F1VHjB4dpLhHfw4',
  ephemeralKeySecret: 'ek_live_YWNjdF8xSmtzQWtQbUd...',
});
var cardElement = elements.create('card');
var cardElement = elements.getElement('card');
