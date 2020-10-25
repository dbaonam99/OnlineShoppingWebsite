import React, { useContext, useState } from 'react';
import '../../App.css';
import '../../Styles/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/Cart';

export default function Account(props) {

    const [tabID, setTabID] = useState(0);
    const { cartItems, cartCombine } = useContext(CartContext)
    const [countCart, setCountCart] = useState(1);

    return(
        <div className={props.cartOpen === false ? 'Cart displayNone' : 'Cart'}>
            <div className="search-header flex">
                <div className="search-title">Cart</div>
                <div
                    className="search-close"
                    onClick={props.clickToClose}
                    >
                    <FontAwesomeIcon 
                        icon={faTimes}
                        className="icon"
                        />
                </div> 
            </div >
            <div className={props.cartOpen === false ? '' : 'fadeIn'}>
                <div 
                    className='search-tab login-tab flex'>
                    <div 
                        className={tabID === 0 ? 'search-tab-cate search-tab-active' : 'search-tab-cate'}
                        onClick={() => setTabID(0)}
                        >
                        Cart
                    </div>
                    <div 
                        className={tabID === 1 ? 'search-tab-cate search-tab-active' : 'search-tab-cate'}
                        onClick={() => setTabID(1)}
                        >
                        Whishlist
                    </div>
                </div>
                { tabID === 0 &&
                    <div className="search-form login-form fadeToRight" style={{width: '100%'}}>
                        <div className="cart-list">
                            {
                                cartCombine.map((item, index) => {
                                    return (
                                        <div className="cart-item flex">
                                            <div className="cart-product-img">
                                                <img src={item.productImg[0]} width="80px" height="100%"></img>
                                            </div>
                                            <div className="cart-product-name">{item.productName}</div>
                                            <div className="cart-product-amount flex-center">
                                                <div className="count-cart noselect">
                                                    <div className="count-cart-item left flex-center"
                                                        onClick={() => { 
                                                            if (countCart > 1) setCountCart(countCart-1) 
                                                        }}
                                                        >
                                                        <FontAwesomeIcon icon={faMinus}/>
                                                    </div> 
                                                    <div className="count-cart-item text flex-center">
                                                        <form style={{width: '100%', margin: '0', height: '30px'}}>
                                                            <input 
                                                                style={{width: '100%', margin: '0', height: '30px'}}
                                                                type="text" 
                                                                value={countCart || item.count}
                                                                onChange={e => setCountCart(Number(e.target.value))}
                                                            />
                                                        </form>
                                                    </div>
                                                    <div 
                                                        className="count-cart-item right flex-center"
                                                        onClick={() => { setCountCart(countCart+1) }}
                                                        >
                                                        <FontAwesomeIcon icon={faPlus}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-product-price">{item.productPrice}</div>
                                            <div className="cart-product-totalprice">{item.productPrice * countCart}</div>
                                            <div className="cart-product-delete">
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                { tabID === 1 && 
                    <div className="search-form login-form fadeToLeft">
                        <form className="flex-col">
                            <button>wishlist</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
