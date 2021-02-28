import React from 'react';
import "./About.css"

const About = () => {
    return(
        <div className="fundo">
            <div className="about-container">
                <div className="about-first">
                    <h1>Build Your Unique Online Presence</h1>
                    <p>To create your own website, follow these steps:</p>
                </div>
                <div className="about-image">
                    <img src="icons/level-up.svg"></img>
                </div>
            </div>
        </div>
    );
}
 
export default About;