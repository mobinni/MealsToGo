import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51HzDwlIfEuMDL6nvAXXM3pbywxTyQjerlEGqAyg8sUESBJKtAy6j86uMoCvYLInPpahyRSC3S8G65md8jbkGYPNE002bZm2QZf"
);

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: "244",
      name: "Mo",
    };
    const info = await stripe.createToken({ card });
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
