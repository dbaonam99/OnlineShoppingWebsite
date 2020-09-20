import React, { Component } from "react";
import "../App.css";
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import BannerV2 from '../components/BannerV2.js'
import Header from '../components/Header.js'
// import Service from "../components/Service.js"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <BannerV2/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Home;
