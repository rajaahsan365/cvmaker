import { Form, Formik } from "formik";
import React from "react";
import GenerateFields from "./GenerateFields";
import { getFormInitialValue, getFormValidations } from "./utility/formUtils";
import * as Yup from "yup";

const FormContainer = ({
  initialFieldValues = [],
  formData = [],
  onFormSubmit = "",
  formValidation = [],
  extraInputClass = "",
  children,
  ...otherProps
}) => {

  // Toggle Validations
  const withValidation=formValidation?true:false

  // Get form Initial Value
  const initialValues = Array.isArray(initialFieldValues)
    ? getFormInitialValue(initialFieldValues)
    : initialFieldValues;

    // Get Form Validaton Schema
  const validationSchema = Yup.object().shape(
    getFormValidations(formValidation)
  );
 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={withValidation ? validationSchema : ""}
      onSubmit={
        onFormSubmit
          ? onFormSubmit
          : (val) => {
              console.log("🚀 ~ file: FormContainer.jsx:110 ~ val", val);
              setFormValues([...formValues, val]);
            }
      }
      enableReinitialize={true}
    >
      {(formAttributes) => (
        <Form className="formikContainer row m-2">
          {formData.map((fieldAttribute, index) => {
            return (
              <GenerateFields
                key={index}
                inputAttributes={fieldAttribute}
                formActions={formAttributes}
                withValidation={withValidation}
              />
            );
          })}
          {children && children}
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
