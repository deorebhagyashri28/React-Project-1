import React from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import ButtonComponent from "../ButtonComponent";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
function ContactForm() {

  // here used concept of states which provide by react. react will rerender that item freshly.
  // it is a hook, and it provides us realtime value of that element along iwth function which
  //  helps to use that value.
const [name,setName] = useState("Enter Your name");
const [email,setEmail] = useState("Enter Your email");
const [text,setText] = useState("Enter something about your problem."); 
  
// simple function
const onSubmit=(event)=>{
event.preventDefault();
console.log(event);
setName(event.target[0].value);
setEmail(event.target[1].value);
setText(event.target[2].value)

}


  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <ButtonComponent
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="16px" fontWeight="600" />}
          />
          <ButtonComponent
            text="VIA CALL"
            icon={<FaPhone fontSize="16px" fontWeight="600" />}
          />
        </div>

        <ButtonComponent
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="16px" fontWeight="600" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea className={styles.textarea_style}  name="text" rows="8" />
          </div>
          <div className={styles.form_submit}>
          <ButtonComponent text="SUBMIT" />

          </div>
          <div>
            {
              name + "   " + email +"   "+ text
            }
          </div>
        </form>
      </div>

      <div className={styles.contactImage}>
        <img src="./images/Service 24_7-pana 1.png" alt="service" />
      </div>
    </section>
  );
}

export default ContactForm;
