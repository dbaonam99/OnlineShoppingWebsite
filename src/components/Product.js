import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.imgUrl
        }
    }
    render() {
        const {url} = this.state;
        return(
            <div className="Product"
                onMouseOver={()=> {this.setState({ url: this.props.imgUrlHover })}}
                onMouseOut={()=> {this.setState({ url: this.props.imgUrl })}}
            >
                <div className="product-img">
                    <div className="img" style={{backgroundImage: `url(${url})`}}></div>
                    <div className="product-overlay">
                        <div className="product-cart product-icon">
                            <FontAwesomeIcon icon={faCartPlus} className="cart-icon cart-icon-right"/>
                        </div>
                        <div className="product-wishlist product-icon">
                            <FontAwesomeIcon icon={faHeart} className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="product-title">
                    {this.props.productTitle}
                </div>
                <div className="product-price">
                    {this.props.productPrice} VNĐ
                </div>
            </div>
        )
    }
}