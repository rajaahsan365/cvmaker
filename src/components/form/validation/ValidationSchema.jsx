import * as yup from "yup";

export let schema = {
  name: yup.string().required().min(3).max(15),
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .max(10, "Password is too long - should be 6 chars maximum.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/,
      "atleast 1 numeric digit, 1 uppercase and 1 lowercase letter"
    ),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),

  age: yup.number().required().positive().integer(),
  email: yup.string().required().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
};
