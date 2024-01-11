import React, { useRef, useState, useEffect } from "react";
import style from '../style/contact.css'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from './NavBar';


const SMTP = () => {
    const form = useRef();
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      message: "",
    });
  
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_rv3ltxg",
          "template_80pjlbk",
          form.current,
          "Lvk1L6c9LoarSAiee"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
  
            setFormData({
              user_name: " ",
              user_email: " ",
              message: " ",
            });
  
       
            toast.success("Thank you for contacting us!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 1000 * 60 * 60); 
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);


  return (
    <div className='contactdiv'>
        <NavBar/>
    <div className='a'>
      <div className='contactimg'>
        <div className='empty'></div>
        <div className='contactinfo'>

          <span className='title1'>Contact Us</span>
          <form ref={form} onSubmit={sendEmail}>
          <table className='table2'>
            <tr>
              <td className='txt'>Name</td>
                    <td><input type='textarea' id="contact-username" className="white-textarea"  /></td>

            </tr>
            <tr>
              <td className='txt'>Email</td>
                    <td><input type='textarea' id="contact-username" className="white-textarea"  /></td>

            </tr>
            <tr>
              <td className='txt'>Message</td>
                    <td><input type='textarea' id="contact-username" className="white-textarea"  /></td>

            </tr>
            <tr>
              <td ></td>
                    <td>  <input
                  type="submit"
                  defaultValue="Submit"
                  value="Submit"
                  className="SubmitForm"
                /></td>

            </tr>

            



          </table>
          </form>
        </div>
      </div>

      <div className='copyright' > © {currentYear} VelvetDelights. All rights reserved.</div>
      <ToastContainer/>
    </div>
  </div>
  )
}

export default SMTP