import React, { Component } from 'react';
import '../App.css';
import {
    Link,
    withRouter
  } from "react-router-dom"; 
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isWhiteBox: false,
            activeId: 1,
            location: this.props.history.location.pathname,
            isWhiteText: false,
            isInvisBox: false
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        const { location } = this.state;

        if (location === '/news') {
            this.setState({
                isWhiteText: false
            })
        }

        window.onscroll = function() {
            if(window.pageYOffset < 100) { // top
                this.setState({
                    isWhiteBox: false
                })
            } else if (this.prev < window.pageYOffset) { //down
                this.setState({
                    scrolled: true
                })
            } else if (this.prev > window.pageYOffset) { //up
                if (location === "/news") {
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
                            >home</Link>
                    </li>
                    <li>
                        <Link to="/news"
                            className={classNames({
                                active: location === "/news",
                                whitelink_header: isWhiteText === true
                            })}
                            onClick={() => { this.setState({ isWhiteBox: false})}}
                            id="2"
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