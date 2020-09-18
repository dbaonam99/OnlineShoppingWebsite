import React, { Component } from 'react';
import '../App.css';
import {
    Link,
    withRouter
  } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import {  faSearch, faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isWhiteBox: false,
            activeId: 1,
            location: this.props.history.location.pathname,
            isWhiteText: false
        }
        this.ScrollToTop = this.ScrollToTop.bind(this);
    }

    ScrollToTop() {
        window.scrollTo(0,0);
        console.log(this.state.isWhiteBox);
        if (this.state.isWhiteBox === false) {
            this.setState({
                isWhiteText: false
            })
        } else {
            this.setState({
                isWhiteText: true
            })
        }
        console.log(this.state.isWhiteText);
    }


    componentDidMount() {

        if (this.state.location === "/news") {
            this.setState({
                isWhiteText: false
            })
        } else {
            this.setState({
                isWhiteText: false
            })
        }
        
        window.onscroll = function() {
            if(window.pageYOffset < 100) {
                this.setState({
                    scrolled: false
                })
            } else if (this.prev > window.pageYOffset) {
                if (this.state.location === "/news") {
                    this.setState({
                        scrolled: false,
                        isWhiteBox: true,
                        isWhiteText: false
                    })
                } else {
                    this.setState({
                        scrolled: false,
                        isWhiteBox: true
                    })
                }
            }else {
                this.setState({
                    scrolled: true
                })
            }
            this.prev = window.pageYOffset;
        }.bind(this);
    }
    
    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        const {location , scrolled, isWhiteBox, isWhiteText } = this.state;
        return(
            <div 
                className={classNames('Header', {
                    scrolled: scrolled === true,
                    white: isWhiteBox === true
                })}
                onMouseEnter={() => { 
                    if (location === "/news") {
                        this.setState({ 
                            isWhiteText: false 
                        }) 
                    }
                }}
                onMouseLeave={() => { 
                    if (location === "/news") {
                        this.setState({ 
                            isWhiteText: true 
                        }) 
                    }
                    if (this.prev > 0) {
                        this.setState({ 
                            isWhiteText: false 
                        }) 
                    }
                }}
                >
                <ul className="menu flex-center">
                    <li>
                        <Link 
                            to="/" 
                            className={classNames({
                                active: location === "/",
                                whitelink_header: isWhiteText === true
                            })}
                            id="1"
                            onClick={this.ScrollToTop}
                            >home</Link>
                    </li>
                    <li>
                        <Link to="/news"
                            className={classNames({
                                active: location === "/news",
                                whitelink_header: isWhiteText === true
                            })}
                            id="2" 
                            onClick={this.ScrollToTop}
                            >News</Link>
                    </li>
                    <li>
                        <Link to="/men" 
                            className={classNames({
                                active: location === "/men",
                                whitelink_header: isWhiteText === true
                            })}
                            id="3"
                            >men</Link>
                    </li>
                    <li>
                        <Link to="/women" 
                            className={classNames({
                                active: location === "/women",
                                whitelink_header: isWhiteText === true
                            })}
                            id="4"
                            >women</Link>
                    </li>
                    <li>
                        <Link to="/contact" 
                            className={classNames({
                                active: location === "/contact",
                                whitelink_header: isWhiteText === true
                            })}
                            id="5"
                            >contact</Link>
                    </li>
                </ul>
                <div className="logo flex-center">
                    <Link to="/">
                        {
                            isWhiteText === true 
                                ? <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" alt="logo"></img>
                                : <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                        }
                    </Link>
                </div>
                <div className={classNames('cart flex-center', {
                        whitelink_header: isWhiteText === true
                    })}> 
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <div className="icon flex-center">
                        <FontAwesomeIcon icon={faCartPlus} className="cart-icon"/>
                        <div
                            // className={classNames("cart-count",  {
                                // cart_count_news_hover: isWhiteText === true,
                                // cart_count_news: location === "/news" && this.prev < 100
                            // })}>
                            className={classNames('cart-count', {
                                cart_count_news_hover: isWhiteText === true
                            })}> 
                                
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header);