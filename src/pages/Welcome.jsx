import React, { useEffect, useState, useContext } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../Context/ThemeContext";

const Welcome = () => {
  const navigate = useNavigate();
  const phoneRegex = /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);

  const [nameError, SetNameError] = useState(false);
  const [phoneError, SetPhoneError] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log("theme",theme);
  
  const goToNextPage = () => {
    navigate("/step-one");
  };

  const handleClick = () => {
    let isValid = true;

    if (!nameRegex.test(nameValue)) {
      SetNameError(true);
      isValid = false;
    } else {
      SetNameError(false);
    }

    if (!phoneRegex.test(phoneValue)) {
      SetPhoneError(true);
      isValid = false;
    } else {
      SetPhoneError(false);
    }

    if (isValid) {
      goToNextPage();
    }
  };

  useEffect(() => {
    if (nameValue && phoneValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [nameValue, phoneValue]);

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="welcome">
          <button onClick={toggleTheme} className="themeBtn">Тема</button>
          <Header
            headerType="h1"
            headerText={"Добро пожаловать в квиз от лучшего учебного центра"}
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              errorText="Введите имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppLabel
              labelText="Ваш номер"
              errorText="Введите номер в правильном формате"
              id="phone"
              isRequired={true}
              labelChange={setPhoneValue}
              labelValue={phoneValue}
              inputPlaceholder="+998 9- --- -- --"
              inputType="text"
              hasError={phoneError}
            />
            <AppButton
              buttonText={"Далее"}
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
