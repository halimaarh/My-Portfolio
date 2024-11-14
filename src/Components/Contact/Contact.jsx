import React, { useRef } from "react";
import axios from "axios";
import "./Contact.css";
import theme_pattern from "../../assets/Image/theme.png";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

export const Contact = () => {
  const formRef = useRef(null); // useRef hook to access form

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current); // Access form data
    const options = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    axios
      .post("https://usebasin.com/f/55ef9513382b", formData, options)
      .then((response) => {
        if (response.status === 200) {
          console.log("Success");
          alert("Your message has been sent!");
        } else {
          console.log("Fail");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm available for new projects and excited to bring your vision to
            life with custom front-end development solutions. Feel free to reach
            out anytime!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>shifatuhalimah20@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>081-0055-8639</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Surulere, Lagos State, Nigeria</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
