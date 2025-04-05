import React, { useState, useEffect } from "react";
import './AccountPage.css'
import axios from "axios";
import { useTranslation } from "../../translations/TranslationContext";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const translate = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/current", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setUser(response.data);
        console.log(response);
      } catch (err) {
        setError(err);
      }
    };

    fetchUserData();
  }, []);
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-container">
      <div className="account-content">
        <h2 className="account-name">{translate.REGISTRATION.USERNAME}: {user.userName}</h2>
        <p className="account-email">{translate.REGISTRATION.EMAIL}: {user.email}</p>
        <p>{translate.REGISTRATION.ROLE} {user.role}</p>
        {user.role === "admin" && (
          <button onClick={
            
            () =>
            {
              console.log('navigating');
              
              navigate("/admin")
            }
              
            }>
            Перейти на админку
          </button>
        )}
      </div>
    </div>
  );
}