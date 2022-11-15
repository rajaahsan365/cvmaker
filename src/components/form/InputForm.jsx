import React, { Children } from "react";
import Input from "./Input";
import { Formik, Form, ErrorMessage, FieldArray, Field } from "formik";
import { useState } from "react";
import {
  getArrayValuetoEmptyObject,
  getArrayValuetoValidationObject,
} from "../../assets/utils";
import * as yup from "yup";
const InputForm = ({
  initialFieldValues = [],
  formData = [],
  onFormSubmit = "",
  withValidation = false,
  formValidation,
  extraInputClass,
  Children,
  ...otherProps
}) => {
  const [formInitialValues, setFormInitialValues] = useState({});

  const initialValues = getArrayValuetoEmptyObject(
    initialFieldValues.filter((obj, ind) => obj.name !== "submit")
  );
  console.log(
    "🚀 ~ file: InputForm.jsx ~ line 24 ~ initialValues",
    initialValues
  );

  const validation = yup.object().shape(
    getArrayValuetoValidationObject(
      initialFieldValues
        .filter((obj, ind) => obj.name !== "submit")
        .map(({ name }) => name),
      initialFieldValues.map(({ validationtype }) => validationtype)
    )
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={withValidation ? validation : ""}
      onSubmit={onFormSubmit ? onFormSubmit : (values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form action="" className="form row" {...otherProps}>
          {formData.map(
            (
              { wrapperClass, label, name, suggestion = "", ...formAttributes },
              index
            ) => {
              return (
                <React.Fragment key={index}>
                  {formAttributes.inputType === "hidden" ? (
                    <Input attributes={formAttributes} />
                  ) : (
                    <div
                      className={`field-wrapper align-center ${extraInputClass} ${
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
                          onChange={
                            formAttributes.inputType === "select"
                              ? setFieldValue
                              : handleChange
                          }
                          attributes={{
                            ...formAttributes,
                            values,
                            withValidation,
                            handleChange,
                          }}
                          name={name}
                        />

                        {suggestion && (
                          <span className="lead mb-0">
                            <small>{suggestion}</small>
                          </span>
                        )}
                        {withValidation && (
                          <ErrorMessage
                            className="text-danger mt-2 mx-3"
                            name={name}
                            component="div"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            }
          )}
          {Children && Children}
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
