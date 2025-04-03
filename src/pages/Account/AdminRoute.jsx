import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthPages/AuthContext";

export default function AdminRoute({ element }) {
  const { isAuthenticated, role } =  useAuth()

  if (!isAuthenticated) {
   
    return <Navigate to="/auth" />;
  }

  if (role !== "ADMIN") {
    return <Navigate to="/home" />;
  }

  return element;
}
