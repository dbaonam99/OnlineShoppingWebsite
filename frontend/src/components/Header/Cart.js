import React, { useContext, useState } from 'react';
import '../../App.css';
import '../../Styles/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import WishListItem from './WishListItem';
import { CartContext } from '../../contexts/Cart';
import { withRouter } from 'react-router-dom';

function Account(props) {

    const [tabID, setTabID] = useState(0)
    const {
        total
    } = useContext(CartContext)

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
                    <CartItem/>
                }
                { tabID === 1 && 
                    <WishListItem/>
                }
            </div>
            { tabID === 0 &&
                <div className="cart-checkout-box flex-center">
                    <div className="cart-checkout-text flex">
                        <p>Total: </p>
                        {total &&
                            <p> {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                        }
                    </div>
                    <div 
                        className="cart-checkout-btn btn"
                        onClick={()=>{
                            if (total > 0) {    
                                props.history.push(`/checkout`);
                                window.location.reload(false);
                            }
                        }}
                    >Checkout</div> 
                </div>
            }
        </div>
    )
}
export default withRouter(Account);
