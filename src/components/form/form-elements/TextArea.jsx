import { FastField } from "formik";
import React from "react";

const TextArea = (props) => {
  const { inputType, rows = 6,formActions, className = "" ,...other} = props;
  return (
    <FastField
      as={inputType}
      {...other}
      rows={rows}
      className={`form-control ${className}`}
    />
  );
};

export default TextArea;
