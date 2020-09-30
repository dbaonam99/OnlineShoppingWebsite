import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {

    const [url] = useState(props.imgUrl);
    const [hover, setHover] = useState(false);
    const [imgUrlHover] = useState(props.imgUrlHover);
    console.log(hover)
    return(
        <div className="Product"
            onMouseOver={()=> {setHover(true)}}
            onMouseOut={()=> {setHover(false)}}
        >
            <div className="product-img">
                <div className="product-img-bg">
                    <img 
                        className=""
                        src={url} alt=""></img>
                    <img 
                        className={hover === false ? "img-defalt hide" : "img-defalt"}
                        src={imgUrlHover} alt=""></img>
                </div>
                <div className="product-overlay">
                    <div className="product-cart product-icon">
                        <FontAwesomeIcon icon={faCartPlus} className="cart-icon cart-icon-right"/>
                    </div>
                    <div className="product-wishlist product-icon">
                        <FontAwesomeIcon icon={faHeart} className="cart-icon"/>
                    </div>
                </div>
            </div>
            <div className="product-title">
                {props.productTitle}
            </div>
            <div className="product-price">
                {props.productPrice} VNĐ
            </div>
        </div>
    )
}