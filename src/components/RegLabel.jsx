import React from "react";

export const RegLabel = ({
  labelText,
  inputPlaceholder,
  inputType,
  labelValue,
  isRequired,
}) => {
  return (
    <label className="mail">
      {labelText}
      <input
      value={labelValue}
        required={isRequired}
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </label>
  );
};
