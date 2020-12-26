import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faFacebookF } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookF, faTwitter, faInstagram, faPinterest, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'


export default function Footer() {

    const handleClick = () => {
        window.scrollTo(0,0)
    }

    return(
        <div className="Footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="cr">©2016 Sober</p>
                    <Link to="/news" onClick={handleClick}>News</Link>
                    <a href="/contact" onClick={handleClick}>FAQs</a>
                    <Link to="/contact" onClick={handleClick}>Contact us</Link>
                </div>
                <div className="footer-right">
                    <FontAwesomeIcon icon={faTwitter} className="cart-icon-footer"/>
                    <FontAwesomeIcon icon={faFacebookF} className="cart-icon-footer"/>
                    <FontAwesomeIcon icon={faInstagram} className="cart-icon-footer"/>
                    <FontAwesomeIcon icon={faPinterest} className="cart-icon-footer"/>
                    <FontAwesomeIcon icon={faGoogle} className="cart-icon-footer"/>
                </div>
            </div>
        </div>
    )
}
