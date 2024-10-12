import React from "react";

const Span = ({ text, className = ""}) => {
  return (
    <span
      className={`${className}`}
    >
      {text}
    </span>
  );
};

export default Span;
