import React, { Component } from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faUser } from "@fortawesome/free-regular-svg-icons";
import {  faSearch, faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Header">
                <ul className="menu flex-center">
                    <li>
                        <Link to="/" className="active">home</Link>
                    </li>
                    <li>
                        <Link to="/">New</Link>
                    </li>
                    <li>
                        <Link to="/">men</Link>
                    </li>
                    <li>
                        <Link to="/">women</Link>
                    </li>
                    <li>
                        <Link to="/">children</Link>
                    </li>
                </ul>
                <div className="logo flex-center">
                    <Link to="/">
                        <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                    </Link>
                
                </div>
                <div className="cart flex-center"> 
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <div className="icon flex-center">
                        <FontAwesomeIcon icon={faCartPlus} className="cart-icon"/>
                        <div className="cart-count">
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;