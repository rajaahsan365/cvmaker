import { ErrorMessage, FastField } from "formik";
import React from "react";
import GenerateFields from "../GenerateFields";

const Input = (props) => {
  const {
    className = "",
    inputType = "text",
    conditionalFields = "",
    formActions,
    ...other
  } = props;
  return (
    <>
      <FastField name={other.name}>
        {() => {
          console.log(other.name);
          return (
            <input
              type={inputType}
              value
              className={`form-control ${className}`}
              {...other}
            />
          );
        }}
      </FastField>
    </>
  );
};

export default Input;
