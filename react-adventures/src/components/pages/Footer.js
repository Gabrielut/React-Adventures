import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import '../pages/Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-suscription">
                <p className="footer-siscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-suscription-text">
                    You can unsuscribe at any time
                </p>
                <div className="input-areas">
                    <form >
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">Suscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signup'> How it works</Link>
                        <Link to='/'> Testimonials</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> Terms of service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signup'> How it works</Link>
                        <Link to='/'> Testimonials</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> Terms of service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/signup'> Facebook</Link>
                        <Link to='/'> Instagram</Link>
                        <Link to='/'> Twitter</Link>
                        <Link to='/'> Youtube</Link>
                        <Link to='/'> Gmail</Link>
                    </div>                 

                </div>

            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights"> TRVL ° 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/" target="_blank" aria-label="Linkedin ">
                            <i className="fab fa-linkedin"></i>
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
