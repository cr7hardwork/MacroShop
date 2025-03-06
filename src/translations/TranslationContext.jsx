import React, { createContext, useContext } from "react";


const translations = {

  ACCOUNT: {

    LOGIN: "Логин",
    PASSWORD: "Пароль"
  },
  AUTH: {
    LOGIN: "Логин",
    REGISTRATION : "Регистрация"
  },
  MACRO : {
    MacroBloodyInfromation : "Макрос для мышки Bloody",
    MacrosLogitechInformation : "Макрос для мышки Logitech",
    MacrosX7Information : "Макрос для мышки X7"
  },
  GHZ_INFORMATION : {
    HowManyGhz : "Напишите сколько у вас герц",
    ChooseMacroVariant : "Выберите вариант макроса",
    ChooseMacro : "Выберите макрос",
    MacroOption1 : "В точку со скориком",
    MacroOption2 : "Вверх со скориком",
    Order : "Заказать",
    WhatWeapon : "На какое оружие",
    SensityOfMouse : "Напишите чувствительность вашей мышки(в игре)"
    
  },
  REGISTRATION : {
    EMAIL : "Email",
    USERNAME : "Username",
    PASSWORD : "Password",
    REGISTRATION : "Регистрация",
    BACK : "Назад"
  },
  NAVBAR : {
    X7Macro : "Макросы для X7",
    BloodyMacro : "Макросы для Bloody",
    LogitechMacro : "Макрос для Logitech",
    Contacts : "Контакты",
    Account : "Аккаунт",
    MacroForAnyWeapon : "Заказать макрос на любую пушку"

  }



}


const TranslationContext = createContext(translations);


export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
};