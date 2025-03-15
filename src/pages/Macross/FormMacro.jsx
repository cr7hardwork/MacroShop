import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useTranslation } from '../../translations/TranslationContext';
import { useNavigate } from 'react-router-dom';

export default function FormMacro({ text, video , price }) {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [mouseInput, setMouseInput] = useState('')
    const [weapon, setWeapon] = useState('')
    const [user, setUser] = useState(null)
    const translate = useTranslation()
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputMouse = (e) => {
        setMouseInput(e.target.value)
    }

    const whichWeapon = (e) => {
        setWeapon(e.target.value)
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/user/current", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setUser(response.data)

            } catch (error) {
                setUser(null)
            }
        }
        fetchUser();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!inputValue.trim() || !mouseInput.trim() || !selectedOption || !weapon) {
            alert('Please fill in all fields');
            return;
        }

        if (!user) {
            navigate('/auth')
        }

        const orderData = {
            ghzinform: inputValue,
            sensity: mouseInput,
            macroVariantSpeed: selectedOption,
            whichWeapon: weapon

        };

        try {
            const response = await axios.post('http://localhost:3000/order', orderData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            navigate('/waiting')
            setInputValue('')
            setWeapon('')
            setMouseInput('')
            setSelectedOption('')
        }
        catch (error) {
            console.log(error);
        }
    };

    const isDisabled = !inputValue.trim() || !mouseInput.trim() || !selectedOption

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>{text}</h1>
            <label className="label">
                {translate.GHZ_INFORMATION.WhatWeapon}
            </label>
            <input type="text" className="input-field" value={weapon} onChange={whichWeapon} />
            <label className="label">{translate.GHZ_INFORMATION.HowManyGhz}</label><br />
            <input
                type="number"
                className="input-field"
                value={inputValue}
                onChange={handleInputChange}
            /><br />
            <label className='label'>{translate.GHZ_INFORMATION.SensityOfMouse}</label>
            <input type="number" className='input-field' value={mouseInput} onChange={handleInputMouse} />
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
            <p> {translate.GHZ_INFORMATION.Video} : {video}</p>
            <h2> {translate.GHZ_INFORMATION.Price} :  {price}</h2>
            {!user && <p className='warning'>Чтоб купить надо зайти на аккаунт</p>}
            <button className="btn" type="submit" disabled={isDisabled} >  {translate.GHZ_INFORMATION.Order}</button>
        </form>
    );
}
