import React, { useState } from 'react';
import '../../App.css';
import ProductQuickView from './ProductQuickView';
import ProductOverlay from './ProductOverlay'
import { withRouter } from 'react-router-dom'

function Product(props) {

    const [hover, setHover] = useState(false);
    const [view, setView] = useState(false);
    const product = props.product;

    const closeView = (event) => {
        document.body.style.overflow = 'unset';
        // if (event.target.className === 'ProductQuickView') {
        setView(false)
        // } else {
        //     setView(true)
        // }
    }
    const openView = () => {
        setView(true)
    }
    if(view){
        document.body.style.overflow = 'hidden';
    }
    const classWidth = props.classWidth;

    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/products/${product._id}`);
    }

    return(
        <div 
            className={`Product opa ${classWidth}`}
            style={{ 
                width: `${props.width}px`,
                marginLeft: `${props.marginLeft}px`,
                marginRight: `${props.marginRight}px`
            }}
        >
            <ProductQuickView 
                view={view} 
                closeView={closeView}
                product={product}
            />
            <div className="product-img"
                style={{ 
                    height: `${props.height}px`,
                }}
                onMouseOver={()=> {setHover(true)}}
                onMouseOut={()=> {setHover(false)}}
                >
                <div className="product-tag">
                    {
                        product.productSale > 0 && <div className="product-tag-item sale">
                            {product.productSale}%
                        </div>
                    }
                    {
                        product.productSold >= 40 && <div className="product-tag-item hot">
                            HOT
                        </div>
                    }
                    {
                        product.productSale > 0 && <div className="product-tag-item new">
                            NEW
                        </div>
                    }
                </div>
                <div    
                    className="product-img-bg"
                    onClick={redirect}>
                    <img 
                        className=""
                        src={product.productImg[0]} alt=""></img>
                    <img 
                        className={hover === false ? "img-defalt hide" : "img-defalt"}
                        src={product.productImg[1]} alt=""></img>
                </div>
                <ProductOverlay
                    product={product}
                    openView={openView}
                />
            </div>
            <div className="product-title">
                {product.productName}
            </div>
            <div className="product-price">
                {product.productPrice} VNĐ
            </div>
        </div>
    )
}
export default withRouter(Product);