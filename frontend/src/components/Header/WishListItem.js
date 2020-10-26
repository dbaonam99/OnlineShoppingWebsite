import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/Cart';

export default function WishListItem(props) {

    const { wishListItems } = useContext(CartContext)

    return (
        <div className="search-form login-form fadeToRight" style={{width: '100%'}}>
            <div className="cart-list">
                {
                    wishListItems.length === 0 && 
                    <div>
                        No cart
                    </div>
                }
                {
                    wishListItems.map((item, index) => {
                        return (
                            <div className="cart-item flex">
                                <div className="cart-product-img">
                                    <img src={item.productImg[0]} width="80px" height="100%"></img>
                                </div>
                                <div className="cart-product-name">{item.productName}</div>
                                <div className="cart-product-price">{item.productPrice}</div>
                                <div className="cart-product-totalprice">Add to cart</div>
                                <div className="cart-product-delete"
                                    // onClick={removeFromCart}
                                    id={item._id}>
                                    <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}