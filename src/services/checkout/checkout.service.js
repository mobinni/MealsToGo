import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51HzDwlIfEuMDL6nvAXXM3pbywxTyQjerlEGqAyg8sUESBJKtAy6j86uMoCvYLInPpahyRSC3S8G65md8jbkGYPNE002bZm2QZf"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
