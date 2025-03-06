import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../translations/TranslationContext";

export default function Registration(){
    const [formData,setFormData] = useState({
        email : '',
        username : '',
        password : ''
    })

    const navigate = useNavigate()
    const translate = useTranslation()

    const goBack = () => {
        navigate(-1)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log("My Data", formData);
        
    }
  

    return(
        <form className="form" onSubmit={handleSumbit} >
        <label className="label">{translate.REGISTRATION.EMAIL}
        </label>
        <input type="email"  name="email" className="input-field" value={formData.email} required  onChange={handleChange} />
        <label className="label">{translate.REGISTRATION.USERNAME}</label>
        <input type="text" className="input-field" name="username" value={formData.username} required  onChange={handleChange} />
        <label className="label">{translate.REGISTRATION.PASSWORD}</label>
        <input type="password" name="password" className="input-field" value={formData.password}  required  onChange={handleChange} />
        <button type="submit" className="order-button">{translate.REGISTRATION.REGISTRATION}</button>
        <button type="submit" className="back-button" onClick={goBack} >{translate.REGISTRATION.BACK}</button>



        </form>
    )
}