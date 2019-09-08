import React from "react"

const Hero = ({h1Title, date}) => {
    return (
        <>
        <div className="jumbo">
        <h1>{h1Title}</h1>
        <p>{date}</p>
        </div>
        </>
    )
}

export default Hero