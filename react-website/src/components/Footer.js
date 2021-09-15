import React from 'react';
import {Button} from '../components/Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div class="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to recieve our best vacation deal
                </p>
                <p className="footer-subscription-text">
                    You can unscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input 
                            type="email"
                            name="email"
                            placeholder='Your name'
                            className="footer-input" 
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h1>Home</h1>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                    </div>
                    <div className="footer-link-items">
                        <h1>About</h1>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                    </div>
                    <div className="footer-link-items">
                        <h1>Garally</h1>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                        <Link to="/" >Practice</Link>
                    </div>
                    <div className="footer-link-items">
                        <h1>Contact us</h1>
                            <Link to="/" >Practice</Link>
                            <Link to="/" >Practice</Link>
                            <Link to="/" >Practice</Link>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className='social-logo'>
                            Practice <i class="fab fa-angellist"></i>
                        </Link>
                        
                    </div>
                    <small className="website-rights"> Practice &copy; 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>

                        <Link 
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link 
                            className="social-icon-link pinterest"
                            to="/"
                            target="_blank"
                            aria-label="Pinterest"
                        >
                            <i className="fab fa-pinterest-p"></i>
                        </Link>

                        <Link 
                            className="social-icon-link line"
                            to="/"
                            target="_blank"
                            aria-label="line"
                        >
                            <i className="fab fa-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
