import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { getConditionalFields } from "../utility/formUtils";

const AsyncDropDown = (props) => {
  const {
    inputType,
    url,
    formActions,
    isMulti = false,
    getOptionLabel = "",
    getOptionValue = "",
    onChange,
    value,
    name,
    placeholder = "Select",
    dependentFieldName = "",
    conditionalFields = "",
    withValidation,
    className = "",
  } = props;
  const [options, setOptions] = useState([]);

  const { values } = formActions;
  const fetchValue = dependentFieldName && values[dependentFieldName];

  const getValues = (data) => {
    const val = Array.isArray(fetchValue)
      ? fetchValue.reduce(
          (acc, obj) => (acc = [...acc, ...data[obj?.value]]),
          []
        )
      : data[fetchValue.value];
    return val;
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setOptions(dependentFieldName ? getValues(data) : data));
  }, [url, fetchValue]);

  const loadOptions = (input, callback) => {
    return callback(
      options?.filter((i) =>
        i?.label.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  const handleChange = (value) => {
    onChange(name, value);
  };
  return (
    <>
      <AsyncSelect
        defaultValue={value}
        placeholder={placeholder}
        className={`basic-multi-select ${className}`}
        onChange={handleChange}
        getOptionLabel={(option) =>
          getOptionLabel ? option[getOptionLabel] : option.label
        }
        getOptionValue={(option) =>
          getOptionValue ? option[getOptionValue] : option.value
        }
        isMulti={isMulti}
        loadOptions={loadOptions}
        defaultOptions={options}
      />

      {conditionalFields &&
        getConditionalFields(values[name], conditionalFields, formActions,withValidation)}
    </>
  );
};

export default AsyncDropDown;
