import React from 'react'

export default function CollectionItem(props) {

    return (
        <div 
            className="CollectionItem">
            <img src={props.img} alt=""></img>
            <div className="collectionitem-overlay">
                <div className="collectionitem-title">{props.name}</div>
                <div className="collectionitem-des">{props.des}</div>
                <div className="collectionitem-price">
                    <div>
                        <p>${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                            <div className="addtocart-btn-collection">
                                ADD TO CART
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}