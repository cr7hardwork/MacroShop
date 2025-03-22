import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../translations/TranslationContext';
import { useNavigate } from 'react-router-dom';

export default function FormMacro({ text, video, price }) {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [mouseInput, setMouseInput] = useState('');
    const [weapon, setWeapon] = useState('');
    const [user, setUser] = useState(null);
    const [inputValueError, setInputValueError] = useState('');
    const [mouseInputError, setMouseInputError] = useState('');

    const translate = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/user/current", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value <= 0) {
            setInputValueError('Число должно быть положительное');
        } else {
            setInputValueError('');
        }
    };

    const handleInputMouse = (e) => {
        const value = e.target.value;
        setMouseInput(value);
        if (value <= 0) {
            setMouseInputError('Число должно быть положительное');
        } else {
            setMouseInputError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputValue.trim() || !mouseInput.trim() || !selectedOption || !weapon) {
            return;
        }

        if (inputValue <= 0 || mouseInput <= 0) {
            return;
        }

        if (!user) {
            navigate('/auth');
            return;
        }

        const orderData = {
            ghzinform: inputValue,
            sensity: mouseInput,
            macroVariantSpeed: selectedOption,
            whichWeapon: weapon,
        };

        try {
            await axios.post('http://localhost:3000/order', orderData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            navigate('/payment');
            setInputValue('');
            setWeapon('');
            setMouseInput('');
            setSelectedOption('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>{text}</h1>

            <label className="label">{translate.GHZ_INFORMATION.WhatWeapon}</label>
            <input type="text" className="input-field" value={weapon} onChange={(e) => setWeapon(e.target.value)} />

            <label className="label">{translate.GHZ_INFORMATION.HowManyGhz}</label>
            <input type="number" className="input-field" value={inputValue} onChange={handleInputChange} />
            {inputValueError && <p style={{color : "red"}}>{inputValueError}</p>}

            <label className='label'>{translate.GHZ_INFORMATION.SensityOfMouse}</label>
            <input type="number" className='input-field' value={mouseInput} onChange={handleInputMouse} />
            {mouseInputError && <p style={{ color: "red" }}>{mouseInputError}</p>}

            <label className="label">{translate.GHZ_INFORMATION.ChooseMacroVariant}</label>
            <select className="select-dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">{translate.GHZ_INFORMATION.ChooseMacro}</option>
                <option>{translate.GHZ_INFORMATION.MacroOption1}</option>
                <option>{translate.GHZ_INFORMATION.MacroOption2}</option>
            </select>

            <p className='macro-video' >{translate.GHZ_INFORMATION.Video} : {video}</p>
            <h2>{translate.GHZ_INFORMATION.Price} : {price}</h2>

            {!user && <p className='warning'>Чтоб купить, надо зайти на аккаунт</p>}

            <button className="btn" type="submit">  
                {translate.GHZ_INFORMATION.Order}
            </button>

            <h4>
                *После заказа автоматически вы будете на странице заказов, когда заказ будет готов, будет ссылка на макрос
            </h4>
        </form>
    );
}
