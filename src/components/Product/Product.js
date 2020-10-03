import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductQuickView from './ProductQuickView';

export default function Product(props) {

    const [hover, setHover] = useState(false);
    const [view, setView] = useState(false);
    const product = props.product;

    const closeView = (event) => {
        document.body.style.overflow = 'unset';
        // if (event.target.className === 'ProductQuickView') {
        setView(false)
        // } else {
        //     setView(true)
        // }
    }

    const openView = () => {
        setView(true)
    }
    if(view){
        document.body.style.overflow = 'hidden';
    }

    const classWidth = props.classWidth;

    return(
        <div 
            className={`Product opa ${classWidth}`}
            style={{ 
                width: `${props.width}px`,
                marginLeft: `${props.marginLeft}px`,
                marginRight: `${props.marginRight}px`
            }}
        >
            <ProductQuickView 
                view={view} 
                closeView={closeView}
                product={product}
            />
            <div className="product-img"
                style={{ 
                    height: `${props.height}px`,
                }}
                onMouseOver={()=> {setHover(true)}}
                onMouseOut={()=> {setHover(false)}}>
                <div className="product-tag">
                    {
                        product.productSale > 0 && <div className="product-tag-item sale">
                            {product.productSale}%
                        </div>
                    }
                    {
                        product.productSold >= 40 && <div className="product-tag-item hot">
                            HOT
                        </div>
                    }
                    {
                        product.productSale > 0 && <div className="product-tag-item new">
                            NEW
                        </div>
                    }
                </div>
                <div className="product-img-bg">
                    <img 
                        className=""
                        src={product.productImg[0]} alt=""></img>
                    <img 
                        className={hover === false ? "img-defalt hide" : "img-defalt"}
                        src={product.productImg[1]} alt=""></img>
                </div>
                <div className="product-overlay">
                    <div className="product-icon-box flex-center icon-cart btn">
                        <FontAwesomeIcon icon={faCartPlus} style={{marginRight: '3px'}}/>
                    </div>
                    <div className="product-icon-box flex-center icon-wishlist btn">
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                    <div 
                        className="product-icon-box flex-center icon-view btn"
                        onClick={openView}
                        >
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                </div>
            </div>
            <div className="product-title">
                {product.productName}
            </div>
            <div className="product-price">
                {product.productPrice} VNĐ
            </div>
        </div>
    )
}