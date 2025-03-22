import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  logout: () => {},
  setIsAuthenticated: () => {}
});

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));

  const logout = () => {
    localStorage.removeItem("accessToken");    
    setIsAuthenticated(false);
  };


  const checkTokenValidity = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const response =  axios
      .get("http://localhost:3000/user/current", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        logout();
      }
    } catch (error) {
      console.error( error);
      logout();
    }
  };

  useEffect(() => {
    checkTokenValidity(); 
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
