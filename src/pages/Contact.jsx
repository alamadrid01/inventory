import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Contact.scss";
import back from "../components/assets/arrow.png";

function Contact() {
  const Navigate = useNavigate();
  return (
    <div className="contact">
      <img onClick={() => Navigate("/")} src={back} alt="back-arrow" />
      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <form action="">
        <div className="hold">
          <div className="a">
            <label htmlFor="fullName">Name</label>
            <input type="text" />
          </div>
          <div className="a">
            <label htmlFor="fullName">Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="message">
            <label htmlFor="message"> Message</label>
            <textarea ></textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
