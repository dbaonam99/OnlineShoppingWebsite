import React, { useRef, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
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
                    ratingText : "Lorem Duis aute irure dolor in reprehenderit zxc zczin voluptate velit esse cillum Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum Lorem Duis Lorem",
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
    
    const [tabId, setTabId] = useState(0);

    const bRef = useRef(null);

    const handleClick = () => {
        smoothScroll.scrollTo('review');
        setTabId(1)
    }

    var smoothScroll = {
        
        timer: null,
    
        stop: function () {
            clearTimeout(this.timer);
        },
    
        scrollTo: function (id, callback) {
            var settings = {
                duration: 1000,
                easing: {
                    outQuint: function (x, t, b, c, d) {
                        return c*((t=t/d-1)*t*t*t*t + 1) + b;
                    }
                }
            };
            var percentage;
            var startTime;
            var node = document.getElementById(id);
            var nodeTop = node.offsetTop;
            var nodeHeight = node.offsetHeight;
            var body = document.body;
            var html = document.documentElement;
            var height = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            var windowHeight = window.innerHeight
            var offset = window.pageYOffset;
            var delta = nodeTop - offset;
            var bottomScrollableY = height - windowHeight;
            var targetY = (bottomScrollableY < delta) ?
                (bottomScrollableY - (height - nodeTop - nodeHeight + offset)):
                delta - 30;
    
            startTime = Date.now();
            percentage = 0;
    
            if (this.timer) {
                clearInterval(this.timer);
            }
    
            function step () {
                var yScroll;
                var elapsed = Date.now() - startTime;
    
                if (elapsed > settings.duration) {
                    clearTimeout(this.timer);
                }
    
                percentage = elapsed / settings.duration;
    
                if (percentage > 1) {
                    clearTimeout(this.timer);
    
                    if (callback) {
                        callback();
                    }
                } else {
                    yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                    window.scrollTo(0, yScroll);
                    this.timer = setTimeout(step, 10);     
                }
            }
    
            this.timer = setTimeout(step, 10);
        }
    };
    
    

    const setTab = (tab) => {
        setTabId(tab)
    }

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
                scrollOnLick={handleClick}
            />
            <ProductReview
                productDes={products.productDes}
                productVote={products.productVote}
                ratingImg={products.ratingImg}
                bRef={bRef}
                tabId={tabId}
                setTab={setTab}
                id={"review"}
            />
            <ProductRecommend/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
