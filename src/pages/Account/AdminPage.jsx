import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthPages/AuthContext";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const { role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      navigate("/home");
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/order/all", {
          method :'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError(err);
        navigate("/");
      }
    };

    fetchOrders();
  }, [role, navigate]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>All Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
