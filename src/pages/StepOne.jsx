import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppButton } from "../components/AppButton"; 

const StepOne = () => {
  const navigate = useNavigate();
  const answerRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/; 
  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false); 
  const [checkBtn, setCheckBtn] = useState(true); 

  const goToNextPage = () => {
    navigate("/step-two");
  };

  const handleClick = () => {
    let isValid = true;

    
    if (!answerRegex.test(answerValue)) {
      setAnswerError(true);
      isValid = false;
    } else {
      setAnswerError(false);
    }

    
    if (isValid) {
      goToNextPage();
    }
  };

  
  useEffect(() => {
    setCheckBtn(answerValue.length === 0); 
  }, [answerValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Header headerText="1. Занимательный вопрос" headerType="h2" />
            <AppLabel
              inputType="text"
              isRequired={true}
              inputPlaceholder="Ваш ответ"
              errorText="Введите корректный ответ"
              name="answer"
              labelChange={setAnswerValue}
              hasError={answerError}
            />
            <AppButton
              buttonText={"Далее"}
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
