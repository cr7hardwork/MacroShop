import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "../translations/TranslationContext";
import { useAuth } from "../pages/AuthPages/AuthContext";

export default function Navbar() {
  const translate = useTranslation();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="home">{translate.NAVBAR.Home}</NavLink>
      <NavLink className="nav-link" to="x7-macro">{translate.NAVBAR.X7Macro}</NavLink>
      <NavLink className="nav-link" to="bloody-macro">{translate.NAVBAR.BloodyMacro}</NavLink>
      <NavLink className="nav-link" to="logitech-macro">{translate.NAVBAR.LogitechMacro}</NavLink>
      <NavLink className="nav-link" to="your-order">{translate.NAVBAR.MacroForAnyWeapon}</NavLink>
      <NavLink className="nav-link" to="my-contacts">{translate.NAVBAR.Contacts}</NavLink>

      {isAuthenticated ? (
        <>
          <NavLink className="nav-link" to="my-orders" >Orders</NavLink>
          <NavLink className="nav-link" to="my-account">{translate.NAVBAR.MyAccount}</NavLink>
          <NavLink className="nav-link" onClick={logout}>{translate.NAVBAR.Logout}</NavLink>
        </>
      ) : (
        <NavLink className="nav-link" to="auth">{translate.NAVBAR.Account}</NavLink>
      )}
    </nav>
  );
}
