import React, { useEffect, useState } from 'react';
import '../../App.css';
import HomeTabContent from "./HomeTabContent.js"
import axios from 'axios'

export default function HomeTab() {
    const [currentTab, setCurrentTab] = useState(1)
    const [isActive, setIsActive] = useState(1)
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])
    
    //Get product sold
    let height = 550;
    if (products.length) {
        products.sort((a,b) =>  b.productSold - a.productSold);
        if (products.length <= 5) {
            height = 260;
        }
    }

    const dateProductVirtual = [...products];
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

    // Get product selling
    const sellingProduct = []
    if (products.length) {
        for (let i = 0; i < products.length; i++) {
            if (Number(products[i].productSale) > 0) {
                sellingProduct.push(products[i]);
            }
        }
        if (sellingProduct.length <= 5) {
            height = 360;
        }
    }

    return(
        <div className="HomeTab">
            <div className="home-tab flex-center">
                <p onClick={() => {setCurrentTab(1); setIsActive(1)}} className={isActive === 1 ? "home-tab-active" : ""}>Best Sellers</p>
                <p onClick={() => {setCurrentTab(2); setIsActive(2)}} className={isActive === 2 ? "home-tab-active" : ""}>New Products</p>
                <p onClick={() => {setCurrentTab(3); setIsActive(3)}} className={isActive === 3 ? "home-tab-active" : ""}>Sales Products</p>
            </div>
            <div className="tab-content">
                { // best seller
                    currentTab === 1 && 
                    <HomeTabContent 
                        products={products}
                        height={height} 
                    />
                }
                { // new product
                    currentTab === 2 && 
                    <HomeTabContent 
                        products={dateProduct}
                        height={height}
                    />
                }
                { // sale product
                    currentTab === 3 && 
                    <HomeTabContent 
                        products={sellingProduct}
                        height={height}
                    />
                }
            </div>
        </div>
    )
}