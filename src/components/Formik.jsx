import React from "react";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  FastField,
} from "formik";
import * as yup from "yup";
const Formik1 = () => {
  // const validationSchema = yup.object({
  //   name: yup.string().required(),
  //   phone: yup.number().min(1).max(11).required(),
  // });
  console.log("first");
  const handleChange = (val) => {
    console.log(val);
  };
  return (
    <Formik
      initialValues={{
        friends: [0],
        social: {
          facebook: "",
          twitter: "",
        },
      }}
      onSubmit={handleChange}
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={(arrayHelpers) => {
              console.log("FieldArray", arrayHelpers);
              return (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((friend, index) => (
                      <div key={index}>
                        <Field name={`friends.${index}`} type="number" />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add New Section
                    </button>
                  )}
                </div>
              );
            }}
          />
          {/* <label htmlFor="">Social:</label>
          <br />
          <br />
          <label>Facebook</label>
          <Field name="social.facebook" type="text" />
          <br />
          <br />
          <label>Twitter</label>
          <Field name="social.twitter" type="text" />
          <br />
          <br /> */}
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Formik1;
