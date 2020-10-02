import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product.js';
import axios from 'axios'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SalesProducts(props) {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLimit(limit + 5);
        }, 1500);
    }

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

    //Limit products
    const limitProducts = sellingProduct.slice(0, limit);

    return(
        <div>
            <div className="SalesProducts" style={{ minHeight: `${height}px`}}>
                {limitProducts.map(function(item, index) {
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
            {(sellingProduct.length > 10 && sellingProduct.length >= limit) && 
                <div className="tab-loadmore flex-center">
                    <div 
                        className="tab-loadmore-btn flex-center"
                        onClick={handleClick}
                        >
                        Load More
                    </div>
                    {loading === true && 
                        <div className="tab-loadmore-btn tab-loadmore-loading flex-center">
                            <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `0s`}}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.2s`}}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircle} className="loading-icon" style={{animationDelay: `.4s`}}></FontAwesomeIcon>
                        </div>
                    }
                </div>
            }
        </div>
    )
}