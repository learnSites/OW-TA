import React from 'react'; 
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="siteFooter">
            <div className="footerTop">
                <div className="footerSection">
                    <h4>Company</h4>
                    <div className='inFooterSection'>
                        <Link className='linkWord' to="/productlist">About Us</Link>
                        <div className='spliters'>|</div>
                        <Link className='linkWord' to="/">Careers</Link>
                        <div className='spliters'>|</div>
                        <Link className='linkWord' to="/login">Blog</Link>
                    </div>
                </div>
                <div className="footerSection">
                    <h4>Support</h4>
                    <div className='inFooterSection'>
                        <div className='linkWord'>FAQs</div>
                        <div className='spliters'>|</div>
                        <div className='linkWord'>Contact</div>
                        <div className='spliters'>|</div>
                        <div className='linkWord'>Help Center</div>
                    </div>
                </div>
                <div className="footerSection">
                    <h4>Follow Us</h4>
                    <div className='inFooterSection'>
                        <a  className='linkWord' href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f socialIcon"></i> 
                        </a>
                        <a  className='linkWord' href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter socialIcon"></i> 
                        </a>
                        <a  className='linkWord' href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in socialIcon"></i> 
                        </a>
                        <a  className='linkWord' href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i className="fab fa-youtube socialIcon"></i> 
                        </a>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                    &copy; 2025 OW-TA. All rights reserved. <span className='spliters'>| </span> <div style={{textDecoration: 'underline'}} className='linkWord'>Privacy Policy</div>
            </div>
        </footer>
    );
}