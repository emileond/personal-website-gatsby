import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import PortfolioCard from './PortfolioCard'
import Mockup from '../images/portfolio-notes.png'
import Overwatch from '../images/overwatch.png'
import UkMeds from '../images/ukmeds-mockup.png'
import UXLapse from '../images/uxlapse.png'
import Piggo from '../images/piggo.png'

const Portfolio = () => {
    const classShow = 'show' 
    return (
        <div className="portfolio">
            <div className="container">
                <div className="content-padding-3">
                    <h2>Portfolio</h2>
                    {/* <div className="portfolio-filters">
                        <ul>
                        <div><li>All</li></div>
                        <div><li>UX/UI Design</li></div>
                            <li>Front-End</li>
                            <li>Back-End</li>
                        </ul>
                    </div> */}
                    <div className="portfolio-grid">
                        <PortfolioCard title="Overwatch: Drilling Dashboard" categories="UX/UI Design" img={Overwatch}/>
                        <PortfolioCard title="UX Lapse Website" categories="Front-End, Front-End" img={UXLapse}/>
                        <PortfolioCard title="UK Meds: Online Medical Consultations" categories="UX/UI Design" img={UkMeds}/>
                        <PortfolioCard title="Creating UX Lapse Website" categories="UX/UI Design, Front-End" img={Mockup}/>
                        <PortfolioCard title="Savings App" categories="Front-End, Back-End" img={Piggo}/>
                        <PortfolioCard title="Motive: Custom Design System" categories="UX/UI Design, Front-End" img={Mockup}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const gridItems = [...document.querySelectorAll('.portfolio-item')]

// function showAll() {
//     for (var i=0; i<gridItems.length; i++) {
//         gridItems[i].classList.add('show')
//     }
// }

// function showCategory(category) {
//     gridItems.forEach(function(element){
//         if (element.classList.contains(category)) {
//             element.classList.add('show')
//         }
//         else {
//             element.classList.remove('show')
//         }
//     })
// }

// showAll()

export default Portfolio
