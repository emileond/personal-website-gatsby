import React from "react"
import ButtonPrimary from "./ButtonPrimary"
import logo from "../images/es-logo.svg"
import { Link } from "gatsby"



const AboutMe = () => {
  return (
    <div className="container">
      <div className="content-padding-3">
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
          <Link to="/contact/">
          <ButtonPrimary buttonText="Get In Touch" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
