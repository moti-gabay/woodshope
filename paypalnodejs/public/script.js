const amount = document.querySelector("#amount").console.log(amount.value);

paypal
  .buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: amount.value,
            },
          },
        ],
      })
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert("Transaction completed by " + details.payer.name.given_name);
      })
    },
  })
  .render("#paypal");
