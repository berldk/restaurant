import React from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";


 class Booking extends React.Component {
   render() {
    return (
   <div>
     <h1>Table reservation</h1>
     <Formik
       initialValues={{ people: '', email: '', date: '', time: '' }}
       validate={values => {
         const errors = {};
         if (!values.people){
           errors.people = 'Required';
         }
         if (!values.date){
          errors.date = 'Required';
        }
        if (!values.time){
          errors.time = 'Required';
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
       
      }) => 
      
      
      
      
      
      
      
      
      
      
      (
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
 /*);
 
 export default Booking;*/

 )
}
}
export default Booking;

















/*import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      tablesdata: [],
    };
}

sendPost(e){
  e.preventDefault();
  var url = 'http://localhost:4000/data';
  axios.post(url, {
    
    people: this.inputpeople.value,
    email: this.inputemail.value,
    date: this.inputdate.value,
    time: this.inputtime.value
  })
  .then(function (response) {
    console.log(response);
    alert(response.data.email);
  })
  .catch(function (error) {
    console.log(error);
    alert(error);
  });
  
  this.inputpeople.value = 1;
  this.inputemail.value = "";
  this.inputdate.value = "";
  this.inputtime.value = "";
};

render() {
 
  return (
    <div className="container"> 
    <h1 className="text-center" >Table reservation</h1>
    <div className="text-center">Thank you for choosing Alamaison restaurant. <br>
    </br>You can book a table to save time using the form below.</div>
   <div className="row">
  
 
   
<form  style={{padding: '2% 10%'}}>

  <div className="form-group" >
    <input className="form-control" type="number" id="people" 
    ref={ inpeople => this.inputpeople = inpeople }
    placeholder="Number of person(s)"/>
  </div>

  <div className="form-group" >
    <input className="form-control" type="email" id="email"  required

    ref={ inemail => this.inputemail = inemail}
  
    placeholder="Email"/>
  </div>

  <div className="form-group">
    <input className="form-control" type="date" id="date" 
    ref={ indate => this.inputdate = indate }
    placeholder="Date"/>
  </div>

  <div className="form-group" >
    <input className="form-control" type="time" id="time" 
    ref={ intime => this.inputtime = intime }
    placeholder="Time"/>
  </div>
  
  
  <button className="btn btn-primary" 
  onClick={this.sendPost.bind(this)}>BOOK</button>
  

</form>
    
   </div>  </div>
      
  );
 }
 }
 
export default App;*/
