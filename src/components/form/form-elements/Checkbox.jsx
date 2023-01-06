import { FastField } from "formik";
import React from "react";
import { getConditionalFields } from "../utility/formUtils";

const CheckBox = (props) => {
  const {
    inputType,
    className = "",
    formActions = {},
    conditionalFields = "",
    id = "",
    options = [],
    value,
    withValidation,
    ...other
  } = props;

  const { values } = formActions;

  return (
    <>
      <div className="d-flex flex-wrap">
        {options.map((ind, key) => {
          return (
            <div className="p-0 me-3" key={key}>
              <FastField
                type={inputType}
                className={`form-check-input ${className}`}
                value={ind.value}
                checked={
                  Array.isArray(value)
                    ? value.includes(ind.value)
                    : value == ind.value
                }
                {...other}
              />
              <label htmlFor={ind.value} className="form-check-label ms-1">
                {ind.label}
              </label>
            </div>
          );
        })}
      </div>

      {conditionalFields && getConditionalFields(values[other.name],conditionalFields,formActions,withValidation)}
    </>
  );
};

export default CheckBox;
