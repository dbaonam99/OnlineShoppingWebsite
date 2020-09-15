import React, { Component } from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import {  faSearch, faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            isWhite: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }
    
    handleNavigation = (e) => {
        const window = e.currentTarget;
    
        const isTop = window.scrollY < 100;
        if (window.scrollY  === 0) {
            this.setState({
                isWhite: false
            })
        }

        if (isTop !== true) {
            this.setState({
                scrolled: true,
                isWhite: true
            })
        } else {
            this.setState({
                scrolled: false
            })
        }

        if (this.prev > window.scrollY) {
            this.setState({
                scrolled: false
            })
        }
        this.prev = window.scrollY;

    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return(
            <div className={classNames('Header', {
                scrolled: this.state.scrolled === true,
                white: this.state.isWhite === true
                })}>
                <ul className="menu flex-center">
                    <li>
                        <Link to="/" className="active">home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
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