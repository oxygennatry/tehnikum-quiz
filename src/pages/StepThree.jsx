import React from "react";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { List } from "../components/List";

const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
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
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <ProgressBar currentStep={3}/>
          <div className="question">
            <Header headerText="3. Занимательный вопрос" headerType="h2"/>
            <List/>
            <LinkButton path="/step-four"/>
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
