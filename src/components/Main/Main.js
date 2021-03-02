import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './Main.css';

const Main = () => {
    return(
        <div className="main-text">
            <div className="text">
                <h1>Create a Website You’re Proud Of</h1>
                <p>Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.</p>
                
                <div className="btn--main">
                <Link
                    to="/products"
                >
                    <Button
                        className="btns"
                        buttonSize="btn--large"
                        buttonStyle="btn--full"
                    >
                        Get Started
                    </Button>
                </Link>
                </div>
            </div>
        </div>
    );

}

export default Main;