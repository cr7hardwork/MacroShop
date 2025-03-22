import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useTranslation } from "../translations/TranslationContext";

export default function PaymentForm(){
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const translate = useTranslation()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{translate.PAYMENT.PAYWITHCARD}</h2>
      <CardElement />
      <button className="btn"
        type="submit"
        disabled={!stripe || loading} >
        {loading ? "Оплата..." : "Оплатить"}
      </button>
    </form>
  );
};

