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

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
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
