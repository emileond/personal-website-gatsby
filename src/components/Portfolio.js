import React from 'react'
import PortfolioCard from './PortfolioCard'
import Mockup from '../images/societe-mockup.png'

// import { Link } from 'gatsby'

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
                        <PortfolioCard title="Overwatch: Designing a Multi-Dashboard" categories="UX/UI Design" img={Mockup}/>
                        <PortfolioCard title="Motive: Creating a Design System" categories="UX/UI Design"/>
                        <PortfolioCard title="UK Meds: Online Medical Consultations" categories="UX/UI Design"/>
                        <PortfolioCard title="Medical Records App" categories="UX/UI Design, Front-End, Back-End"/>
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
