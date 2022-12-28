import { ErrorMessage, FastField } from "formik";
import React from "react";

const Input = (props) => {
  const {
    name,
    inputType = "text",
    placeholder = "",
    required = false,
    id = "",
    fieldClass = "",
    fieldStyle = "",
    disabled = false,
    ...other
  } = props;
  return (
    <FastField
      name={name}
      id={id}
      type={inputType}
      required={required}
      placeholder={placeholder}
      style={fieldStyle ? fieldStyle : {}}
      className={`form-control ${fieldClass}`}
      disabled={disabled}
      {...other}
    />
  );
};

export default Input;
