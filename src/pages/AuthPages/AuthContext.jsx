import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  role: '',
  logout: () => {},
  setIsAuthenticated: () => {},
  setRole: () => {},
});

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));
  const [role, setRole] = useState('');

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setRole('');
  };

  const checkTokenValidity = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/user/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        setRole(response.data.role); 
      }
    } catch (err) {
      logout();
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, logout, setIsAuthenticated, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
