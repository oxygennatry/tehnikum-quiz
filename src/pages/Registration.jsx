import React from "react";
import { Header } from "../components/Header";
import { RegButton } from "../components/RegBuuton";
import { RegLabel } from "../components/RegLabel";


export const Registration = () => {

    return (
        
        <label className="registration__form" htmlFor="username">
           
             <Header
            headerType="h1"
            headerText={"Регистрация"}
          />
          <RegLabel
              labelText="Ваш e-mail"
              isRequired
              inputPlaceholder=""
              inputType="text"
            />
            <RegLabel
              labelText="Пароль"
              isRequired
              inputPlaceholder=""
              inputType="text"
            />
            <RegLabel
              labelText="Повтор пароля"
              isRequired
              inputPlaceholder=""
              inputType="text"
            />


        {/* <input type="text" name="mail" placeholder="ВВедите вашу почту" className="mail"/>
        <input type="text" name="password" placeholder="Ваш пароль" className="mail"/>
        <input type="text" name="password" placeholder="Повторите пароль" className="mail"/> */}
        <RegButton buttonText="Продолжит" />
        </label>
    )

}