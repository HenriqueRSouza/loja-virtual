import React from 'react';
import Button from '../Button/Button';

import './Main.css';

const Main = () => {
    return(
        <div className="main-text">
            <div className="text">
                <h1>Create a Website You’re Proud Of</h1>
                <p>Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.</p>
                
                <div className="btn--main">
                    <Button
                        className="btns"
                        buttonSize="btn--large"
                        buttonStyle="btn--full"
                    >Get Started</Button>
                </div>
            </div>
        </div>
    );

}

export default Main;