
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment";

const stripePromise = loadStripe("pk_test_51R51DoEQBo2jbhtYjpgMDMQQI57FFm2HmjnNg9qybKsNgTBBzpEbZi9zpv3S0VCxZEczCsnMaXrvaY9EK2jnVqVP00zEsLOzSB"); 

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;

