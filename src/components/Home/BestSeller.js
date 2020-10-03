import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js';
import axios from 'axios';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BestSeller(props) {

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

    let height = 750;
    if (products.length) {
        products.sort((a,b) =>  b.productSold - a.productSold)
        if (products.length <= 5) {
            height = 360;
        }
    }

    //Limit products
    const limitProducts = products.slice(0, limit);
    
    return(
        <div>
            <div className="BestSeller" style={{minHeight: `${height}px`}}>
                {limitProducts.map(function(item, index) {
                    return (
                        <Product 
                            key={index}
                            imgUrl={item.productImg[0]} 
                            imgUrlHover={item.productImg[1]} 
                            productName={item.productName}
                            productPrice={item.productPrice}
                            productSale={item.productSale}
                            productSold={item.productSold}
                            productVote={item.productVote}
                            productDes={item.productDes}
                            productCate={item.productCate}
                        />
                    )
                })}        
            </div>
            {(products.length > 10 && products.length >= limit) && 
                <div className="tab-loadmore flex-center">
                    <div 
                        className="tab-loadmore-btn btn"
                        onClick={handleClick}
                        >
                        Load More
                    </div>
                    {loading === true && 
                        <div className="tab-loadmore-btn tab-loadmore-loading btn-nothover">
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