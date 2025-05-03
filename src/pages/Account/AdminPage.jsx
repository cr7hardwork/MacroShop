import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "../../translations/TranslationContext";

export async function adminLoader() {
  const token = localStorage.getItem("accessToken");
  if (!token) return redirect("/auth");

  try {
    const userRes = await axios.get("http://localhost:3000/user/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (userRes.data.role !== "admin") {
      return redirect("/home");
    }

    const ordersRes = await axios.get("http://localhost:3000/order/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return ordersRes.data;
  } catch (err) {
    return redirect("/auth");
  }
}

export default function AdminPage() {
  const initialOrders = useLoaderData();
  const [orders, setOrders] = useState(initialOrders);
  const [urls, setUrls] = useState({});
  const [error, setError] = useState(null);
  const translate = useTranslation();

  const updateUrl = async (orderId) => {
    try {
      const url = urls[orderId];
      const token = localStorage.getItem("accessToken");

      const response = await axios.put(
        `http://localhost:3000/order/${orderId}/update-url`,
        { url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? response.data : order
        )
      );

      setUrls((prev) => ({ ...prev, [orderId]: "" }));
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
        <div key={order.id} className="order-card">
          <p><strong>{translate.ADMIN.ORDERID}:</strong> {order.id}</p>
          <p><strong>{translate.ADMIN.STATUS}:</strong> {order.status}</p>
          <p><strong>{translate.ADMIN.SENSITY}:</strong> {order.sensity}</p>
          <p><strong>{translate.ADMIN.GHZINFO}:</strong> {order.ghzinform}</p>
          <p><strong>{translate.ADMIN.MACROVARIANTSPEED}:</strong> {order.macroVariantSpeed}</p>
          <p><strong>{translate.ADMIN.OWNERID}:</strong> {order.owner_id}</p>
          <p><strong>{translate.ADMIN.WHICHWEAPON}:</strong> {order.whichWeapon}</p>
          {order.updated === "updated" && (
            <p className="updated">{translate.ADMIN.URLUPDATED}</p>
          )}

          <input
            type="text"
            className="input-field"
            placeholder={translate.ADMIN.ENTERURL}
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
