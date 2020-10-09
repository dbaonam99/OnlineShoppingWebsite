import React, { Component } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import BannerV3 from '../components/Banner/BannerV3.js'
import HeaderV3 from '../components/Header/HeaderV3.js'
import bg from '../assets/collection2.jpg'
import CollectionList from '../components/Collection/CollectionList.js'

class Collection extends Component {
    render() {
        return (
            <div className="Collection">
                <HeaderV3/>
                <BannerV3 bannerImage={bg} collectionTitle={'Women Collection'}/>
                <CollectionList/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Collection;
