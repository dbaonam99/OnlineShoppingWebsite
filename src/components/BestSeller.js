import React, { Component } from 'react';
import '../App.css';
import Product from './Product.js';


export default class BestSeller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: [
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                },
                {
                    imgUrl: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg",
                    imgUrlHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-433x516.jpg",
                    productTitle: "Hooded Coat",
                    productPrice: 200
                }
            ]
        }
    }

    render() {
        const { product } = this.state;
        return(
            <div className="BestSeller">
                {product.map(function(item, index) {
                    return (
                        <Product 
                            key={index}
                            imgUrl={item.imgUrl} 
                            imgUrlHover={item.imgUrlHover} 
                            productTitle={item.productTitle}
                            productPrice={item.productPrice}
                        />
                    )
                })}
            </div>
        )
    }
}