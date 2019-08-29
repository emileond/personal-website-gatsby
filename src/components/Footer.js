import React from "react"
import { Link } from "gatsby"
import logo from "../images/es-logo.svg"
import ButtonPrimary from "./ButtonPrimary"

const Footer = ({ tecnologia }) => {
  return (
    <>
    <div className="cta">
    <div className="cta-container">
    <div className="cta-box">
            <div className="box-grid">
              <div className="cta-box-headline">
                <h3>Interested in Working Together?</h3>
              </div>
              <div class="cta-box-description">
                <p>
                  I’m always open to discussing product design work or
                  partnership opportunities.
                </p>
              </div>
              <div className="cta-box-button">
                <div className="btn btn-container">
                  <ButtonPrimary buttonText="Let's Do This" />
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>


      <footer className="footer">
        <img className="logo" src={logo} />
        <p>Handcrafted by Emilio Sánchez.</p>
        <small>Made with {tecnologia}</small>
      </footer>
    </>
  )
}

export default Footer
