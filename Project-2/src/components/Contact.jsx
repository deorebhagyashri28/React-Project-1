import React from 'react';
import styles from "./Contact.module.css";
function Contact() {
  console.log(styles)
  return (
    <div className="container">
      <div >        
        <h1 className={styles.contactHeader}>CONTACT US</h1>
      </div>
      <div>        
        <p className={styles.details}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, 
          OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>
    </div>
  )
}

export default Contact