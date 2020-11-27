import React, { useContext, useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCircle, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from '../../contexts/Cart'
import { withRouter } from 'react-router-dom';

function ProductOverlay(props) {

    const [loading, setLoading] = useState(0)

    const { 
        addToCart,
        addToWishList
    } = useContext(CartContext);

    const cartClick = () => {
        setLoading(1)
        setTimeout(()=>{
            setLoading(0)
            addToCart(props.product)
        }, 500)
    }

    const wishListClick = () => {
        setLoading(2)
        setTimeout(()=>{
            setLoading(0)
            addToWishList(props.product)
        }, 500)
    }

    const redirect = (event) => {
        window.scrollTo(0,0);
        if (event.target.id === "overlay") {
            window.scrollTo(0,0);
            props.history.push(`/products/${props.product._id}`);
        }
    }

    return (
        <div 
            className="product-overlay"
            id="overlay"
            onClick={redirect}
        >
            <div className="product-icon-box flex-center icon-cart btn"
                onClick={cartClick} 
            >
                { loading === 1 && 
                    <div className="flex">
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `0s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.2s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.4s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                    </div>
                }
                { loading !== 1 &&  <FontAwesomeIcon icon={faCartPlus} style={{marginRight: '3px'}}/> }
            </div>
            <div className="product-icon-box flex-center icon-wishlist btn"
                onClick={wishListClick}
            >
                { loading === 2 && 
                    <div className="flex">
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `0s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.2s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.4s`, margin: '0 2px', fontSize: '6px'}}></FontAwesomeIcon>
                    </div>
                }
                { loading !== 2 && <FontAwesomeIcon icon={faHeart}/>}
            </div>
            <div
                className="product-icon-box flex-center icon-view btn"
                onClick={props.openView}
                >
                <FontAwesomeIcon icon={faEye}/>
            </div>
        </div>
    )
}
export default withRouter(ProductOverlay);