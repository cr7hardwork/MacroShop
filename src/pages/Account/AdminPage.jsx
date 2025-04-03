import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/order/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        setError(err);
        navigate('/'); 
      });
  }, [navigate]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>All Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>Order ID: {order.id} - Status: {order.status}</li>
        ))}
      </ul>
    </div>
  );
}
