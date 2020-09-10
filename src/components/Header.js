import React, { Component } from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom"; 

class Header extends Component {
    render() {
        return(
            <div className="Header">
                <ul className="menu flex-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">New</Link>
                    </li>
                    <li>
                        <Link to="/">Men</Link>
                    </li>
                    <li>
                        <Link to="/">Women</Link>
                    </li>
                    <li>
                        <Link to="/">Children</Link>
                    </li>
                </ul>
                <div className="logo flex-center">
                    <Link to="/">
                        <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                    </Link>
                
                </div>
                <div className="cart flex-center"> cart </div>
            </div>
        )
    }
}
export default Header;