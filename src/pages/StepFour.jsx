import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { AppVariant } from "../components/AppVariant";

const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4}/>
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header headerText="4. Занимательный вопрос" headerType="h2"/>
            <AppVariant/>
            <LinkButton path="/thanks"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
