import React from 'react';
import './Hero.css';
import '../Background/Background.css';

const Hero = ({heroIndex, setHeroIndex}) => {    
    const headingText = [
        {
            heading: "Choose cow",
            subheading: "From a variety of collections",
            buttontxt: "Explore Now",
        },
        {
            heading: "Get the best quality of meat",
            subheading: "From the whole country",
            buttontxt: "Order Now",
        },
        {
            heading: "Get certified butcher",
            subheading: "For hustle free processing",
            buttontxt: "Hire Now",
        },
    ];



    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>{headingText[heroIndex].heading}</h1>
                    <p>{headingText[heroIndex].subheading}</p>
                    <button type="button" className="btn btn-outline-secondary">{headingText[heroIndex].buttontxt}</button>
                </div>
            </div>

            <ol className="dotPanel">
                <li onClick={()=> setHeroIndex(0)} className={heroIndex===0? "active":"inactive"}></li>
                <li onClick={()=> setHeroIndex(1)} className={heroIndex===1? "active":"inactive"}></li>
                <li onClick={()=> setHeroIndex(2)} className={heroIndex===2? "active":"inactive"}></li>
            </ol>
        </>
    );
}

export default Hero;