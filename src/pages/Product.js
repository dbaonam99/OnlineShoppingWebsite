import React, {  } from "react";
import "../App.css";
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import ProductBody from "../components/Product/ProductBody.js";
import HeaderV2 from "../components/Header/HeaderV2";
import ProductReview from "../components/Product/ProductReview.js";
import ProductRecommend from "../components/Product/ProductRecommend.js";

export default function ProductDetail() {

    const products = (
        {
            id: 1,
            productName: "Azure Tote",
            productSale: "$200.00",
            productPrice: "$250.00",
            productCate: "Jacket",
            productColor: "Grey",
            productSize: "Large",
            productSex: "Men",
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
            ],
            productDes: "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            productVote: [
                {
                    name: "Nam",
                    ratingTitle : "Nice",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velLorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 5,
                    ratingImg: [
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
                    ]
                },
                {
                    name: "Tien",
                    ratingTitle : "love it",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 4,
                    ratingImg: [
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                    ]
                },
                {
                    name: "Trung",
                    ratingTitle : "cool",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 3,
                    ratingImg: [
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                    ]
                },
                {
                    name: "Tu",
                    ratingTitle : "good",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 3,
                    ratingImg: [
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-4.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg",
                        "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-3.jpg",
                    ]
                },
                {
                    name: "Tung",
                    ratingTitle : "suck",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 1,
                    ratingImg: []
                },
                {
                    name: "Thinh",
                    ratingTitle : "fucking sucks",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 1,
                    ratingImg: []
                },
                {
                    name: "Tram",
                    ratingTitle : "Good",
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d",
                    ratingDate : "01.01 2020",
                    ratingStar: 1,
                    ratingImg: []
                },
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
                productImg={products.productImg}
                productDes={products.productDes}
                productVote={products.productVote}
                productPrice={products.productPrice}
            />
            <ProductReview
                productDes={products.productDes}
                productVote={products.productVote}
                ratingImg={products.ratingImg}
            />
            <ProductRecommend/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
