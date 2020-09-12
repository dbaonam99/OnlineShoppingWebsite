import React, { Component } from 'react';
import '../App.css';

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