import React from 'react';
import "./About.css"

const About = () => {
    return(
        <div className="fundo">
            <div className="about-container">
                <div className="about-first">
                    <div className="about-title">
                        <h1>Build Your Unique Online Presence</h1>
                        <p>To create your own website, follow these steps:</p>
                    </div>

                    <div className="about-para">
                        <h1>Customize your site</h1>
                        <p>Pick a template and customize anything, or answer a few questions and get a free website designed just for you.</p>
                    </div>

                    <div className="about-para-b">
                        <h1>Add advanced features</h1>
                        <p>Start your own blog, add an online store and accept bookings online. You can always add more features as you grow.</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src="icons/level-up.svg" alt="imagem"></img>
                </div>
            </div>
        </div>
    );
}
 
export default About;