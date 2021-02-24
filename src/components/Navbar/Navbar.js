import React, { useState } from 'react';
import './Navbar.css';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Button from '../Button/Button';

const Navbar = () =>{
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div className="nav-container">
            <div className="nav-text">
                <h1>ETYKE</h1>

                <div className="nav-links">
                    <div className="links">
                        <p onClick={handleClick}>Creation</p>
                            <a  
                                onClick={handleClick}
                                className="seta"
                            > 
                            {click ? (<IoIosArrowDown />): (<IoIosArrowUp/>)}
                        </a>
                    </div>

                    <div className="links">
                        <p onClick={handleClick}>Creation</p>
                            <a  
                                onClick={handleClick}
                                className="seta"
                            > 
                            {click ? (<IoIosArrowDown />): (<IoIosArrowUp/>)}
                        </a>
                    </div>

                    <div className="links">
                        <p onClick={handleClick}>Creation</p>
                            <a  
                                onClick={handleClick}
                                className="seta"
                            > 
                            {click ? (<IoIosArrowDown />): (<IoIosArrowUp/>)}
                        </a>
                    </div>

                    <div className="links">
                        <p onClick={handleClick}>Creation</p>
                            <a  
                                onClick={handleClick}
                                className="seta"
                            > 
                            {click ? (<IoIosArrowDown />): (<IoIosArrowUp/>)}
                        </a>
                    </div>
                </div>
            </div>

            

            <div className="nav-button">
                <Button  
                    className="btns"
                    buttonStyle="btn--prymary"
                    buttonSize="btn--circle"
                >
                    LOGIN
                </Button>
            </div>
        </div>
    );
} 

export default Navbar;