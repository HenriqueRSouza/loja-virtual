import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer-container">
            <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <h1>TYKÊ</h1>
                </div>
                <small className="website-rights">TYKÊ © 2021</small>
                <div className="social-icons">
                    <Link
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        _target="_blak"
                        aria-label="Instagram"
                    >
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Footer;