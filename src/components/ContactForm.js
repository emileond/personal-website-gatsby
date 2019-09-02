import React from "react"
import ButtonPrimary from "./ButtonPrimary"

const ContactForm = ({ headline }) => {
  return (
    <div className="container">
      <div className="padding-top-3">
        <h2>{headline}</h2>
        <p>Fill out this simple form. I'll contact you promptly to discuss.</p>
        <form name="contact" method="POST" data-netlify="true">
          <div className="form-grid">
            <div className="form-input">
              <label>Name</label>
              <input name="name" type="text" required></input>
            </div>
            <div className="form-input">
              <label>Email</label>
              <input name="email" type="text"></input>
            </div>
            <div className="form-input inquiry">
              <label>Inquiry</label>
              <select>
                <option value="0">UX/UI Design</option>
                <option value="1">Development</option>
                <option value="2">Mentoring / Speaking</option>
                <option value="3">Other</option>
              </select>
            </div>
            <div className="form-input message">
              <textarea>Lorem</textarea>
            </div>
          </div>
        <ButtonPrimary type="submit" buttonText="Send Message"/>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
