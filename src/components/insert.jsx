import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  
  date: Yup.date()
    .required("Required"),
    message: Yup.string().required("Required")
});

export default () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };
  const handleOnSubmit = (values, actions) => {

   /* axios({
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });*/
    axios({
      method: "POST",
      url: "http://localhost:4000",
      data: {
        ref: 'AA00005',
        people: 2,
        email: 'berl@test.com',
        date: '2020-08-09',
        time: '6:00:00'
      }
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <h1>Table reservation</h1>
      <Formik
        initialValues={{ ref: "" , people: "", email: "", date: "", time: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate>
            <div><label htmlFor="people">Number of person(s):</label></div>
            <div> <Field id="people" type="number" name="people" /></div>
            <div><ErrorMessage name="people" className="errorMsg" component="p" /></div>

            <div><label htmlFor="email">Email:</label></div>
            <div><Field id="email" type="email" name="email" /></div>
            <div><ErrorMessage name="email" className="errorMsg" component="p" /></div>

            <div><label htmlFor="date">Date:</label></div>
            <div><Field id="date" type="date" name="date" /></div>
            <div><ErrorMessage name="date" className="errorMsg" component="p" /></div>
            <div><label htmlFor="time">Time:</label></div>
            <div><Field id="time" name="time" as="select" placeholder="time">
   <option value="6:00:00">6:00:00</option>
   <option value="6:30:00">6:30:00</option>
   <option value="7:00:00">7:00:00</option>
   <option value="7:30:00">7:30:00</option>
   <option value="8:00:00">8:00:00</option>
 </Field></div>

 <p><button type="submit" disabled={isSubmitting}>
              Submit
            </button></p>
            {serverState && (
              <p className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};