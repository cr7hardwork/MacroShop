import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Order.css'
import { useTranslation } from '../../translations/TranslationContext';

export default function Orders (){
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const translate = useTranslation()

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/order/user-orders", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setOrders(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className='order-list'>
      {orders.map((order) => (
        <li key={order.id}>
          <h2>{translate.ORDER.NUMBEROFORDER}: {order.id}</h2>
          <p>{translate.ORDER.WHICHWHEAPON}: {order.whichWeapon}</p>
          <p>{translate.ORDER.HOWMANYGHZ}: {order.ghzinform}</p>
          <p>{translate.ORDER.HOWISSENSITY}: {order.sensity}</p>
          <p>{translate.ORDER.MACROVARIANT}: {order.macroVariantSpeed}</p>
          <div className='macro-ready'>
          {order.url ? (
           <a href={order.url} target='_blank' rel="noopener noreferrer">{translate.ORDER.DOWNLOADMACRO}</a>
          ) : (
            <p>{translate.ORDER.MACROISNOTREADY}</p>
          )}
          </div>
         
        </li>
      ))}
    </ul>
  );
};
