import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onError, onSuccess }) => {
  const onChange = async (formData) => {
    const { values } = formData;
    const isIncomplete = Object.values(formData.status).includes("incomplete");
    const expiry = values.expiry.split("/");

    if (!isIncomplete) {
      const cardInfo = {
        number: values.number,
        exp_month: expiry[0],
        exp_year: expiry[1],
        cvc: values.cvc,
        name,
      };
      try {
        const card = await cardTokenRequest(cardInfo);
        onSuccess(card);
      } catch (e) {
        onError(e);
      }
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
