import { useState } from "react";
import "../App.css";
import { useTranslation } from "../translations/TranslationContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const translate = useTranslation()

  const handleLoginChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        email,
        password
      },
      );

      const accessToken = response.data.accessToken;
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/myaccount');
        setEmail('');
        setPassword('');
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">{translate.ACCOUNT.LOGIN}</label>
      <input type="text" className="input-field" name="email" onChange={handleLoginChange} value={email} /> <br />

      <label className="label">{translate.ACCOUNT.PASSWORD}</label>
      <input type="password" className="input-field" name="password" onChange={handlePasswordChange} value={password} />
      <div className="submit-container">
        <button type="submit" className="btn">{translate.AUTH.LOGIN}</button>

      </div>
      <div className="a-link" >
        <a onClick={() => navigate('/registration')}>{translate.AUTH.REGISTRATION}</a>

      </div>
    </form>
  );
}
