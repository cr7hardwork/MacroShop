import React, { createContext, useContext } from "react";


const translations = {

  ACCOUNT: {

    LOGIN: "Логин",
    PASSWORD: "Пароль",
    ERRORMESSAGE : "Неправильный логин или пароль"
  },
  AUTH: {
    LOGIN: "Логин",
    REGISTRATION : "Регистрация"
  },
  MACRO : {
    MacroBloodyInfromation : "Макрос для мышки Bloody",
    MacrosLogitechInformation : "Макрос для мышки Logitech",
    MacrosX7Information : "Макрос для мышки X7",
    OnWhichWeaopn : "На какую пушку ",
    PRICE : "Цена : 1000р"
  },
  GHZ_INFORMATION : {
    HowManyGhz : "Напишите сколько у вас герц",
    ChooseMacroVariant : "Выберите вариант макроса",
    ChooseMacro : "Выберите макрос",
    MacroOption1 : "В точку со скориком",
    MacroOption2 : "Вверх со скориком",
    Order : "Заказать",
    WhatWeapon : "На какое оружие",
    SensityOfMouse : "Напишите чувствительность вашей мышки(в игре)",
    Video : "Видео",
    Price : "Цена"
    
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
    MacroForAnyWeapon : "Заказать макрос на любую пушку",
    Home : "Главная",
    MyAccount : "Мой аккаунт",
    Logout : "Выход"

 },
 BUTTON : {
  Order : "Заказать"
 },
 CONTACT :{
  MyVk : "Мой Вк"
 },
 ORDER : {
  NUMBEROFORDER : "Номер заказа",
  WHICHWHEAPON : "На какую пуху",
  HOWMANYGHZ : " Сколько герц",
  HOWISSENSITY : "Cколько чувст. мышки",
  MACROVARIANT : "Вариант макроса",
  MACROISNOTREADY : "Подождите макрос еще не готов",
  DOWNLOADMACRO : "Скачать"
 },
 PAYMENT : {
  PAYWITHCARD : "Оплата картой",
  INFORMATION : 'Stripe — это один из самых надежных и безопасных сервисов для обработки онлайн-платежей. С ним вы можете быть уверены, что все транзакции проходят в соответствии с высокими стандартами безопасности, а ваши данные находятся под надежной защитой.'
 },
 ADMIN : {
  ALLORDERS : "Все заказы",
  ORDERID: "Номер заказа",
  STATUS : "Статус",
  UPDATEURL : "Обновить URL"
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