import React from 'react';

const PortfolioCard = ({ title, categories, img }) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card__image">
                <img src={img}/>
            </div>
            <h6 className="portfolio-card__title">{title}</h6>
            <span>{categories}</span>
        </div>
    )
  };

export default PortfolioCard;