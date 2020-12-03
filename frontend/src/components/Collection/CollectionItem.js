import React, { useState } from 'react'
import {
    withRouter
} from 'react-router-dom' 
function CollectionItem(props) {

    const [hoverPrice, setHoverPrice] = useState(false)

    const redirect = () => {
        window.scrollTo(0,0);
        props.history.push(`/products/${props.product._id}`)
    }  

    return (
        <div className="CollectionItem">
            <img src={props.product.productImg[0]} alt=""></img>
            <div className="collection-overlay-container flex-center">
                <div className="collectionitem-overlay">
                    <div 
                        className="collectionitem-title"
                        onClick={redirect}
                    >{props.product.productName}</div>
                    <div className="collectionitem-des">{props.product.productDes}</div>
                    <div 
                        className="collectionitem-price"
                        onMouseEnter={()=>{
                            setHoverPrice(true)
                        }}
                        onMouseLeave={()=>{
                            setHoverPrice(false)
                        }}
                    >
                        { props.product.productFinalPrice &&
                            <p 
                                className={hoverPrice ? "collectionitem-price-text price-transform displayNone" : "collectionitem-price-text"}
                            >
                                {props.product.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                            </p>
                        }
                        <div 
                            onClick={redirect}
                            className={hoverPrice ? "addtocart-btn-collection price-transform addtocart-btn-collectio-hover" : "addtocart-btn-collection"}
                        >
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(CollectionItem)