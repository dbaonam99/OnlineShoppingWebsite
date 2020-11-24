import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../App.css';
import {
    Link,
    withRouter
  } from "react-router-dom"; 
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUser, faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import Search from './Search.js';
import Account from './Account.js';
import Cart from './Cart.js';
import MenuItemDropdown from './MenuItemDropdown';
import { CartContext } from '../../contexts/Cart';
import Div100vh from 'react-div-100vh';

function Header(props) {

    const [scrolled, setScrolled] = useState(false);
    const [whiteBox, setWhiteBox] = useState(false);
    const [whiteText, setWhiteText] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [disableBox, setDisableBox] = useState(false);
    const [dropdownHover, setDropdownHover] = useState(false)
    const [totalCart, setTotalCart] = useState(0)

    const location = props.history.location.pathname;

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

    const { cartItems, clickedCart } = useContext(CartContext)

    const navBar = [
        {
            id: "1",
            label: "Home",
            url: "/",
            dropdownContent: []
        },
        {
            id: "2",
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
            id: "3",
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
            id: "4",
            label: "News",
            url: "/news",
            dropdownContent: [
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
        if (location === "/news" || location === `/news/category/${props.match.params.cate}`) {
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
            if (location === "/news" || location === `/news/category/${props.match.params.cate}`) {
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

        let totalCartVirtual = 0;
        for (let i in cartItems) {
            totalCartVirtual += cartItems[i].count
        }
        setTotalCart(totalCartVirtual)

        // window.addEventListener("scroll", debounce(onScroll, 50));
        window.addEventListener("scroll", onScroll);
        return() => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [clickedCart, location, dropdownHover, props.match.params.cate, cartItems]);

    if(searchOpen || accountOpen || cartOpen){
        document.body.style.overflow = 'hidden';
    }

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const openMobileMenuFunc = () => {
        setOpenMobileMenu(true)
        document.body.style.overflow = 'hidden';
    }

    const [closeAnimation, setCloseAnimation] = useState(false)
    const closeMobileMenuFunc = () => {
        document.body.style.overflow = 'unset';
        setCloseAnimation(true)
        setTimeout(()=>{
            setOpenMobileMenu(false)
            setCloseAnimation(false)
        }, 700)
    }

    return(
        <div
            className={classNames('Header', {
                scrolled: scrolled === true,
                white: whiteBox === true,
                white_disable: disableBox === true
            })}
            onMouseEnter={() => { 
                if (location === "/news" || location === `/news/category/${props.match.params.cate}`)  {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseOver={() => { 
                if (location === "/news" || location === `/news/category/${props.match.params.cate}`)  {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseLeave={() => { 
                if ((location === "/news" && window.pageYOffset < 50) || (location === `/news/category/${props.match.params.cate}` && window.pageYOffset < 50)) {
                    setWhiteText(true);
                }
            }}
            >

            <div 
                className={whiteText ===false ? "menu-mobile flex-center" : "menu-mobile flex-center closeMenuMobile_white"}
            >
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={openMobileMenuFunc} 
                    style={{fontSize: '20px'}}/>
            </div>
            {
                openMobileMenu === true && 
                    <Div100vh className="menu-mobile-box flex">
                        <div className={classNames("menu-mobile-left flex-col",{
                            openMenuMobile: openMobileMenu,
                            closeMenuMobile: closeAnimation
                        })}>
                            <div className="menu-mobile-search flex-center">
                                <input className="input" placeholder="Search" style={{fontSize: '16px', height: '50px'}}></input>
                                <FontAwesomeIcon icon={faSearch} style={{marginLeft: '10px', color: '#777'}}/>
                            </div>
                            <div 
                                className="menu-mobile-list"
                            >
                                {
                                    navBar.map((item, index)=> {
                                        let home = ""
                                        if (location === "/")
                                            home = "home"
                                        return (
                                            <div 
                                                key={index}
                                                className={classNames("menu-mobile-item flex", {
                                                    menu_mobile_item_active: location.slice(1) === item.label.toLowerCase() || home === item.label.toLowerCase()
                                                })}
                                            >
                                                {item.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="menu-mobile-login flex">
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <p>LOGIN</p>
                            </div>
                        </div>
                        <div 
                            className="menu-mobile-right"
                            onClick={closeMobileMenuFunc}
                        ></div>
                    </Div100vh>
                
            }
            <ul className="menu flex-center">
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
                        className="icon search-icon"
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
                        <p>{totalCart}</p>
                    </div>
                </div>
                <div 
                    className="icon-container login-icon"
                    onClick={()=> {
                        setAccountOpen(true)
                    }}>
                    <FontAwesomeIcon 
                        icon={faUser} 
                        className="icon"
                        />
                </div>
            </div>
            <Search searchOpen={searchOpen} clickToClose={clickToClose}/>
            <Account accountOpen={accountOpen} clickToClose={clickToClose}/>
            <Cart cartOpen={cartOpen} clickToClose={clickToClose}/>
        </div>
    )
}
export default withRouter(Header);