import React from "react";
import GenerateFields from "../GenerateFields";
import { getFormInitialValue } from "../utility/formUtils";

const GenerateFieldsByCondition = ({ formActions, fields, withValidation }) => {
  let { values } = formActions;

  let initalValues = getFormInitialValue(fields);

  values = { ...values, ...initalValues };

  console.log(
    "🚀 ~ file: GenerateFieldsByCondition.jsx:6 ~ GenerateFieldsByCondition ~ values",
    values
  );
  return (
    <div className="row">
      {fields.map((field) => (
        <GenerateFields
          formActions={formActions}
          inputAttributes={field}
          withValidation={withValidation}
        />
      ))}
    </div>
  );
};

export default GenerateFieldsByCondition;
