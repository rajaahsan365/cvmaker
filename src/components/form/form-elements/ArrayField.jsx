import React from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { getFormInitialValue } from "../../../assets/utils";
import Input from "../Input";
const ArrayField = ({ withValidation, handleChange, values, ...props }) => {
  const fieldsName = getFormInitialValue(props.fields);

  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <div>
          {values[props.name].map((_, indNum) => (
            <div className="row" key={indNum}>
              {props.fields &&
                props.fields.map(
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
                        {
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
                              <Input
                                onChange={handleChange}
                                attributes={{
                                  ...formAttributes,
                                }}
                                name={`${props.name}.${indNum}.${name}`}
                              />

                              {suggestion && (
                                <span className="lead mb-0">
                                  <small>{suggestion}</small>
                                </span>
                              )}
                              {withValidation && (
                                <ErrorMessage
                                  className="text-danger mt-2 mx-3"
                                  name={formAttributes.name}
                                  component="div"
                                />
                              )}
                            </div>
                          </div>
                        }
                      </React.Fragment>
                    );
                  }
                )}

              <div className="mt-2 d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => arrayHelpers.remove(indNum)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            className="btn btn-success my-1"
            type="button"
            onClick={() => arrayHelpers.push(fieldsName)}
          >
            + Add New Section
          </button>
        </div>
      )}
    />
  );
};

export default ArrayField;
