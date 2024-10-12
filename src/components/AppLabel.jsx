import React from "react";

export const AppLabel = ({
  labelText,
  errorText,
  inputPlaceholder,
  inputType,
  id,
  labelValue,
  labelChange,
  isRequired,
  hasError
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}` } htmlFor={id}>
      {labelText}
      <input
      value={labelValue}
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        onChange={(e)=> labelChange(e.target.value)}
        placeholder={inputPlaceholder}
      />
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
  );
};
