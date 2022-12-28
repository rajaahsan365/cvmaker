import { schema } from "../validation/ValidationSchema";

export const getFieldsByCategory = (fields = [], key) => {
  return fields.filter(({ category = "" }) => category === key);
};

export const getFormInitialValue = (array) => {
  if (Array.isArray(array)) {
    // filter Array to remove button
    const arr = array && array.filter((obj) => obj.inputType !== "button");

    // filter array to remove name with dots
    const newArr = arr.filter(({ name }) => name.includes(".") != true);

    // assign inital value to form
    return newArr.reduce(
      (acc, value) => ({
        ...acc,
        [value.name]:
          value.inputType === "fieldArray" || value.inputType === "arrayList"
            ? [getFormInitialValue(value.childs)]
            : "",
      }),
      {}
    );
  }

  return {};
};

export const getFormValidation = (array) => {
  const arr = array
    .filter((obj, ind) => obj.name !== "submit")
    .map(({ name }) => name);
  const validationNames = array.map(({ validationtype }) => validationtype);
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
