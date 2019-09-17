import React from 'react';

const HeroProject = ( {h1Title, children} ) => {
    return (
        <div className="jumbo">
            <h1>{h1Title}</h1>
            <main>{children}</main>
        </div>
    )
} 

export default HeroProject