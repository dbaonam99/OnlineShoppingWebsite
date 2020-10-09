import React, { useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomeTabContent(props) {

    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);
    const products = props.products;
    const height = props.height;

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLimit(limit + 5);
        }, 1500);
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
                            product={item}
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