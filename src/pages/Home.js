import React, { Component } from "react";
import "../App.css";
import RecommendBanner from "../components/RecommendBanner.js"
import HomeTab from "../components/HomeTab.js"
import Collection from '../components/Collection.js'
import FashionNews from '../components/FashionNews.js'
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import Banner from '../components/Banner.js'
import Header from '../components/Header/Header.js'
// import Service from "../components/Service.js"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <Banner/>
                <RecommendBanner/>
                <HomeTab/>
                <Collection/>
                <FashionNews/>
                {/* <Service/> */}
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Home;
