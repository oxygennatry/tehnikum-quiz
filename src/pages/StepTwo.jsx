import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header"
import { AppLabel }from "../components/AppLabel"
import { AppList } from "../components/AppList";



const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2}/>
          <div className="question">
          <Header headerText="1. Занимательный вопрос" headerType="h2"/>
            <AppList/>
            <LinkButton path="/step-three"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
