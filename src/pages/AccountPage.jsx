import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/current", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setUser(response.data); 
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

 

return(
  <div></div>
)
}
