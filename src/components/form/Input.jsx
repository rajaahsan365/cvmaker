import React from "react";
import { getInputType } from "./Form.helper.jsx";
const Input = ({ attributes, ...elementProps }) => {
  const { inputType, onDelete, buttonType, ...otherProps } = attributes;
  const element = getInputType({ inputType });
  const clonnedComponent = React.cloneElement(element, {
    ...elementProps,
    ...otherProps,
  });
  return clonnedComponent;
};

export default Input;
