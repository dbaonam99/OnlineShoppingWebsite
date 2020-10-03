import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js'
import axios from 'axios'

export default function ProductRecommend(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    const recommendProducts = [];
    products.filter((item, index) => {
        if (item.productCate === props.productCate) {
            recommendProducts.push(item)
        }
        if (item.productSex === props.productSex) {
            recommendProducts.push(item)
        }
    })

    return(
        <div className="ProductRecommend">
            <div className="newsletter-container flex-center">
                <div className="newsletter-title">Related products</div>
                <div className="RecommendProduct">
                    {recommendProducts.slice(0,5).map(function(item, index) {
                        return (
                            <Product 
                                key={index}
                                product={item}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="product-info-line"></div>
        </div>
    )
}
