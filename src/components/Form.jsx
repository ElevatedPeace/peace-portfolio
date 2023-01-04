import "./Form.css";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

import React, { useRef } from 'react'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm(
      'service_fpa9k9b', 
      'template_7vofbag', 
      form.current, 
      'iIiSfZ7aIlKWOtLgy'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
          })
      },
       (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, Something Went Wrong"
          })
      }
      );
      e.target.reset()
  };

  return (
    <div className="form">
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <textarea name="message" />

      <input type="submit" value="Send" className="btn"/>
    </form>

    </div>

    
  );

  
};

export default Form
