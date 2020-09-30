import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons';

export default function Account(props) {

    const [tabID, setTabID] = useState(0);

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
                    <div className="search-form login-form fadeToRight">
                        <form className="flex-col">
                            <button>cart</button>
                        </form>
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
