import { FieldArray } from "formik";
import React from "react";
import GenerateFields from "../GenerateFields";
import { getFormInitialValue } from "../utility/formUtils";

const ArrayField = (props) => {
  const { name, childs = "", withValidation } = props;

  const pushObject=getFormInitialValue(childs)
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
          <div className="px-3">
            {Array.isArray(values[props.name]) &&
              values[props.name].map((val, indNum) => (
                <div className="row border rounded py-2 my-2" key={indNum}>
                  {childs &&
                    childs.map(
                      (
                        fieldAttribute,
                        index
                      ) => {
                        const {name,id=""}=fieldAttribute
                        const newId=id?`${props.name}.${indNum}.${name}`:""
                        const newName=`${props.name}.${indNum}.${name}`
                        fieldAttribute={...fieldAttribute,name:newName,id:newId}
                        return (
                          <GenerateFields
                            inputAttributes={fieldAttribute}
                            key={index}
                            formActions={form}
                            value={values[props.name][indNum][name]}
                            withValidation={withValidation}
                          />
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
              onClick={() => push(pushObject)}
            >
              + Add New Section
            </button>
          </div>
        );
      }}
    />
  );
};

export default ArrayField;
