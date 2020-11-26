import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js'
import RangeSlider from './RangeSlider.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFilter, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';

function ShopBody(props) {

    const [product, setProduct] = useState([]);
    const [constProduct, setConstProduct] = useState([]);
    const [gridTab, setGridTab] = useState(3);
    const [currentTab, setCurrentTab] = useState(1);
    const location = props.location.pathname.split('/')[1];
    const sortedCate = props.sortedCate
    const [sortPriceValue, setSortPriceValue] = useState([])

    useEffect(()=>{
        setProduct(props.products)
        setConstProduct(props.products)
    }, [props.products])

    let width, height, marginLeft, marginRight, classWidth = "";
    if (gridTab === 1) {
        width = '128'; // six
        height = '153';
        marginLeft = '16';
        marginRight = '16';
        classWidth = 'fix_width_six'
    } else if (gridTab === 2) {
        width = '160'; // five
        height = '190';
        marginLeft = '16';
        marginRight = '16';
        classWidth = 'fix_width_five'
    }else if (gridTab === 3) {
        width = '208'; // four
        height = '247';
        marginLeft = '16';
        marginRight = '16';
        classWidth = 'fix_width_four'
    }


    const soldProduct = [...product];
    if (soldProduct.length > 0) { 
        soldProduct.sort((a,b) => b.productSold - a.productSold)
    }
    const dateProductVirtual = [...product];
    const dateProduct = [];
    if (dateProductVirtual) {
        dateProductVirtual.sort((a,b)=> new Date(b.productDate) - new Date(a.productDate));
        for (let i in dateProductVirtual) {
            const today = new Date();
            const productDate = new Date(dateProductVirtual[i].productDate);
            if (((today - productDate)/(1000 * 3600 * 24)) < 10) {
                dateProduct.push(dateProductVirtual[i])
            }
        }
    }
    const sellingProduct = [];
    if (product.length > 0) {
        for (let i = 0; i < product.length; i++) {
            if (Number(product[i].productSale) > 0) {
                sellingProduct.push(product[i]);
            }
        }
    }

    const chooseCateLink = (event) => {
        props.history.push(`/${location}/${(event.target.id).toLowerCase().split(' ').join('-')}`)
    }

    const chooseSize = (event) => {
        const virtualProduct = []
        const id = event.target.id
        for (let i in constProduct) {
            for (let j in constProduct[i].productSize) {
                if (constProduct[i].productSize[j].toLowerCase() === id) {
                    virtualProduct.push(constProduct[i])
                }
            }
        }
        setProduct(virtualProduct)
    }

    const choosePrice = () => {
        const virtualProduct = []
        for (let i in constProduct) {
            console.log(sortPriceValue[1])
            if (constProduct[i].productPrice >= sortPriceValue[0] && constProduct[i].productPrice <= sortPriceValue[1]) {
                virtualProduct.push(constProduct[i])
            }
        }
        setProduct(virtualProduct)
    }

    return(
        <div className="ShopBody">
            <div className="shopbody-container">
                <div className="shopbody-filter">
                    <div className="shopbody-filter-cate">
                        <div className="shopbody-filter-title">Product Categories</div>
                        <div className="shopbody-filter-catelist">
                            {sortedCate.map((item, index) => 
                                <div 
                                    className="shopbody-filter-catelink" 
                                    key={index}
                                    id={item.productCate}
                                    onClick={chooseCateLink}
                                >
                                    {item.productCate}
                                </div>
                            )}
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="shopbody-filter-size">
                        <div className="shopbody-filter-title">Size</div>
                        <div className="shopbody-filter-catelist">
                            <div 
                                className="shopbody-filter-catelink" 
                                id="small"
                                onClick={chooseSize}
                            >
                                Small
                            </div>
                            <div 
                                className="shopbody-filter-catelink" 
                                id="medium"
                                onClick={chooseSize}
                            >
                                Medium
                            </div>
                            <div 
                                className="shopbody-filter-catelink" 
                                id="large"
                                onClick={chooseSize}
                            >
                                Large
                            </div>
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="shopbody-filter-price">
                        <div className="shopbody-filter-title">Price</div>
                        <RangeSlider
                            setSortPriceValue={setSortPriceValue}
                        />
                    </div>
                    <div 
                        className="shopbody-filter-submit btn"
                        onClick={choosePrice}
                    >
                        <p>Filter</p>
                    </div>
                </div>
                <div className="shopbody-main">
                    <div className="shopbody-first flex">
                        <div className="shopbody-tab flex">
                            <div 
                                onClick={() => {setCurrentTab(1)}}
                                className={currentTab === 1 ? "shopbody-tab-item active" : "shopbody-tab-item"}
                                >
                                All Products
                            </div>
                            <div 
                                onClick={() => {setCurrentTab(2)}}
                                className={currentTab === 2 ? "shopbody-tab-item active" : "shopbody-tab-item"}
                                >
                                Hot Products
                            </div>
                            <div 
                                onClick={() => {setCurrentTab(3)}}
                                className={currentTab === 3 ? "shopbody-tab-item active" : "shopbody-tab-item"}
                                >
                                New Products
                            </div>
                            <div 
                                onClick={() => {setCurrentTab(4)}}
                                className={currentTab === 4 ? "shopbody-tab-item active" : "shopbody-tab-item"}
                                >
                                Sales Products
                            </div>
                        </div>

                        <div className="shopbody-option flex">
                            <div className="shopbody-option-grid flex">
                                <div 
                                    className="grid-icon-container"
                                    onClick={()=> { setGridTab(1) }}
                                >
                                    <FontAwesomeIcon 
                                            icon={faTh} 
                                            className={gridTab === 1 ? "grid-icon grid-icon-active" : "grid-icon"}
                                        />
                                </div>
                                <div className="grid-icon-container">
                                    <FontAwesomeIcon 
                                            icon={faThLarge} 
                                            className={gridTab === 2 ? "grid-icon grid-icon-active" : "grid-icon"}
                                            onClick={()=> { setGridTab(2) }}
                                        />
                                </div>
                                <div className="grid-icon-container">
                                    <FontAwesomeIcon 
                                            icon={faCircle} 
                                            className={gridTab === 3 ? "grid-icon grid-icon-active" : "grid-icon"}
                                            onClick={()=> { setGridTab(3) }}
                                        />
                                </div>
                            </div>
                            <div className="shopbody-option-filter flex">
                                <FontAwesomeIcon icon={faFilter} className="filter-icon"/>
                                <p style={{marginLeft: '10px'}}>Filter</p>
                            </div>
                        </div>
                    </div>
                    <div className="shopbody-line"></div>
                    { currentTab === 1 &&
                        <div className="shopbody-products">
                            {product.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        marginLeft={marginLeft}
                                        marginRight={marginRight}
                                        gridTab={gridTab}
                                        classWidth={classWidth}
                                    />
                                )
                            })}
                        </div>
                    }
                    { currentTab === 2 &&
                        <div className="shopbody-products">
                            {soldProduct.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        marginLeft={marginLeft}
                                        marginRight={marginRight}
                                        gridTab={gridTab}
                                        classWidth={classWidth}
                                    />
                                )
                            })}
                        </div>
                    }
                    { currentTab === 3 &&
                        <div className="shopbody-products">
                            {
                                dateProduct.length === 0 &&
                                <div style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    marginTop: '150px'
                                }}>
                                    there's nothing here yet
                                </div>
                            }
                            {dateProduct.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        marginLeft={marginLeft}
                                        marginRight={marginRight}
                                        gridTab={gridTab}
                                        classWidth={classWidth}
                                    />
                                )
                            })}
                        </div>
                    }
                    { currentTab === 4 &&
                        <div className="shopbody-products">
                            {sellingProduct.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        marginLeft={marginLeft}
                                        marginRight={marginRight}
                                        gridTab={gridTab}
                                        classWidth={classWidth}
                                    />
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
            <div className="shopbody-line"></div>
        </div>
    )
}
export default withRouter(ShopBody)
