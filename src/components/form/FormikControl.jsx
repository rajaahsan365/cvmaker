import React from "react";
import ArrayField from "./form-elements/ArrayField";
import Button from "./form-elements/Button";
import CheckBox from "./form-elements/CheckBox";
import Dropdown from "./form-elements/Dropdown";
import Input from "./form-elements/Input";
import Password from "./form-elements/Password";
import TextArea from "./form-elements/TextArea";

const FormikControl = (props) => {
  switch (props.inputType) {
    case "select":
      return <Dropdown {...props} />;
    case "textarea":
    case "radio":
      return <CheckBox {...props} />;
    case "checkbox":
      return <CheckBox {...props} />;
    case "fieldArray":
      return <ArrayField {...props} />;
    case "button":
      return <Button {...props} />;
    case "password":
      return <Password {...props} />;
    case "text-editor":
    case "textarea":
      return <TextArea {...props} />;
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    default:
      return <Input {...props} />;
  }
};

export default FormikControl;
