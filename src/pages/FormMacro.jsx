import React, { useState } from 'react';
import "../App.css";
import axios from 'axios';

import { useTranslation } from '../translations/TranslationContext';

export default function FormMacro({ text ,video}) {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [mouseInput,setMouseInput] =useState('')
    const translate = useTranslation()

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputMouse = (e) => {
        setMouseInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderData = {
            selectedOption,
            mouseInput,
            inputValue
        }
        try{
            const response = await axios.post('http://localhost:3000/order', orderData) 
        
        }

                  
        catch(error){
            console.log(error);
            
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>{text}</h1>
            <label className="label">{translate.GHZ_INFORMATION.HowManyGhz}</label><br />
            <input 
                type="number" 
                className="input-field" 
                value={inputValue} 
                onChange={handleInputChange}
            /><br />
             <label className='label'>{translate.GHZ_INFORMATION.SensityOfMouse}</label>
             <input type= "number" className='input-field' value={mouseInput} onChange={handleInputMouse} />
            <label className="label">{translate.GHZ_INFORMATION.ChooseMacroVariant}</label><br />
            <select 
                className="select-dropdown" 
                value={selectedOption} 
                onChange={handleSelectChange}
            >
                <option value="">{translate.GHZ_INFORMATION.ChooseMacro}</option>
                <option>{translate.GHZ_INFORMATION.MacroOption1}</option>
                <option>{translate.GHZ_INFORMATION.MacroOption2}</option>
            </select><br />
            <p> Видео : {video}</p>
            <h2>Цена : 1000р</h2>
            <button className="btn" type="submit">{translate.GHZ_INFORMATION.Order}</button>
        </form>
    );
}
