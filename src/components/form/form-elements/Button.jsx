import React from "react";

const Button = (props) => {
  const {
    className = "btn-success",
    btnText = "Submit",
    inputType = "submit",
    formActions,
    value,
    ...other
  } = props;
  return (
    <button type={inputType} className={`btn ${className}`} {...other}>
      {btnText}
    </button>
  );
};

export default Button;
