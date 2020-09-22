import React, { Component } from 'react';
import '../App.css';
import Product from './Product.js'
import RangeSlider from './RangeSlider.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFilter, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";

export default class ShopBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [
                {
                    id: 1,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Woman",
                    productColor: "Grey",
                    productSize: "Large",
                },
                {
                    id: 2,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Uncategorized",
                    productColor: "Pink",
                    productSize: "Large",
                },
                {
                    id: 3,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Man",
                    productColor: "Black",
                    productSize: "Large",
                },
                {
                    id: 4,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Accessories",
                    productColor: "Black",
                    productSize: "Large",
                },
                {
                    id: 5,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Footwear",
                    productColor: "Black",
                    productSize: "Large",
                },
                {
                    id: 6,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 7,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 8,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 9,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 10,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 11,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Bags",
                    productColor: "Black",
                    productSize: "Medium",
                },
                {
                    id: 12,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "test",
                    productColor: "Blue",
                    productSize: "Small",
                },
                {
                    id: 13,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Man",
                    productColor: "Blue",
                    productSize: "Small",
                },
                {
                    id: 14,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Man",
                    productColor: "Black",
                    productSize: "Small",
                },
                {
                    id: 15,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Woman",
                    productColor: "NavyBlue",
                    productSize: "Small",
                },
                {
                    id: 16,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Woman",
                    productColor: "NavyBlue",
                    productSize: "Small",
                },
                {
                    id: 17,
                    productName: "Azure Tote",
                    productSale: "$200.00",
                    productPrice: "$250.00",
                    productImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4-433x516.jpg",
                    productImgHover: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4-433x516.jpg",
                    productCate: "Woman",
                    productColor: "NavyBlue",
                    productSize: "Small",
                },
            ],
            grid: 1,
        }
    }

    render() {
        const { product, grid } = this.state;

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

        console.log(grid)

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
                        <div className="shopbody-filter-submit">
                            <p>Filter</p>
                        </div>
                    </div>
                    <div className="shopbody-main">
                        <div className="shopbody-first flex">
                            <div className="shopbody-tab flex">
                                <div className="shopbody-tab-item active">
                                    All Products
                                </div>
                                <div className="shopbody-tab-item">
                                    Hot Products
                                </div>
                                <div className="shopbody-tab-item">
                                    New Products
                                </div>
                                <div className="shopbody-tab-item">
                                    Sale Products
                                </div>
                            </div>

                            <div className="shopbody-option flex">
                                <div className="shopbody-option-grid flex">
                                    <FontAwesomeIcon icon={faTh} className="grid-icon"/>
                                    <FontAwesomeIcon icon={faThLarge} className="grid-icon"/>
                                    <FontAwesomeIcon icon={faCircle} className="grid-icon"/>
                                </div>
                                <div className="shopbody-option-filter flex">
                                    <FontAwesomeIcon icon={faFilter} className="filter-icon"/>
                                    <p style={ {marginLeft: '10px'} }>Filter</p>
                                </div>
                            </div>
                        </div>
                        <div className="shopbody-line"></div>
                        <div className="shopbody-products">
                            {product.map(function(item, index) {
                                return (
                                    <Product
                                        key={index}
                                        imgUrl={item.productImg} 
                                        imgUrlHover={item.productImgHover} 
                                        productTitle={item.productTitle}
                                        productPrice={item.productPrice}
                                        grid={grid}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="shopbody-line"></div>
            </div>
        )
    }
}
