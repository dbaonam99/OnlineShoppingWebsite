import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductQuickView from './ProductQuickView';

export default function Product(props) {

    const [url] = useState(props.imgUrl);
    const [hover, setHover] = useState(false);
    const [view, setView] = useState(false);
    const [imgUrlHover] = useState(props.imgUrlHover);

    const closeView = (event) => {
        console.log(event.target.className)
        document.body.style.overflow = 'unset';
        if (event.target.className === 'ProductQuickView') {
            setView(false)
        } else {
            setView(true)
        }
    }
    const openView = () => {
        setView(true)
    }
    if(view){
        document.body.style.overflow = 'hidden';
    }

    return(
        <div className="Product opa">
            <ProductQuickView 
                view={view} 
                closeView={closeView}
                imgUrl={props.imgUrl} 
                imgUrlHover={props.imgUrlHover} 
                productName={props.productName}
                productPrice={props.productPrice}
                productSale={props.productSale}
                productSold={props.productSold}
                productVote={props.productVote}
                productDes={props.productDes}
                productCate={props.productCate}
            />
            <div className="product-img"
                onMouseOver={()=> {setHover(true)}}
                onMouseOut={()=> {setHover(false)}}>
                <div className="product-tag">
                    {
                        props.productSale > 0 && <div className="product-tag-item sale">
                            {props.productSale}%
                        </div>
                    }
                    {
                        props.productSold >= 40 && <div className="product-tag-item hot">
                            HOT
                        </div>
                    }
                    {
                        props.productSale > 0 && <div className="product-tag-item new">
                            NEW
                        </div>
                    }
                </div>
                <div className="product-img-bg">
                    <img 
                        className=""
                        src={url} alt=""></img>
                    <img 
                        className={hover === false ? "img-defalt hide" : "img-defalt"}
                        src={imgUrlHover} alt=""></img>
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
                {props.productName}
            </div>
            <div className="product-price">
                {props.productPrice} VNĐ
            </div>
        </div>
    )
}