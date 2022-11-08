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

export const getArrayValuetoEmptyObject = (arr) => {
  return arr.reduce((acc, value) => ({ ...acc, [value]: "" }), {});
};

export const getArrayValuetoValidationObject = (arr, validationNames) => {
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
