import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product.js';
import axios from 'axios'

export default function SalesProducts(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    //Get product selling
    const sellingProduct = [];
    for (let i = 0; i < products.length; i++) {
        if (Number(products[i].productSale) > 0) {
            sellingProduct.push(products[i]);
        }
    }

    let height = 750;
    if (sellingProduct.length) {
        if (sellingProduct.length <= 5) {
            height = 360;
        }
    }

    return(
        <div className="SalesProducts" style={{ minHeight: `${height}px`}}>
            {sellingProduct.map(function(item, index) {
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