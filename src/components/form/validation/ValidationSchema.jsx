import * as yup from "yup";
import { getFormValidations } from "../utility/formUtils";

export const getValidations = (object) => {
  const { childs = "", label, validations = {} } = object;

  const {
    customValidation = "",
    min = 3,
    max = 11,
    required = false,
    minLength = 10,
    maxLength = 100,
    type="name",
  } = validations;

  const requiredText = `${label} is required field`;
  const numberText = `${label} must be a number`;
  const minText = `${label} must be at least ${min} characters`;
  const maxText = `${label} must be at most ${max} characters`;
  const emailText = `${label} must be a valid email address`;
  const urlText = `${label} must be a valid URL`;

  // Generate Validation Schema on the basis of type

  let schema = !required
    ? {
        // If filed is not required
        name: yup.string().notRequired().min(min,minText).max(max,maxText),
        password: yup
          .string()
          .notRequired()
          .min(min, minText)
          .max(max, maxText)
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            "Atleast 1 numeric digit, 1 uppercase and 1 lowercase letter and Range is 6-10"
          ),
        confirm_password: yup
          .string()
          .notRequired()
          .oneOf([yup.ref("password"), null], "Passwords must match"),

        age: yup.number(numberText).notRequired().positive().integer(),
        email: yup.string().notRequired().email(emailText),
        url: yup.string().url(urlText),
        date: yup.date().default(function () {
          return new Date();
        }),
        arrayField: yup
          .array()
          .of(yup.object().shape(childs && getFormValidations(childs)))
          .min(1, `Need atleast ${min} ${label}`),
        checkbox: yup.array().of(yup.string().required()).min(1, minText),

        // date Validations
        startDate: yup.date().required(requiredText),
        midDate: yup.date()
          .notRequired()
          .min(yup.ref("startDate"), `${label} can't be before start date`)
          .max(yup.ref("endDate"), `${label} date can't be after last date`),
        endDate: yup.date()
          .notRequired()
          .min(yup.ref("startDate"), "end date can't be before start date"),
      }
    : {
        // if filed is Required
        name: yup.string().required(requiredText).min(min,minText).max(max,maxText),
        password: yup
          .string()
          .required(requiredText)
          .min(min, minText)
          .max(max, maxText)
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            "Atleast 1 numeric digit, 1 uppercase and 1 lowercase letter and Range is 6-10 gekki"
          ),
        confirm_password: yup
          .string()
          .required(requiredText)
          .oneOf([yup.ref("password"), null], "Passwords must match"),

        age: yup.number(numberText).required(requiredText).positive().integer(),
        email: yup.string().required(requiredText).email(emailText),
        url: yup.string().url().required(requiredText),
        date: yup
          .date()
          .required(requiredText)
          .default(function () {
            return new Date();
          }),
        arrayField: yup
          .array()
          .of(yup.object().shape(childs && getFormValidations(childs)))
          .min(min, `Need atleast ${min} ${label}`),
        radio: yup.string().required(requiredText),
        checkbox: yup.array().of(yup.string().required()).min(1, minText),

        // date Validations
        startDate: yup.date().required(requiredText),
        midDate: yup.date()
          .required(requiredText)
          .min(yup.ref("startDate"), `${label} can't be before start date`)
          .max(yup.ref("endDate"), `${label} date can't be after last date`),
        endDate: yup.date()
          .required(requiredText)
          .min(yup.ref("startDate"), "end date can't be before start date"),
      };

  return customValidation ? yup.matches(customValidation) : schema[type];
};
