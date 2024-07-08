document.addEventListener('DOMContentLoaded', function () {
var stripe = Stripe('pk_test_...'); // Replace with your own test API key
var elements = stripe.elements();
var style = {
base: {
fontSize: '16px',
color: '#32325d',
},
};
var card = elements.create('card', {style: style});
card.mount('#card-element');

var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
event.preventDefault();
// Add your code for the payment process
// Example: stripe.createToken(card).then(function(result) { ... });
});
});
