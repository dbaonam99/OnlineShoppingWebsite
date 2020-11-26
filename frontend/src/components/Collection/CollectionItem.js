import React, { useState } from 'react'

export default function CollectionItem(props) {

    const [hoverPrice, setHoverPrice] = useState(false)
    return (
        <div className="CollectionItem">
            <img src={props.product.productImg[0]} alt=""></img>
            <div className="collection-overlay-container flex-center">
                <div className="collectionitem-overlay">
                    <div className="collectionitem-title">{props.product.productName}</div>
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
                        { props.product.productPrice &&
                            <p 
                                className={hoverPrice ? "collectionitem-price-text price-transform displayNone" : "collectionitem-price-text"}
                            >
                                ${props.product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </p>
                        }
                        <div 
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