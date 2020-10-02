import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product.js';
import axios from 'axios';

export default function BestSeller(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    let height = 750;
    if (products.length) {
        products.sort((a,b) =>  b.productSold - a.productSold)
        if (products.length <= 5) {
            height = 360;
        }
    }
    
    return(
        <div 
            className="BestSeller"
            style={{minHeight: `${height}px`}}
        >
            {products.map(function(item, index) {
                return (
                    <Product 
                        key={index}
                        imgUrl={item.imgUrl} 
                        imgUrlHover={item.imgUrlHover} 
                        productTitle={item.productTitle}
                        productPrice={item.productPrice}
                        productSale={item.productSale}
                        productSold={item.productSold}
                    />
                )
            })}
        </div>
    )
}