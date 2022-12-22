import React from 'react'
import "./styles/Contact.scss"
import back from "./assets/arrow.png"
import {useNavigate} from 'react-router-dom'

function Enquiry() {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="contact">
      <img onClick={() => Navigate("/")} src={back} alt="back-arrow" />
      <h1>
      Want to discuss a startup collaboration? I'm definitely interested.
      </h1>
      <form action="">
        <div className="hold">
          <div className="a">
            <label htmlFor="fullName">Name</label>
            <input type="text" />
          </div>
          <div className="a">
            <label htmlFor="fullName">Email</label>
            <input type="email" />
          </div>
        </div>
        <div className="hold">
          <div className="a">
            <label htmlFor="fullName">Which Project?</label>
            <select name="" id="">
              <option value="collaboration"></option>
              <option value="collaboration">New Product</option>
              <option value="collaboration">Existing Project</option>
            </select>
          </div>
          <div className="a">
            <label htmlFor="fullName">Your Interest</label>
            <select name="" id="">
              <option value="collaboration"></option>
              <option value="collaboration">Collaborator</option>
              <option value="collaboration">Investor</option>
              <option value="collaboration">Co-founder</option>
            </select>
          </div>
        </div>
        <div className="message">
            <label htmlFor="message"> Additional Details</label>
            <textarea ></textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Enquiry
