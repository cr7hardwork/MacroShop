import { useState } from "react";
import "../App.css";
import { useTranslation } from "../translations/TranslationContext";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const translate = useTranslation()

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логин:", login, "Пароль:", password);
    setLogin('')
    setPassword('')
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">{translate.ACCOUNT.LOGIN}</label>
      <input type="text" className="input-field" onChange={handleLoginChange} value={login} /> <br />

      <label className="label">{translate.ACCOUNT.PASSWORD}</label>
      <input type="password" className="input-field" onChange={handlePasswordChange} value={password} />

      <button type="submit" className="btn">{translate.AUTH.LOGIN}</button> 
      <button type="submit" className="btn" onClick={() => navigate('/registration')}>{translate.AUTH.REGISTRATION}</button>
    </form>
  );
}
