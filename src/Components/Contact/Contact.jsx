import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a53969a-edaf-4041-9b87-167008853a0a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();

      if (result.success) {
        alert(result.message);
      } else {
        alert("There was an error submitting the form.");
      } 
    } catch (error) {
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Connect With Me</h1>
        <img src={theme} alt="" />  
      </div> 
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anything</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p>siyadkundala10@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+91-7558001145</p> 
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location Icon" />
              <p>Calicut, Kerala, India</p> 
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' required/>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder='Enter your mail' name='email' required/>
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" id="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form> 
      </div> 
    </div>
  );
}

export default Contact;
