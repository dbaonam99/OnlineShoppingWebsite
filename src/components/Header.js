import React, { useEffect, useState } from 'react';
import '../App.css';
import {
    Link,
    withRouter
  } from "react-router-dom"; 
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Search from './Search.js';
import Account from './Account.js';
import Cart from './Cart.js';


function Header(props) {

    const [scrolled, setScrolled] = useState(false);
    const [whiteBox, setWhiteBox] = useState(false);
    const [whiteText, setWhiteText] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [disableBox, setDisableBox] = useState(false);

    const location = props.history.location.pathname;

    function clickToClose() {
        document.body.style.overflow = 'unset';
        setSearchOpen(false);
        setAccountOpen(false);
        setCartOpen(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        if (location === "/news") {
            setWhiteText(true);
            setDisableBox(true);
        } else {
            setWhiteText(false);
            setDisableBox(false);
        }

        function onScroll() {
            if (location === "/news") {
                if(window.pageYOffset < 100) { // top
                    setWhiteBox(false)
                    setWhiteText(true)
                    setDisableBox(true)
                } else if (this.prev < window.pageYOffset) { //down
                    setWhiteBox(true)
                    setDisableBox(false)
                    setWhiteText(false)
                    setScrolled(true)
                } else if (this.prev > window.pageYOffset) { //up
                    setScrolled(false)
                }
            } else {
                if(window.pageYOffset < 100) { // top
                    setWhiteBox(false)
                    setWhiteText(false)
                } else if (this.prev < window.pageYOffset) { //down
                    setWhiteBox(true)
                    setScrolled(true)
                } else if (this.prev > window.pageYOffset) { //up
                    setScrolled(false)
                }
            }
            this.prev = window.pageYOffset;
        }

        window.addEventListener("scroll", onScroll);
        return() => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [location]);

    if(searchOpen || accountOpen || cartOpen){
        document.body.style.overflow = 'hidden';
    }

    return(
        <div
            className={classNames('Header', {
                scrolled: scrolled === true,
                white: whiteBox === true,
                white_disable: disableBox === true
            })}
            onMouseEnter={() => { 
                if (location === "/news") {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseLeave={() => { 
                if (location === "/news" && window.pageYOffset < 100) {
                    setWhiteText(true);
                }
            }}
            >
            <ul className="menu flex-center">
                <li>
                    <Link 
                        to="/" 
                        className={classNames({
                            active: location === "/",
                            whitelink_header: whiteText === true
                        })}
                        id="1"
                        >home</Link>
                </li>
                <li>
                    <Link to="/news"
                        className={classNames({
                            active: location === "/news",
                            whitelink_header: whiteText === true,
                        })}
                        id="2"
                        >News</Link>
                </li>
                <li>
                    <Link to="/men" 
                        className={classNames({
                            active: location === "/men",
                            whitelink_header: whiteText === true
                        })}
                        id="3"
                        >men</Link>
                </li>
                <li>
                    <Link to="/women" 
                        className={classNames({
                            active: location === "/women",
                            whitelink_header: whiteText === true
                        })}
                        id="4"
                        >women</Link>
                </li>
                <li>
                    <Link to="/contact" 
                        className={classNames({
                            active: location === "/contact",
                            whitelink_header: whiteText === true
                        })}
                        id="5"
                        >contact</Link>
                </li>
            </ul>
            <div className="logo flex-center">
                <Link to="/">
                    {
                        whiteText === true 
                            ? <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" alt="logo"></img>
                            : <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                    }
                </Link>
            </div>
            <div className={classNames('cart flex-center', {
                    whitelink_header: whiteText === true
                })}> 
                <div className="icon-container">
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        className="icon"
                        onClick={()=> {
                            setSearchOpen(true)
                        }}
                        />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon 
                        icon={faUser} 
                        className="icon"
                        onClick={()=> {
                            setAccountOpen(true)
                        }}
                        />
                </div>
                <div 
                    className="icon flex-center"
                    onClick={()=> {
                        setCartOpen(true)
                    }}>
                    <FontAwesomeIcon 
                        icon={faCartPlus} 
                        className="cart-icon"
                        />
                    <div
                        className={classNames('cart-count', {
                            cart_count_news_hover: whiteText === true
                        })}> 
                            
                        <p>0</p>
                    </div>
                </div>
            </div>
            <Search searchOpen={searchOpen} clickToClose={clickToClose}/>
            <Account accountOpen={accountOpen} clickToClose={clickToClose}/>
            <Cart cartOpen={cartOpen} clickToClose={clickToClose}/>
        </div>
    )
}
export default withRouter(Header);