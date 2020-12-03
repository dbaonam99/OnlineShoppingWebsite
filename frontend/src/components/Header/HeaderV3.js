import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../App.css';
import {
    Link,
    withRouter
  } from "react-router-dom"; 
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUser, faCartPlus, faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Search from './Search.js';
import Account from './Account.js';
import Cart from './Cart.js';
import MenuItemDropdown from './MenuItemDropdown';
import { CartContext } from '../../contexts/Cart';
import Div100vh from 'react-div-100vh';
import axios from 'axios'

function HeaderV3(props) {

    const [scrolled, setScrolled] = useState(false);
    const [whiteBox, setWhiteBox] = useState(false);
    const [whiteText, setWhiteText] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [disableBox, setDisableBox] = useState(false);
    const [dropdownHover, setDropdownHover] = useState(false)
    const [totalCart, setTotalCart] = useState(0)
    const [openSubMenu, setOpenSubMenu] = useState(null)

    const location = props.history.location.pathname;  
    const path = props.history.location.pathname.slice(12);

    const subHeight = useRef()

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
    const [navBar, setNavBar] = useState([])

    useEffect(() => {
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
                dropdownContent: []
            },
            {
                id: "3",
                label: "Men",
                url: "/men",
                dropdownContent: []
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
        setNavBar(navBar)
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                let virtualNavBar = [...navBar]
                const menProduct = []
                const womenProduct = []
                for (let i in res.data) {
                    if (res.data[i].productSex === "Man") {
                        menProduct.push(res.data[i].productGroupCate)
                    }
                    if (res.data[i].productSex === "Woman") {
                        womenProduct.push(res.data[i].productGroupCate)
                    }
                }
                let groupCateMen = menProduct.filter(function(elem, index, self) {
                    return index === self.indexOf(elem);
                })
                let groupCateWomen = womenProduct.filter(function(elem, index, self) {
                    return index === self.indexOf(elem);
                })
                const menDropdownContent = []
                for (let i in groupCateMen) {
                    let menData = {}
                    let cateList = []
                    for (let j in res.data) {
                        if (res.data[j].productGroupCate === groupCateMen[i] && res.data[j].productSex === "Man") {
                            cateList.push(res.data[j].productCate)
                        }
                    }
                    let cateList2 = cateList.filter(function(elem, index, self) {
                        return index === self.indexOf(elem);
                    })
                    // console.log(cateList)
                    menData = {
                        dropdownTitle: groupCateMen[i],
                        dropdownList: cateList2
                    }
                    menDropdownContent.push(menData)
                }
                const womenDropdownContent = []
                for (let i in groupCateWomen) {
                    let womenData = {}
                    let cateList = []
                    for (let j in res.data) {
                        if (res.data[j].productGroupCate === groupCateWomen[i] && res.data[j].productSex === "Woman") {
                            cateList.push(res.data[j].productCate)
                        }
                    }
                    let cateList2 = cateList.filter(function(elem, index, self) {
                        return index === self.indexOf(elem);
                    })
                    womenData = {
                        dropdownTitle: groupCateWomen[i],
                        dropdownList: cateList2
                    }
                    womenDropdownContent.push(womenData)
                }
                for (let i in virtualNavBar) {
                    if (virtualNavBar[i].label === "Men") {
                        virtualNavBar[i].dropdownContent = menDropdownContent
                    }
                    if (virtualNavBar[i].label === "Women") {
                        virtualNavBar[i].dropdownContent = womenDropdownContent
                    }
                }
                setNavBar(virtualNavBar)
            }
        )
        if (location === "/collection" || location === `/collection/${path}`) {
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
            if (location === "/collection" || location === `/collection/${path}`) {
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
        window.addEventListener("scroll", onScroll);
        return() => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [clickedCart, location, dropdownHover, path, cartItems]);

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

    const [searchMobile, setSearchMobile] = useState("")
    return(
        <div
            className={classNames('Header HeaderV3', {
                scrolled: scrolled === true,
                white: whiteBox === true,
                white_disable: disableBox === true
            })}
            onMouseEnter={() => { 
                if (location === "/collection" || location === `/collection/${path}`)  {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseOver={() => { 
                if (location === "/collection" || location === `/collection/${path}`)  {
                    setWhiteText(false); 
                    setDisableBox(false);
                }
            }}
            onMouseLeave={() => { 
                if ((location === "/collection" && window.pageYOffset < 50) || (location === `/collection/${path}` && window.pageYOffset < 50)) {
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
                                <input 
                                    onChange={(e)=>{
                                        setSearchMobile(e.target.value)
                                    }} 
                                    value={searchMobile}
                                    className="input" placeholder="Search" style={{fontSize: '16px', height: '50px'}}
                                ></input>
                                <div onClick={(event)=>{
                                    props.history.push(`/shop/${searchMobile}`)
                                    closeMobileMenuFunc() 
                                }}>
                                    <FontAwesomeIcon icon={faSearch} style={{marginLeft: '10px', color: '#777'}}/>
                                </div>
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
                                                style={{color: '#111', maxHeight: openSubMenu === item.id ? `1000px` : '40px'}}
                                                className={classNames("menu-mobile-item a", {
                                                    menu_mobile_item_active: location.slice(1) === item.label.toLowerCase() || home === item.label.toLowerCase(),
                                                })}
                                                onClick={()=>{
                                                    if (!item.dropdownContent.length > 0) {
                                                        props.history.push(item.url);
                                                    } else {
                                                        if (!openSubMenu) {
                                                            setOpenSubMenu(item.id)
                                                        } else {
                                                            if (openSubMenu === item.id) {
                                                                setOpenSubMenu(null)
                                                            } else {
                                                                setOpenSubMenu(item.id)
                                                            }
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className="flex" style={{justifyContent: 'space-between'}}>
                                                    <p>{item.label}</p>
                                                    { item.dropdownContent.length > 0 && 
                                                        <div>
                                                            <FontAwesomeIcon icon={faAngleDown}/>
                                                        </div>
                                                    }
                                                </div>
                                                <div 
                                                    className="menu-mobile-sub"
                                                    ref={subHeight}
                                                >
                                                    { item.dropdownContent.map((item, index)=>{ 
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="menu-item-sub-item"
                                                            >
                                                                {item.dropdownTitle}
                                                                {
                                                                    item.dropdownList.map((item,index)=>{
                                                                        return (
                                                                            <div
                                                                                className="menu-item-sub-item2"
                                                                                key={index}
                                                                            >
                                                                                {item}
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div 
                                className="menu-mobile-login flex"
                                onClick={()=> {
                                    setAccountOpen(true)
                                }}>
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
            <div className="logo flex-center logo-v3">
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
export default withRouter(HeaderV3);