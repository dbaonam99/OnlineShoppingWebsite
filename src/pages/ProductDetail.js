import React, {  } from "react";
import "../App.css";
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import ProductBody from "../components/ProductBody";
import HeaderV2 from "../components/HeaderV2";

export default function ProductDetail() {

    const products = (
        {
            id: 1,
            productName: "Azure Tote",
            productSale: "$200.00",
            productPrice: "$250.00",
            productCate: "Woman",
            productColor: "Grey",
            productSize: "Large",
            productSex: "Women",
            productImg: [
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
            ]
        }
    )

    return (
        <div className="ProductDetail">
            <HeaderV2/>
            <ProductBody 
                productCate={products.productCate} 
                productName={products.productName}
                productSex={products.productSex}
                productImg={products.productImg}/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
