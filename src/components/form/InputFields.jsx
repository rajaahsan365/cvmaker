import React from "react";
import FormikControl from "./FormikControl";

const InputFields = ({ formActions, inputAttributes, withValidation,value="",fieldName=""}) => {
  console.log("🚀 ~ file: InputFields.jsx:5 ~ InputFields ~ value", value)
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formActions;

  const {
    wrapperClass,
    label,
    name,
    suggestion = "",
    labelStyle = "",
    labelParentStyle = "",
    labelParentClass = "",
    labelClass = "",
    fieldParentStyle = "",
    fieldParentClass = "",
    ...formAttributes
  } = inputAttributes;
  return (
    <React.Fragment>
      {formAttributes.inputType === "hidden" ? (
        <input type={"hidden"} attributes={formAttributes} />
      ) : (
        <div
          className={`field-wrapper align-center ${
            labelParentClass ? labelParentClass : "col-6"
          }`}
          style={labelParentStyle ? labelParentStyle : {}}
        >
          {label && (
            <label
              className={`h5 m-2 ${labelClass}`}
              htmlFor={name}
              style={labelStyle ? labelStyle : {}}
            >
              {label}
            </label>
          )}
          <div
            className={fieldParentClass ? fieldParentClass : ""}
            style={fieldParentStyle ? fieldParentStyle : {}}
          >
            <FormikControl
              onChange={
                formAttributes.inputType === "select"
                  ? setFieldValue
                  : handleChange
              }
              name={fieldName?fieldName:name}
              value={value?value:values[name]}
              {...formAttributes}
            />
            {suggestion && (
              <span className="lead mb-0">
                <small>{suggestion}</small>
              </span>
            )}
            {withValidation && (
              <ErrorMessage
                style={{ color: "red" }}
                name={fieldName?fieldName:name}
                component="p"
              />
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default InputFields;
