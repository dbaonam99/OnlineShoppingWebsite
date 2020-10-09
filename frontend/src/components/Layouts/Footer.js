import React, { Component } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faFacebookF } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookF, faTwitter, faInstagram, faPinterest, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'


export default class Footer extends Component {

    render() {
        return(
            <div className="Footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <a href="pe.heromc.net" className="cr">©2016 Sober</a>
                        <Link to="/news">News</Link>
                        <a href="pe.heromc.net">FAQs</a>
                        <a href="pe.heromc.net">Contact us</a>
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
}
