import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/Cart';

export default function CartItem(props) {

    const { cartItems, minusCount, plusCount, removeFromCart } = useContext(CartContext)

    return (
        <div className="search-form login-form fadeToRight" style={{width: '100%'}}>
            <div className="cart-list">
                {
                    cartItems.length === 0 && 
                    <div>
                        No cart
                    </div>
                }
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className="cart-item flex">
                                <div className="cart-product-img">
                                    <img src={item.productImg[0]} width="80px" height="100%"></img>
                                </div>
                                <div className="cart-product-name">{item.productName}</div>
                                <div className="cart-product-amount flex-center">
                                    <div className="count-cart noselect">
                                        <div 
                                            className="count-cart-item left flex-center"
                                            id={item._id}
                                            onClick={minusCount}
                                            >
                                            <FontAwesomeIcon  style={{pointerEvents: 'none'}} icon={faMinus}/>
                                        </div> 
                                        <div className="count-cart-item text flex-center">
                                            <form style={{width: '100%', margin: '0', height: '30px'}}>
                                                <input 
                                                    style={{width: '100%', margin: '0', height: '30px'}}
                                                    type="text" 
                                                    value={item.count}
                                                    // onChange={e => setCountCart(Number(e.target.value))}
                                                />
                                            </form>
                                        </div>
                                        <div 
                                            className="count-cart-item right flex-center"
                                            id={item._id}
                                            onClick={plusCount}
                                            >
                                            <FontAwesomeIcon  style={{pointerEvents: 'none'}} icon={faPlus}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product-price">{item.productPrice}</div>
                                <div className="cart-product-totalprice">{item.productPrice}</div>
                                <div className="cart-product-delete"
                                    onClick={removeFromCart}
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