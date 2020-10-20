import React, { useContext } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from '../../contexts/Cart'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductOverlay(props) {

    const { 
        addToCart  
    } = useContext(CartContext);

    const cartClick = () => {
        addToCart(props.product)
    }

    return (
        <div 
            className="product-overlay">
            <div className="product-icon-box flex-center icon-cart btn"
                onClick={cartClick}
            >
                <FontAwesomeIcon icon={faCartPlus} style={{marginRight: '3px'}}/>
            </div>
            <div className="product-icon-box flex-center icon-wishlist btn">
                <FontAwesomeIcon icon={faHeart}/>
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
export default ProductOverlay;