import React, { useState } from 'react';
import "../App.css";

import { useTranslation } from '../translations/TranslationContext';

export default function FormMacro({ text }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Вы выбрали: ${selectedOption}, Чувст. мышки ${mouseInput} Герц: ${inputValue}` );
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
            <button className="order-button" type="submit">{translate.GHZ_INFORMATION.Order}</button>
        </form>
    );
}
