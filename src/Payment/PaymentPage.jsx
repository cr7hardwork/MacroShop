import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment";
import axios from "axios";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe("pk_test_51R51DoEQBo2jbhtYjpgMDMQQI57FFm2HmjnNg9qybKsNgTBBzpEbZi9zpv3S0VCxZEczCsnMaXrvaY9EK2jnVqVP00zEsLOzSB");

const PaymentPage = () => {
  const { orderId } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post("http://localhost:3000/payments/create-payment", { amount: 1000 , order_id : orderId});
        setClientSecret(response.data.clientSecret);
        setLoading(false);
      } catch (error) {
        setError("Error fetching client secret");
        setLoading(false);
      }
    };

    fetchClientSecret();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
       
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
    
    </div>
  );
};

export default PaymentPage;
