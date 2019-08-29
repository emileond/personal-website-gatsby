import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faDribbble,faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import Emilio from '../images/emilio-sanchez.jpg'

const Jumbo = ({h1Title, p}) => {
    return (
        <>
        <div className="jumbo">
        <h1>{h1Title}</h1>
        <p>{p}</p>
        <img src={Emilio} className="jumbo-img" alt="Emilio Sanchez" />
        <div>
        <ul>
            <a><li><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></li></a>
            <a><li><FontAwesomeIcon className="icon" icon={faDribbble} /></li></a>
            <a><li><FontAwesomeIcon className="icon" icon={faGithub} /></li></a>
            <a><li><FontAwesomeIcon className="icon" icon={faCodepen} /></li></a>
            <a><li><FontAwesomeIcon className="icon" icon={faTwitter} /></li></a>
        </ul>
        </div>
        </div>
        </>
    )
}



export default Jumbo