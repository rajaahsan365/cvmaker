import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import FormikControl from "./FormikControl";
import * as yup from "yup";

const FormContainer = ({
  initialFieldValues = {},
  formData = [],
  onFormSubmit = "",
  withValidation = false,
  formValidation = {},
  extraInputClass = "",
  children,
  ...otherProps
}) => {

  const validation = yup.object().shape(formValidation);
  return (
    <Formik
      initialValues={initialFieldValues}
      enableReinitialize={true}
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
      }) => (
        <Form className="row">
          {formData.map(
            (
              { wrapperClass, label, name, suggestion = "", ...formAttributes },
              index
            ) => {
              return (
                <React.Fragment key={index}>
                  {formAttributes.inputType === "hidden" ? (
                    <input type={"hidden"} attributes={formAttributes} />
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
                        <FormikControl
                          onChange={
                            formAttributes.inputType === "select"
                              ? setFieldValue
                              : handleChange
                          }
                          name={name}
                          value={values[name]}
                          // withValidation={withValidation}
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
          {children && children}
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
