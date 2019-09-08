import React from 'react'
import { Link } from 'gatsby'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="content-padding-3">
                    <h2>Portfolio</h2>
                    <div className="portfolio-filters">
                        <ul>
                            <li><a onClick={showAll()} >All</a></li>
                            <li>UX Design</li>
                            <li>Front-End</li>
                            <li>Back-End</li>
                        </ul>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                        <div className="portfolio-item">
                            <img src=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const gridItems = [...document.querySelectorAll('.item')]

function showAll() {
    for (var i=0; i<gridItems.length; i++) {
        gridItems[i].classList.add('show')
    }
}

export default Portfolio

showAll()