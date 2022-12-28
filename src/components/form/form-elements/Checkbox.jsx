import { FastField } from "formik";
import React from "react";

const CheckBox = (props) => {
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
    ...other
  } = props;
  return (
    <div style={{ display: "flex" }}>
      {options.map((ind, key) => {
        return (
          <div className="" style={{ marginRight: "5px" }} key={key}>
            <FastField
              type={inputType}
              className={`form-check-input ${fieldClass}`}
              name={name}
              value={ind.value}
              checked={
                Array.isArray(value)
                  ? value.includes(ind.value)
                  : value == ind.value
              }
              // id={ind.value}
              style={fieldStyle ? fieldStyle : {}}
              disabled={disabled}
            />

            <label htmlFor={ind.value} className="form-check-label">
              {ind.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
