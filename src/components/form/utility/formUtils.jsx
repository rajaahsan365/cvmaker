import GenerateFieldsByCondition from "../form-elements/GenerateFieldsByCondition";
import { getValidations } from "../validation/ValidationSchema";

export const getFieldsByCategory = (fields = [], key) => {
  return fields.filter(({ category = "" }) => category === key);
};

export const getFilterFields = (array = []) => {
  let field = array.filter((obj) => {
    return (
      obj.inputType !== "submit" &&
      obj.inputType !== "button" &&
      obj.inputType !== "h1" &&
      obj.inputType !== "h2" &&
      obj.inputType !== "h3" &&
      obj.inputType !== "h4" &&
      obj.inputType !== "h5" &&
      obj.inputType !== "h6" &&
      obj.inputType !== "p"
    );
  });

  return field;
};
export const getFormInitialValue = (array) => {
  // filter Array to remove button and text fields
  const arr = getFilterFields(array);

  // filter array to remove name with dots
  const newArr = arr.filter(({ name = "" }) => name.includes(".") != true);

  // assign inital value to form
  return newArr.reduce(
    (acc, value) => ({
      ...acc,
      [value.name]:
        value.inputType === "arrayField" || value.inputType === "arrayList"
          ? [getFormInitialValue(value.childs)]
          : "",
    }),
    {}
  );
};

export let getFormValidations = (array) => {
  // Remove Buttons and Text fields
  let newArray = getFilterFields(array);

  // Validation
  const validationObject = newArray.reduce(
    (acc, value) => ({
      ...acc,
      [value.name]: getValidations(value),
    }),
    {}
  );
  return validationObject;
};

// Return file Acceptance type
export const getFileTypes = (inputType) => {
  switch (inputType) {
    case "image":
      return "image/*";
    case "document":
      return "*/*:not(image/*):not(video/*)";
    case "audio":
      return "audio/*";
    case "video":
      return "video/*";
    case "multimedia":
      return "audio/*, video/*";
    default:
      return "*";
  }
};

// Return svg according to file types
export const getFileIcon = (file) => {
  switch (file.type.split("/")[0]) {
    case "audio":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-file-earmark-music text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
        </svg>
      );
    case "video":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-file-earmark-play text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
        </svg>
      );
    case "image":
      return (
        <img
          src={URL.createObjectURL(file)}
          alt="Image"
          // onLoad={() => setIsLoading(false)}
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-file-earmark-medical text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
        </svg>
      );
  }
};

export const getOnChangeMethod = (type) => {
  if (
    type === "select" ||
    type === "async-dropdown" ||
    type === "file" ||
    type === "files" ||
    type === "audio" ||
    type === "audios" ||
    type === "video" ||
    type === "videos" ||
    type === "document" ||
    type === "documents" ||
    type === "multimedia" ||
    type === "multimedias" ||
    type === "image" ||
    type === "images"
  ) {
    return true;
  }
  return false;
};

// Return Conditional Fields

export const getConditionalFields = (
  values,
  fields = {},
  formActions,
  withValidation
) => {
  return Array.isArray(values)
    ? values.map(
        (value) =>
          Object.keys(fields).includes(value) && (
            <GenerateFieldsByCondition
              withValidation={withValidation}
              formActions={formActions}
              fields={fields[value]}
            />
          )
      )
    : Object.keys(fields).includes(values) && (
        <GenerateFieldsByCondition
          withValidation={withValidation}
          formActions={formActions}
          fields={fields[values]}
        />
      );
};
