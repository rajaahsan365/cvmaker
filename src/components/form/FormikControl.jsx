import React from "react";
import ArrayField from "./form-elements/ArrayField";
import AsyncDropDown from "./form-elements/AsyncDropDown";
import Button from "./form-elements/Button";
import CheckBox from "./form-elements/CheckBox";
import Dropdown from "./form-elements/Dropdown";
import File from "./form-elements/File";
import Input from "./form-elements/Input";
import MutlipleFiles from "./form-elements/MutlipleFiles";
import Password from "./form-elements/Password";
import Text from "./form-elements/Text";
import TextArea from "./form-elements/TextArea";

const FormikControl = (props) => {
  const { validations = {}, withValidation, ...otherProps } = props;
  switch (props.inputType) {
    case "select":
      return <Dropdown withValidation={withValidation} {...otherProps} />;
    case "async-dropdown":
      return <AsyncDropDown withValidation={withValidation} {...otherProps} />;
    case "textarea":
      return <TextArea {...otherProps} />;
    case "radio":
    case "checkbox":
      return <CheckBox withValidation={withValidation} {...otherProps} />;
    case "arrayField":
      return <ArrayField withValidation={withValidation} {...otherProps} />;
    case "password":
      return <Password {...otherProps} />;
    case "image":
    case "file":
    case "document":
    case "audio":
    case "video":
    case "multimedia":
      return <File {...otherProps} />;
    case "images":
    case "files":
    case "documents":
    case "audios":
    case "videos":
    case "multimedias":
      return <MutlipleFiles {...otherProps} />;
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
      return <Text {...otherProps} />;
    case "button":
    case "submit":
      return <Button {...otherProps} />;
    default:
      return <Input {...otherProps} />;
  }
};

export default FormikControl;
