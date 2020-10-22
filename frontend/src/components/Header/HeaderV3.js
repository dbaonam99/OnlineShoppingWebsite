import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
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
import MenuItemDropdown from './MenuItemDropdown';
import { CartContext } from '../../contexts/Cart';


function BannerV3(props) {

    const [scrolled, setScrolled] = useState(false);
    const [whiteBox, setWhiteBox] = useState(false);
    const [whiteText, setWhiteText] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [disableBox, setDisableBox] = useState(false);
    const [dropdownHover, setDropdownHover] = useState(false)

    const location = props.history.location.pathname;
    const { cartItems, clickedCart } = useContext(CartContext)

    function clickToClose() {
        document.body.style.overflow = 'unset';
        setSearchOpen(false);
        setAccountOpen(false);
        setCartOpen(false);
    }

    const handleHover = () => {
        setDropdownHover(true)
    }
    const handleLeaveHover = () => {
        setDropdownHover(false)
    }
    const handleClick = () => {
        window.scrollTo(0,0)
    }

    const navBar = [
        {
            id: "1",
            label: "Home",
            url: "/",
            dropdownContent: []
        },
        {
            id: "2",
            label: "News",
            url: "/news",
            dropdownContent: [
            ]
        },
        {
            id: "3",
            label: "Women",
            url: "/women",
            dropdownContent: [
                {
                    dropdownTitle: "Accessories",
                    dropdownList: [
                        "Sunglasses",
                        "Jewelry",
                        "watches",
                    ]
                },
                {
                    dropdownTitle: "Ready-to-wear",
                    dropdownList: [
                        'Shop by look',
                        'Dresses',
                        'Denim & pants',
                        'Tops & shirts ',
                        'Blazers',
                        'Skirts',
                        'Activewear',
                    ]
                },
                {
                    dropdownTitle: "Shoes",
                    dropdownList: [
                        'Sneakers',
                        'Boots',
                        'Pumps',
                    ]
                },
                {
                    dropdownTitle: "Bags",
                    dropdownList: [
                        'Shoulder bags',
                        'Travels bags',
                        'Tote bags',
                    ]
                }
            ]
        },
        {
            id: "4",
            label: "Men",
            url: "/men",
            dropdownContent: [
                {
                    dropdownTitle: "Ready-to-wear",
                    dropdownList: [
                        "Shop by look", 
                        "Shirts & T-shirts", 
                        "Denim", "Pants", 
                        "Blazers & jackets"
                    ]
                },
                {
                    dropdownTitle: "Shoes",
                    dropdownList: [
                        "Sneakers",
                        "Sandals",
                        "Loafers"
                    ]
                },
                {
                    dropdownTitle: "Bags",
                    dropdownList: [
                        "Business bags",
                        "Travels bags"                        
                    ]
                }
            ]
        },
        {
            id: "5",
            label: "Contact",
            url: "/contact",
            dropdownContent: []
        },
    ]

    useEffect(() => {
        if (location === "/news" || location ===  `/collection/${path}`) {
            setWhiteText(true);
            setDisableBox(true);
        } else {
            setWhiteText(false);
            setDisableBox(false);
        }
        if (clickedCart) {
            setScrolled(false)
        }

        function onScroll() {
            if (location === "/news" || location ===  `/collection/${path}`) {
                if(window.pageYOffset < 50) { // top
                    if (dropdownHover === true) {
                        setWhiteBox(true)
                        setWhiteText(false)
                        setDisableBox(false)
                    } else {
                        setWhiteBox(false)
                        setWhiteText(true)
                        setDisableBox(true)
                    }
                } else if (this.prev < window.pageYOffset) { //down
                    if (dropdownHover === true) {
                        setScrolled(false)
                    } else {
                        setScrolled(true)
                    }
                    setWhiteBox(true)
                    setDisableBox(false)
                    setWhiteText(false)
                } else if (this.prev > window.pageYOffset) { //up
                    setScrolled(false)
                }
            } else {
                if(window.pageYOffset < 50) { // top
                    setWhiteBox(false)
                    setWhiteText(false)
                } else if (this.prev < window.pageYOffset) { //down
                    if (dropdownHover === true) {
                        setScrolled(false)
                    } else {
                        setScrolled(true)
                    }
                    setWhiteBox(true)
                } else if (this.prev > window.pageYOffset) { //up
                    setScrolled(false)
                    setWhiteText(false)
                }
            }
            this.prev = window.pageYOffset;
        }

        window.addEventListener("scroll", onScroll);
        return() => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [clickedCart, location, dropdownHover]);

    if(searchOpen || accountOpen || cartOpen){
        document.body.style.overflow = 'hidden';
    }

    const path = props.history.location.pathname.slice(12);
    return(
        <div
            className={classNames('Header HeaderV3', {
                scrolled: scrolled === true,
                white: whiteBox === true,
                white_disable: disableBox === true
            })}
            onMouseEnter={() => { 
                if (location === "/news" || location === `/collection/${path}`) {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseOver={() => { 
                if (location === "/news" || location ===  `/collection/${path}`) {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseLeave={() => { 
                if ((location === "/news" && window.pageYOffset < 50) || (location ===  `/collection/${path}` && window.pageYOffset < 50)) {
                    setWhiteText(true);
                }
            }}
            >
            <div className="logo logo-v3 flex-center">
                <Link to="/">
                    {
                        whiteText === true 
                            ? <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" alt="logo"></img>
                            : <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo"></img>
                    }
                </Link>
            </div>
            <ul className="menu menu-v3 flex-center">
                {
                    navBar.map((item, index)=> { 
                        return (
                            <MenuItemDropdown
                                handleClick={handleClick}
                                handleHover={handleHover}
                                handleLeaveHover={handleLeaveHover}
                                dropdownHover={dropdownHover}
                                scrolled={scrolled}
                                location={location}
                                key={index}
                                whiteText={whiteText}
                                label={item.label}
                                url={item.url}
                                dropdownContent={item.dropdownContent} // dropdown text
                                className="menu-item">
                            </MenuItemDropdown>
                        )
                    })
                }
            </ul>
            <div className={classNames('cart cart-v3 flex-center', {
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
                        className={classNames('cart-count flex-center', {
                            cart_count_news_hover: whiteText === true
                        })}> 
                        <p>{cartItems.length}</p>
                    </div>
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
            </div>
            <Search searchOpen={searchOpen} clickToClose={clickToClose}/>
            <Account accountOpen={accountOpen} clickToClose={clickToClose}/>
            <Cart cartOpen={cartOpen} clickToClose={clickToClose}/>
        </div>
    )
}
export default withRouter(BannerV3);