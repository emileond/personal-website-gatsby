import React from "react"
import itexico from "../images/itexico.svg"
import yaydoo from "../images/yaydoo.svg"
import virket from "../images/virket.svg"
import gameup from "../images/gameup.svg"
import renderinc from "../images/renderinc.svg"
import ButtonSecondary from "./ButtonSecondary"

const Companies = ({headlineText}) => {
  return (
    <div className="companies">
      <div className="container">
        <div className="content-padding-3">
          <h2>{headlineText}</h2>
          <div className="experience-logos">
            <div className="experience-logos__item">
              <img src={itexico} />
            </div>
            <div className="experience-logos__item">
              <img src={yaydoo} />
            </div>
            <div className="experience-logos__item">
              <img src={virket} />
            </div>
            <div className="experience-logos__item">
              <img src={gameup} />
            </div>
            <div id="renderinc" className="experience-logos__item">
              <img
                src={renderinc}
              />
            </div>
          </div>
        </div>
          <ButtonSecondary buttonText="Download Resume" />
      </div>
    </div>
  )
}

export default Companies
