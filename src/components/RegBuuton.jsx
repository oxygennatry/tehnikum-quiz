import React from "react";

export const RegButton = ({ 
    buttonText, 
    buttonType, 
    isDisabled,
    buttonClick
}) => {
  return (
    <button 
    className="regBtn"
    disabled={isDisabled} 
    type={buttonType === "submit" ? "submit": "button"} 
    id="next-btn"
    onClick={buttonClick}
    >
      {buttonText}
    </button>
  );
};
