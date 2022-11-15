import { schema } from "../components/form/ValidationSchema";

export const objectIsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getFieldsByCategory = (fields = [], key) => {
  return fields.filter(({ category = "" }) => category === key);
};

export const getDateandTime = () => {
  return new Date().toLocaleString();
};

export const getFormInitialValue = (obj) => {
  const arr = obj.filter((obj, ind) => obj.name !== "submit");
  const newArr = arr.filter(({ name }) => name.includes(".") != true);
  return newArr.reduce(
    (acc, value) => ({
      ...acc,
      [value.name]: value.inputType === "fieldArray" ? [] : "",
    }),
    {}
  );
};

export const getFormValidationObject = (obj) => {
  const arr = obj
    .filter((obj, ind) => obj.name !== "submit")
    .map(({ name }) => name);
  const validationNames = obj.map(({ validationtype }) => validationtype);
  return arr.reduce(
    (acc, value, ind) => ({
      ...acc,
      [value]: validationNames[ind]
        ? schema[validationNames[ind]]
        : schema.name,
    }),
    {}
  );
};
