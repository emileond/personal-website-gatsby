import React from "react"
import ButtonPrimary from "./ButtonPrimary"

const ContactForm = ({ headline }) => {
  return (
    <div className="container">
      <div className="padding-top-3">
        <h2>{headline}</h2>
        <p>Fill out this simple form. I'll contact you promptly to discuss.</p>
        <form name="contact" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-grid">
            <div className="form-input">
              <label>Name</label>
              <input name="name" type="text" placeholder="John Doe" required></input>
            </div>
            <div className="form-input">
              <label>Email</label>
              <input name="email" type="text" placeholder="email@domain.com"></input>
            </div>
            <div className="form-input inquiry">
              <label>Inquiry</label>
              <select name="inquiry">
              <option name="nothing" value="0" disabled selected>Select an option</option>
                <option name="UX/UI Design" value="1">UX/UI Design</option>
                <option name="Development" value="2">Development</option>
                <option name="Mentoring" value="3">Mentoring / Speaking</option>
                <option name="Other" value="4">Other</option>
              </select>
            </div>
            <div className="form-input message">
              <textarea name="message" placeholder="Write your message"></textarea>
            </div>
          </div>
        <ButtonPrimary type="submit" buttonText="Send Message"/>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
