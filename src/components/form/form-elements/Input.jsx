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
      <FastField
        type={inputType}
        className={`form-control ${className}`}
        {...other}
      />

      {/* {conditionalFields && other.values && (
        <GenerateFields
          inputAttributes={[conditionalFields.male]}
          formActions={formActions} 
        />
      )} */}
    </>
  );
};

export default Input;
