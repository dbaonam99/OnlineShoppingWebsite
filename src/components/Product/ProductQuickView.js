import React, { useState } from 'react';
import '../../Styles/Product.css';
import '../../App.css';
import { faCartPlus, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from 'react-rating-stars-component';

export default function ProductQuickView(props) {

    const [countCart, setCountCart] = useState(1);
    
    let ratingList = props.productVote.map(a => a.ratingStar); // get all rating
    const totalRating = ratingList.reduce((a, b) => a + b, 0)
    const averageRating = totalRating/ratingList.length;

    const ratingStar = {
        size: 12,
        value: averageRating,
        edit: false,
        activeColor: "#fda32a",
        color: "#ddd",
        isHalf: true
    };

    return(
        <div>
            {
                props.view === true &&
                <div className='ProductQuickView'
                    onClick={props.closeView}>
                    <div 
                        className="productquickview-container flex"
                        onClick={()=>{}}
                    >
                        <div className="productquickview-slide">
                            <img src={props.imgUrl} alt=""/>
                        </div>

                        <div className="product-info-detail">
                            <div className="product-info-title">
                                {props.productName}
                            </div>
                            <div className="product-info-des" style={{width: '80%'}}>
                                {props.productDes}
                            </div>
                            <div 
                                className="product-info-vote"
                                onClick={props.scrollOnLick}
                                >
                                <ReactStars {...ratingStar} />
                                <p>
                                    ({ratingList.length} customer reviews)
                                </p>
                            </div>
                            <div className="product-info-price">
                                {props.productPrice} vnđ
                            </div>
                            <div className="product-info-cart flex">
                                <div className="count-cart noselect">
                                    <div className="count-cart-item left flex-center"
                                        onClick={() => { 
                                            if (countCart > 1) setCountCart(countCart-1) 
                                        }}
                                        >
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </div> 
                                    <div className="count-cart-item text flex-center">
                                        <form>
                                            <input 
                                                type="text" 
                                                value={countCart}
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
                                <div className="product-info-addtocart flex-center btn">
                                    <FontAwesomeIcon icon={faCartPlus}/>
                                    <p>Add to cart</p>
                                </div>
                                <div 
                                    className="product-info-wishlist flex-center">
                                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="product-info-line"></div>
                            <div className="product-info-cate flex">
                                <p>Category:</p>
                                <p>{props.productCate}</p>
                            </div>
                            <div className="product-info-line"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
