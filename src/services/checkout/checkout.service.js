import createStripe from "stripe-client";

import { host, isMock } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51HzDwlIfEuMDL6nvAXXM3pbywxTyQjerlEGqAyg8sUESBJKtAy6j86uMoCvYLInPpahyRSC3S8G65md8jbkGYPNE002bZm2QZf"
);

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay?mock=${isMock}`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment");
    }
    return res.json();
  });
};

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card: card });
};
