import React, { useState } from 'react';
import './Navbar.css';

import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown'

const Navbar = () =>{
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    }

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
                    <h1>TYKÊ</h1>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li 
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to="/services"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                        Services <i className="fas fa-caret-down"></i>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/products"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                        Products
                        </Link>
                    </li>

                </ul>

                <div className="nav-button">
                <Link
                    to="/login"
                    className="button-link"
                >
                    <Button  
                        className="button-link"
                        buttonStyle="btn--primary"
                        buttonSize="btn--circle"
                    >
                        
                        Login
                    </Button>
                </Link>
            </div>
        </nav>
    </div>   
    );
}
 

export default Navbar;