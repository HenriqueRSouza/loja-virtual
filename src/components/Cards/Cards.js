import React from 'react';
import Button from '../Button/Button';

import './Cards.css';


const Cards = () => {
    return(
        <>
            <div className="cards-container">
                <div className="cards-text">
                    <h1>The Freedom to Create the Websites You Want</h1>
                </div>
                <div className="cards-text2">
                    <div className="cards-texto">
                        <p>Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all with the Wix website builder.</p>
                    </div>
                    <div className="cards-button">
                        <Button
                            className="btns"
                            buttonStyle="btn--under"
                            buttonSize="btn--medium"
                        >
                            Se inscreva
                            <i className="fas fa-arrow-right"></i>
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Cards;