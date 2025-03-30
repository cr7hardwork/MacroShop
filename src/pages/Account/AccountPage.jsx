import React, { useState, useEffect } from "react";
import './AccountPage.css'
import axios from "axios";
import { useTranslation } from "../../translations/TranslationContext";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const translate = useTranslation()

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/current", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return {error}
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-container">
        <div className="account-content">
          <h2 className="account-name">  {translate.REGISTRATION.USERNAME} : {user.userName}</h2>
          <p className="account-email"> {translate.REGISTRATION.EMAIL} : {user.email}</p>
        </div>
    </div>
  );
}
