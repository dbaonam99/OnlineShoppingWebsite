import React, { Component } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import BannerV2 from '../components/Banner/BannerV2.js'
import Header from '../components/Header/Header.js'
import ShopBody from "../components/Shop/ShopBody";
import bg from '../assets/S3.jpg'

class Men extends Component {
    render() {
        return (
            <div className="Men">
                <Header/>
                <BannerV2 bannerImage={bg} position={'120px'}/>
                <ShopBody/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Men;
