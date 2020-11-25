import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js'
import RangeSlider from './RangeSlider.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFilter, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";

export default function ShopBody(props) {

    const product = props.products;
    const [gridTab, setGridTab] = useState(3);
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(()=>{

    },[])
    
    //Get all category
    const cate = Object.values(product.reduce((a, {productCate}) => {
        a[productCate] = a[productCate] || {productCate, count: 0};
        a[productCate].count++;
        return a;
    }, Object.create(null)));
    //Sort and splice category by product count
    cate.sort((a,b) =>  b.count - a.count)
    const splicedCate = cate.splice(0,5);
    splicedCate.sort((a, b) => b.count - a.count);
    const sortedCate = [];
    for (let i = 0; i < splicedCate.length; i++) {
        sortedCate.push(splicedCate[i].productCate);
    }
    //Get all color
    const color = Object.values(product.reduce((a, {productColor}) => {
        a[productColor] = a[productColor] || {productColor, count: 0};
        a[productColor].count++;
        return a;
    }, Object.create(null)));
    //Sort and splice COLOR by product count
    color.sort((a,b) =>  b.count - a.count)
    const splicedColor = color.splice(0,3);
    splicedColor.sort((a, b) => b.count - a.count);
    const sortedColor = [];
    for (let i = 0; i < splicedColor.length; i++) {
        sortedColor.push(splicedColor[i].productColor);
    }

    //Get all Size
    const size = Object.values(product.reduce((a, {productSize}) => {
        a[productSize] = a[productSize] || {productSize, count: 0};
        a[productSize].count++;
        return a;
    }, Object.create(null)));
    //Sort and splice COLOR by product count
    const sortedSize = [];
    for (let i = 0; i < size.length; i++) {
        sortedSize.push(size[i].productSize);
    }

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


    return(
        <div className="ShopBody">
            <div className="shopbody-container">
                <div className="shopbody-filter">
                    <div className="shopbody-filter-cate">
                        <div className="shopbody-filter-title">Product Categories</div>
                        <div className="shopbody-filter-catelist">
                            {sortedCate.map((item, index) => 
                                <div 
                                    className="" 
                                    key={index}
                                >
                                    {item}
                                </div>
                            )}
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="shopbody-filter-color">
                        <div className="shopbody-filter-title">Color</div>
                        <div className="shopbody-filter-catelist">
                            {sortedColor.map((item, index) => 
                                <div 
                                    className="" 
                                    key={index}
                                >
                                    {item}
                                </div>
                            )}
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="shopbody-filter-size">
                        <div className="shopbody-filter-title">Size</div>
                        <div className="shopbody-filter-catelist">
                            {sortedSize.map((item, index) => 
                                <div 
                                    className="" 
                                    key={index}
                                >
                                    {item}
                                </div>
                            )}
                        </div>
                        <div className="filter-line"></div>
                    </div>
                    <div className="shopbody-filter-price">
                        <div className="shopbody-filter-title">Price</div>
                        <RangeSlider/>
                    </div>
                    <div className="shopbody-filter-submit btn">
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
                                Sale Products
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
