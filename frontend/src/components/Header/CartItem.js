import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/Cart';

export default function CartItem(props) {

    const { cartItems, minusCount, plusCount, removeFromCart, updateCount } = useContext(CartContext)

    return (
        <div className="search-form login-form fadeToRight" style={{width: '100%'}}>
            <div className="cart-list">
                {
                    cartItems.length === 0 && 
                    <div style={{textAlign: 'center', color: '#777'}}>
                        No products in the cart.
                    </div>
                }
                {
                    cartItems.length > 0 && 
                    <div className="cart-item flex" style={{border: 'none'}}>
                        <div className="cart-product-img flex" style={{alignItems: 'center', justifyContent: 'flex-start'}}>Image</div>
                        <div className="cart-product-mobile flex">
                            <div className="cart-product-name flex-center" style={{alignItems: 'center', justifyContent: 'flex-start'}}>Name</div>
                            <div className="cart-product-amount flex-center" style={{alignItems: 'center', justifyContent: 'center'}}>Amount</div>
                            <div className="cart-product-price flex" style={{alignItems: 'center', justifyContent: 'center'}}>Price</div>
                            <div className="cart-product-totalprice flex" style={{alignItems: 'center', justifyContent: 'center'}}>Total price</div>
                            <div className="cart-product-delete" style={{visibility: "hidden"}}>
                                <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className="cart-item flex" key={index}>
                                <div className="cart-product-img">
                                    {
                                        item.productImg &&
                                        <img src={item.productImg[0]} width="80px" height="100%" alt=""></img>
                                    }
                                </div>
                                {item.productFinalPrice &&
                                    <div className="cart-product-mobile flex">
                                        <div className="cart-product-name flex" style={{alignItems: 'center', justifyContent: 'flex-start'}}>{item.productName}</div>
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
                                                            id={item._id}
                                                            onChange={updateCount}
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
                                        <div className="cart-product-price flex" style={{alignItems: 'center', justifyContent: 'center'}}>{item.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                        <div className="cart-product-totalprice flex" style={{alignItems: 'center', justifyContent: 'center'}}>{(item.productFinalPrice * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                        <div className="cart-product-delete"
                                        onClick={removeFromCart}
                                        id={item._id}>
                                        <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                                    </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}