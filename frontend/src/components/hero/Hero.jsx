import React from 'react';
import './Hero.css';
import '../Background/Background.css';

const Hero = ({heroIndex, setHeroIndex, headingText}) => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>{headingText.heading}</h1>
                    <p>{headingText.subheading}</p>
                    <button type="button" className="btn btn-outline-secondary">{headingText.buttontxt}</button>
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