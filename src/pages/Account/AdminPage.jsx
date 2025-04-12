import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "../../translations/TranslationContext";

export async function adminLoader() {
  const token = localStorage.getItem("accessToken");
  if (!token) return redirect("/auth");

  try {
    const response = await axios.get("http://localhost:3000/user/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.role !== "admin") {
      return redirect("/home");
    }

    const orders = await axios.get("http://localhost:3000/order/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return orders.data;

  } catch (err) {
    return redirect("/auth");
  }
}

export default function AdminPage() {
  const orders = useLoaderData();
  const [urls, setUrls] = useState({});
  const [error, setError] = useState(null);
  const [updatedOrders, setUpdatedOrders] = useState({});
  const translate = useTranslation();

  const updateUrl = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/order/${orderId}/update-url`,
        { url: urls[orderId] },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      setUrls((prev) => ({ ...prev, [orderId]: "" }));
      setUpdatedOrders((prev) => ({ ...prev, [orderId]: true }));
    } catch (err) {
      setError(err);
    }
  };

  const handleInputChange = (e, orderId) => {
    setUrls((prev) => ({ ...prev, [orderId]: e.target.value }));
  };

  if (error) return <div>{error.message}</div>;

  return (
    <div className="form">
      <h2>{translate.ADMIN.ALLORDERS}</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            {translate.ADMIN.ORDERID} {order.id} - {translate.ADMIN.STATUS}: {order.status}
          </p>
          {updatedOrders[order.id] && (
            <p className="updated">{translate.ADMIN.URLUPDATED}</p>
          )}
          <input
            type="text"
            className="input-field"
            value={urls[order.id] || ""}
            onChange={(e) => handleInputChange(e, order.id)}
          />
          <button className="btn" onClick={() => updateUrl(order.id)}>
            {translate.ADMIN.UPDATEURL}
          </button>
        </div>
      ))}
    </div>
  );
}