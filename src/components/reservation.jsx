import React from 'react';
import { Formik } from 'formik';

const Booking = () => (
   <div>
     <h1>Table reservation</h1>
     <Formik
       initialValues={{ people: '', email: '', date: '', time: '' }}
       validate={values => {
         const errors = {};
         if (!values.people){
           errors.people = 'Required';
         }
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
      }) => (
         <form onSubmit={handleSubmit}>
            Number of people<br/>
            <input
             type="number"
             name="people"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.people}
           />
           {errors.people && touched.people && errors.people}
           <br />
           Email<br/>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <br />
           Date<br/>
           <input
             type="date"
             name="date"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.date}
           />
           {errors.date && touched.date && errors.date}
           <br />
           Time<br/>
           <input
             type="time"
             name="time"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.time}
           />
           {errors.time && touched.time && errors.time}
           <br/><br/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Booking;
