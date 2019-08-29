import React from "react"
import Button from "./Button"
import logo from "../images/es-logo.svg"


const AboutMe = () => {
  return (
    <>
      <div className="container content-padding-3">
        <div className="aboutme-text">
        <img src={logo} className="logo" alt="logo" />
          <h2>I'm <span>Emilio Sánchez.</span> Nice to meet you.</h2>
          <p>
            I am a 28 years old passionate UX/UI Designer from Mexico, I learn
            how users behave and infuse those findings into design. I build
            products through human-centered innovation and design thinking.
            Creating simple, streamlined solutions to complex problems is my
            goal.
          </p>
          <Button buttonText="Get In Touch" />
        </div>
      </div>
    </>
  )
}

export default AboutMe
