import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
const Formik1 = () => {
  // const validationSchema = yup.object({
  //   name: yup.string().required(),
  //   phone: yup.number().min(1).max(11).required(),
  // });

  const handleChange = (val) => {
    console.log(val);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        password: "",
        gender: "",
        date: "",
        income: "",
        textArea: "",
        social: {
          facebook: "",
          twitter: "",
        },
      }}
      onSubmit={handleChange}
    >
      <Form>
        <label>Name:</label>
        <Field name="name" type="text" />
        <br />
        <ErrorMessage name="name" Style={{ color: "red" }} />
        <br />
        <label>phone:</label>
        <Field name="phone" type="number" />
        <br />
        <ErrorMessage name="phone" Style={{ color: "red" }} />
        <br />
        <label>Password:</label>
        <Field name="password" type="password" />
        <label>Gender:</label>
        <br /> <br />
        <label>Male:</label>
        <Field name="gender" value="male" type="radio" />
        <label>Female:</label>
        <Field name="gender" value="female" type="radio" />
        <br /> <br />
        <label>Date:</label>
        <Field name="date" type="date" />
        <br /> <br />
        <label>Income:</label>
        <Field name="income" as="select" multiple>
          <option value="0">0 rps</option>
          <option value="10">10 rps</option>
          <option value="2000">220 rps</option>
        </Field>
        <br /> <br />
        <label htmlFor="">text Area</label>
        <Field name="textArea" as="textarea" />
        <br /> <br />
        <label htmlFor="">Social:</label>
        <br />
        <br />
        <label>Facebook</label>
        <Field name="social.facebook" type="text" />
        <br />
        <br />
        <label>Twitter</label>
        <Field name="social.twitter" type="text" />
        <br />
        <br />
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default Formik1;
