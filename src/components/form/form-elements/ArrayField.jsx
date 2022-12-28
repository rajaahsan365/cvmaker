import { Field, FieldArray } from "formik";
import React from "react";
import FormikControl from "../FormikControl";

const ArrayField = (props) => {
  const { name, childs = "", withValidation = false } = props;
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => {
        const { form, push, remove } = arrayHelpers;
        const {
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          values,
        } = form;
        return (
          <>
            {Array.isArray(values[props.name]) &&
              values[props.name].map((val, indNum) => (
                <div key={indNum} className="row">
                  {childs &&
                    childs.map(
                      (
                        {
                          wrapperClass,
                          label,
                          name,
                          suggestion = "",
                          ...formAttributes
                        },
                        index
                      ) => {
                        return (
                          <React.Fragment key={index}>
                            {formAttributes.inputType === "hidden" ? (
                              <input
                                type={"hidden"}
                                attributes={formAttributes}
                              />
                            ) : (
                              <div
                                className={`field-wrapper align-center ${
                                  wrapperClass ? wrapperClass : "col-6"
                                }`}
                              >
                                {label && (
                                  <label className={`h5 m-2`} htmlFor={name}>
                                    {label}
                                  </label>
                                )}
                                <div
                                  className={
                                    formAttributes.className
                                      ? formAttributes.className
                                      : ""
                                  }
                                >
                                  <FormikControl
                                    onChange={
                                      formAttributes.inputType === "select"
                                        ? setFieldValue
                                        : handleChange
                                    }
                                    name={`${props.name}.${indNum}.${name}`}
                                    value={values[props.name][indNum][name]}
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
                                      name={name}
                                      component="p"
                                    />
                                  )}
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      }
                    )}
                  {/* Remove form List Button */}
                  <div className="mt-2 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => remove(indNum)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

            {/* Add Section Button */}
            <button
              className="btn btn-success my-1"
              type="button"
              onClick={() => push("")}
            >
              + Add New Section
            </button>
          </>
        );
      }}
    />
  );
};

export default ArrayField;
