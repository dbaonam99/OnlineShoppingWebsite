import React, { Component } from "react";
import "../App.css";
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import BannerV2 from '../components/BannerV2.js'
import Header from "../components/Header/Header";
import ShopBody from "../components/ShopBody";
import bg from '../assets/S3.jpg'

class Women extends Component {
    render() {
        return (
            <div className="Women">
                <Header/>
                <BannerV2 bannerImage={bg} position={'120px'}/>
                <ShopBody/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Women;
