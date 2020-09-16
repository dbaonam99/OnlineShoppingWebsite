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
            isWhite: false,
            activeId: 1,
            location: this.props.history.location.pathname,
            isLogoWhite: false
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
                isWhite: false,
                isLogoWhite: true
            })
        }

        if (isTop !== true) {
            this.setState({
                scrolled: true,
                isWhite: true,
                isLogoWhite: true
            })
        } else {
            this.setState({
                scrolled: false,
                isLogoWhite: true
            })
        }

        if (this.prev > window.scrollY) {
            this.setState({
                scrolled: false,
                isLogoWhite: true
            })
        }
        this.prev = window.scrollY;
    };

    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }

    render() {
        const {location , scrolled , isWhite, isLogoWhite} = this.state;
        return(
            <div 
                className={classNames('Header', {
                    scrolled: scrolled === true,
                    white: isWhite === true,
                    white_header: location === "/news"
                })}
                onMouseEnter={() => { this.setState({ isLogoWhite: false})}}
                onMouseLeave={() => { this.setState({ isLogoWhite: true})}}
                >
                <ul className="menu flex-center">
                    <li>
                        <Link 
                            to="/" 
                            className={classNames({
                                active: location === "/",
                                whitelink_header: location === "/news"
                            })}
                            id="1"
                            >home</Link>
                    </li>
                    <li>
                        <Link to="/news"
                            className={classNames({
                                active: location === "/news",
                                whitelink_header: location === "/news"
                            })}
                            id="2" 
                            >News</Link>
                    </li>
                    <li>
                        <Link to="/men" 
                            className={classNames({
                                active: location === "/men",
                                whitelink_header: location === "/news"
                            })}
                            id="3"
                            >men</Link>
                    </li>
                    <li>
                        <Link to="/women" 
                            className={classNames({
                                active: location === "/women",
                                whitelink_header: location === "/news"
                            })}
                            id="4"
                            >women</Link>
                    </li>
                    <li>
                        <Link to="/children" 
                            className={classNames({
                                active: location === "/contact",
                                whitelink_header: location === "/news"
                            })}
                            id="5"
                            >contact</Link>
                    </li>
                </ul>
                <div className="logo flex-center">
                    <Link to="/">
                        {location !== "/news"
                            ?<img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                            :(
                                isLogoWhite === true 
                                    ? <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" alt="logo"></img> 
                                    : <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                            )
                        }
                    </Link>
                </div>
                <div className="cart flex-center"> 
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <div className="icon flex-center">
                        <FontAwesomeIcon icon={faCartPlus} className="cart-icon"/>
                        <div
                            className={classNames("cart-count cart_count_news_hover", {
                                cart_count_news: location === "/news"
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