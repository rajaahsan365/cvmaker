import React from "react";
import Select from "react-select";
const Dropdown = (props) => {
  const {
    name,
    inputType,
    placeholder = "",
    required = false,
    id = "",
    fieldClass = "",
    options = [],
    fieldStyle = "",
    disabled = false,
    value,
    isMulti = "",
    onChange,
    ...other
  } = props;

  const handleChange = (value) => {
    onChange(name, value);
  };
  return (
    <>
      <Select
        isMulti={isMulti ? isMulti : false}
        id={id}
        required={required}
        placeholder={placeholder ? placeholder : "Select"}
        style={fieldStyle ? fieldStyle : {}}
        // className={fieldClass}
        disabled={disabled}
        options={options}
        // getOptionLabel={option => option.name}
        // getOptionValue={option => option.id}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        {...other}
      />
    </>
  );
};

export default Dropdown;
