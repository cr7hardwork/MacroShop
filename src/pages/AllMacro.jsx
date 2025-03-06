import { useTranslation } from "../translations/TranslationContext"
import { useState } from "react";

export default function AllMacro(){
    const [weapon,setWeapon] = useState('')
   const [ghzInform, setGhzInform] = useState('');
   
     const [selectedOption, setSelectedOption] = useState('');
     const [sensity,setSensity] = useState('')
    const translate = useTranslation()


    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInput = (e) => {
        setGhzInform(e.target.value)
    }

    const sensityMouse = (e) => {
        setSensity(e.target.value)
    }

    const whichWeapon = (e) => {
        setWeapon(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(` Оружие : ${weapon} на  ${ghzInform} будет стрелять  ${selectedOption} на этом чувст. мышки ${sensity}`);
        setWeapon(''),
        setGhzInform(''),
        setSelectedOption(''),
        setSensity('')
        
    }

    return (
        <form className="form" onSubmit={onSubmit}>
        
         <label className="label">
              {translate.GHZ_INFORMATION.WhatWeapon}
         </label>
         <input type="text" className="input-field" value={weapon} onChange={whichWeapon} />
         <label className="label">{translate.GHZ_INFORMATION.HowManyGhz}</label>
         <input type="number" className="input-field"  value={ghzInform}  onChange={handleInput} />
         <label className='label'>{translate.GHZ_INFORMATION.SensityOfMouse}</label>
             <input type= "number" className='input-field' value={sensity} onChange={sensityMouse}  />
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
            <button className="order-button" type="submit">Заказать</button>
        </form>
    )


}