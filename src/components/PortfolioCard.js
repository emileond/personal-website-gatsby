import React from 'react';
import Mockup from '../images/societe-mockup.png'

const PortfolioCard = ({ title, categories, img }) => {
    return (
        <div className="portfolio-card">
            <h4 className="portfolio-card__title">{title}</h4>
            <span>{categories}</span>
            <div className="portfolio-card__image">
                <img src={img}/>
            </div>
        </div>
    )
  };

export default PortfolioCard;