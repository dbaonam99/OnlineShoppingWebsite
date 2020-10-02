import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product.js';
import axios from 'axios'

export default function NewProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])


    let height = 750;
    //Sort by product sold
    if (products.length) {
        products.reverse();
        if (products.length <= 5) {
            height = 360;
        }
    }


    return(
        <div className="NewProducts" style={{ minHeight: `${height}px`}}>
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