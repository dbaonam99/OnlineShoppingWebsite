import React, { useState } from 'react';
import '../../App.css';
import BestSeller from "./BestSeller.js"
import NewProducts from "./NewProducts.js"
import SalesProducts from "./SalesProducts.js"

export default function HomeTab() {
    const [currentTab, setCurrentTab] = useState(1)
    const [isActive, setIsActive] = useState(1)
    // const [loading, setLoading] = useState(true)

    // useEffect(()=> {
    //     const a = setInterval(() => {
    //         setLoading(false)
    //     }, 1000);
    //     return(()=>{
    //         clearInterval(a)
    //     })
    // }, [currentTab])

    return(
        <div className="HomeTab">
            <div className="home-tab flex-center">
                <p onClick={() => {setCurrentTab(1); setIsActive(1)}} className={isActive === 1 ? "home-tab-active" : ""}>Best Sellers</p>
                <p onClick={() => {setCurrentTab(2); setIsActive(2)}} className={isActive === 2 ? "home-tab-active" : ""}>New Products</p>
                <p onClick={() => {setCurrentTab(3); setIsActive(3)}} className={isActive === 3 ? "home-tab-active" : ""}>Sales Products</p>
            </div>
            <div className="tab-content">
                {/* <div className={loading === false ? "tab-loading" : "tab-loading tab-loading-display"}>
                    <div className="flex-center">
                        <div className="loading-icon"/>
                        <div className="loading-icon"/>
                        <div className="loading-icon"/>
                    </div>
                </div> */}
                {currentTab === 1 && <BestSeller/>}
                {currentTab === 2 && <NewProducts/>}
                {currentTab === 3 && <SalesProducts/>}
            </div>
            <div className="tab-loadmore flex-center">
                <div className="tab-loadmore-btn flex-center">
                    Load More
                </div>
            </div>
        </div>
    )
}