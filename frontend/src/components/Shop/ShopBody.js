import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js'
import RangeSlider from './RangeSlider.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFilter, faTh, faThLarge, faTimes } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';

function ShopBody(props) {

    const [product, setProduct] = useState([]);
    const [constProduct, setConstProduct] = useState([]);
    const [gridTab, setGridTab] = useState(2);
    const [currentTab, setCurrentTab] = useState(1);
    const location = props.location.pathname.split('/')[1];
    const sortedCate = props.sortedCate
    const [sortPriceValue, setSortPriceValue] = useState([])

    useEffect(()=>{
        setProduct(props.products)
        setConstProduct(props.products)
    }, [props.products])

    let width, height, parentHeight, marginLeft, marginRight, classWidth = "";
    if (gridTab === 1) {
        width = `${100/6}%`; // six
        parentHeight = `${100/6}vw`;
        height = `calc(${parentHeight} - 68px)`;
    } else if (gridTab === 2) {
        width = '20%'; // five;
        parentHeight = '20vw';
        height = `calc(${parentHeight} - 68px)`;
    } else if (gridTab === 3) {
        width = '25%'; // four
        parentHeight = '25vw';
        height = `calc(${parentHeight} - 68px)`;
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
            if (constProduct[i].productFinalPrice >= sortPriceValue[0] && constProduct[i].productFinalPrice <= sortPriceValue[1]) {
                virtualProduct.push(constProduct[i])
            }
        }
        setProduct(virtualProduct)
    }

    const [filterBox, setFilterBox] = useState(false)
    const [cateFilter, setCateFilter] = useState("")
    const [sizeFilter, setSizeFilter] = useState("")
    const openFilterBox = () => {
        setFilterBox(true)
    }

    const filterMobile = () => {
        const virtualProduct = [] 
        if (cateFilter !== "") {
            for (let i in constProduct) { 
                if (constProduct[i].productCate === cateFilter) {
                    virtualProduct.push(constProduct[i])
                }
            }
        }
        if (virtualProduct.length === 0) {
            virtualProduct.push(...constProduct)
        }
        const virtualProduct2 = []
        if (sizeFilter !== "") {
            for (let i in virtualProduct) { 
                if (virtualProduct[i].productSize === sizeFilter) {
                    virtualProduct2.push(virtualProduct[i])
                }
            }
        }
        if (virtualProduct2.length === 0) {
            virtualProduct2.push(...virtualProduct)
        }
        const virtualProduct3 = [] 
        for (let i in virtualProduct2) { 
            if (virtualProduct2[i].productFinalPrice >= sortPriceValue[0] && virtualProduct2[i].productFinalPrice <= sortPriceValue[1]) {
                virtualProduct3.push(virtualProduct2[i])
            }
        } 
        if (virtualProduct3.length === 0) {
            virtualProduct3.push(...virtualProduct2)
        }
        setProduct(virtualProduct3)
        setFilterBox(false)
    } 

    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLimit(limit + 5);
        }, 1500);
    }

    //Limit products
    const limitProduct = product.slice(0, limit);
    const limitProductSold = soldProduct.slice(0, limit);
    const limitProductDate = dateProduct.slice(0, limit);
    const limitProductSelling = sellingProduct.slice(0, limit);

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
                        <div className="shopbody-countproduct">{product.length} products</div>
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
                            <div className="shopbody-option-filter flex"
                                onClick={openFilterBox}>
                                <FontAwesomeIcon icon={faFilter} className="filter-icon"/>
                                <p style={{marginLeft: '10px'}}>Filter</p>
                            </div>
                            {
                                filterBox && 
                                <div className="filter-box">
                                    <div className="filter-box-header flex"style={{color: '#111'}}>
                                        <p >Filter</p>
                                        <div  
                                            onClick={()=>{
                                                setFilterBox(false)
                                            }}
                                            style={{
                                                height: '40px', 
                                                width: '40px',  
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                alignItems: 'flex-start',
                                                fontSize: '20px'
                                            }}>
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div className="filter-box-main flex-col">
                                        <select 
                                            className="input"
                                            value={cateFilter}
                                            onChange={(event)=>{
                                                if (event.target.value === "Select a category") {
                                                    setCateFilter("")
                                                } else {
                                                    setCateFilter(event.target.value)
                                                }
                                        }}>
                                            <option>Select a category</option>
                                            {sortedCate.map((item, index) => 
                                                <option  
                                                    key={index} 
                                                >
                                                    {item.productCate}
                                                </option>
                                            )}
                                        </select> 
                                        <select className="input"
                                            value={sizeFilter}
                                            onChange={(event)=>{
                                                if (event.target.value === "Any size") {
                                                    setSizeFilter("")
                                                } else {
                                                    setSizeFilter(event.target.value)
                                                }
                                            }}
                                        >
                                            <option>Any size</option>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select> 
                                        <div>
                                            <div className="filter-box-text">Price</div>
                                            <RangeSlider
                                                setSortPriceValue={setSortPriceValue}
                                            />
                                        </div>
                                        <div 
                                            className="shopbody-filter-submit btn"
                                            onClick={filterMobile}
                                        >
                                            <p>Filter</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="shopbody-line"></div>
                    { currentTab === 1 &&
                        <div className="shopbody-products">
                            {limitProduct.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        parentHeight={parentHeight}
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
                            {limitProductSold.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        parentHeight={parentHeight}
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
                                limitProductDate.length === 0 &&
                                <div style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    marginTop: '150px'
                                }}>
                                    there's nothing here yet
                                </div>
                            }
                            {limitProductDate.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        parentHeight={parentHeight}
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
                            {limitProductSelling.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        product={item}
                                        width={width}
                                        height={height}
                                        parentHeight={parentHeight}
                                        marginLeft={marginLeft}
                                        marginRight={marginRight}
                                        gridTab={gridTab}
                                        classWidth={classWidth}
                                    />
                                )
                            })}
                        </div>
                    }

                    {(product.length > 10 && product.length >= limit) && 
                        <div className="tab-loadmore flex-center">
                            <div 
                                className="tab-loadmore-btn btn"
                                onClick={loadMore}
                                >
                                Load More
                            </div>
                            {loading === true && 
                                <div className="tab-loadmore-btn tab-loadmore-loading btn-nothover">
                                    <div className="loading-icon"></div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="shopbody-line"></div>
        </div>
    )
}
export default withRouter(ShopBody)
