import React from "react";
import Select from "react-select";
import { getConditionalFields } from "../utility/formUtils";
const Dropdown = (props) => {
  const {
    placeholder = "Select",
    name,
    inputType,
    className = "",
    options = [],
    value,
    id = "",
    conditionalOptions = "",
    dependentFieldName = "",
    conditionalFields = "",
    onChange,
    getOptionLabel = "",
    getOptionValue = "",
    formActions,
    withValidation,
    ...other
  } = props;

  const { values } = formActions;

  const fetchValue = dependentFieldName && values[dependentFieldName];

  //
  let newOptions = conditionalOptions
    ? Array.isArray(fetchValue)
      ? fetchValue.reduce(
          (acc, obj) => (acc = [...acc, ...conditionalOptions[obj?.value]]),
          []
        )
      : conditionalOptions[fetchValue?.value]
    : options;

  const handleChange = (value) => {
    onChange(name, value);
  };
  return (
    <>
      <Select
        defaultValue={value}
        placeholder={placeholder}
        className={`basic-multi-select ${className}`}
        options={dependentFieldName ? newOptions : options}
        getOptionLabel={(option) =>
          getOptionLabel ? option[getOptionLabel] : option.label
        }
        getOptionValue={(option) =>
          getOptionValue ? option[getOptionValue] : option.value
        }
        classNamePrefix="select"
        onChange={handleChange}
        {...other}
      />

      {conditionalFields &&
        getConditionalFields(values[name], conditionalFields, formActions,withValidation)}
    </>
  );
};

export default Dropdown;
