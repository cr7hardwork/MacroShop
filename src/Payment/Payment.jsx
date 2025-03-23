import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useTranslation } from "../translations/TranslationContext";
import '../Payment/Payment.css'

export default function PaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const translate = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return; 

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/complete"
      },
      clientSecret
    });

    if (error) {
      console.error("Ошибка при оплате:", error);
    } else {
      console.log("Оплата успешна!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{translate.PAYMENT.PAYWITHCARD}</h2>
      <p className="payment-information">{translate.PAYMENT.INFORMATION}</p>
      <PaymentElement  />
      <button className="btn" type="submit" disabled={!stripe || loading}>
        {loading ? "Оплата..." : "Оплатить"}
      </button>
    </form>
  );
}
