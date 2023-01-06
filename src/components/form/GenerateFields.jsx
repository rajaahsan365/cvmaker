import { ErrorMessage } from "formik";
import React from "react";
import FormikControl from "./FormikControl";
import { getOnChangeMethod } from "./utility/formUtils";

const GenerateFields = ({
  formActions,
  inputAttributes,
  withValidation,
  value = "",
}) => {
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
    console.log("🚀 ~ file: GenerateFields.jsx:22 ~ errors", errors)

  const {
    label,
    name,
    category,
    suggestion = "",
    labelStyle = "",
    wrapperStyle = "",
    wrapperClass = "",
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
            formAttributes.inputType === "arrayField"
              ? "col-12 my-2"
              : wrapperClass
              ? wrapperClass
              : "col-md-6 my-2"
          }`}
          style={wrapperStyle ? wrapperStyle : {}}
        >
          {label && (
            <h5
              className={`h6 ${labelClass}`}
              htmlFor={name}
              style={labelStyle ? labelStyle : {}}
            >
              {label}
            </h5>
          )}
          <div
            className={fieldParentClass ? fieldParentClass : ""}
            style={fieldParentStyle ? fieldParentStyle : {}}
          >
            <FormikControl
              onChange={
                getOnChangeMethod(formAttributes.inputType)
                  ? setFieldValue
                  : handleChange
              }
              name={name}
              formActions={formActions}
              value={value ? value : values[name]}
              withValidation={withValidation}
              {...formAttributes}
            />
            {suggestion && (
              <span className="lead mb-0">
                <small>{suggestion}</small>
              </span>
            )}

            {withValidation &&
              (formAttributes.inputType == "arrayField" ? (
                typeof errors[name] == "string" && (
                  <ErrorMessage
                    name={name}
                    component={"div"}
                    className="text-danger"
                  />
                )
              ) : (
                <ErrorMessage
                  name={name}
                  component={"div"}
                  className="text-danger"
                />
              ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GenerateFields;
