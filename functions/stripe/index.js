module.exports.payRequest = (request, response, stripeClient) => {
  const { amount = 2000, name, currency = "USD", token } = JSON.parse(
    request.body
  );

  stripeClient.paymentIntents
    .create({
      amount,
      currency,
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      console.log(paymentIntent);
      return response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      return response.send("Something went wrong processing your payment");
    });
};
