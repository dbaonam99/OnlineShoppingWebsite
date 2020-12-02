import React, { useEffect, useState } from "react";
import "../App.css";
import RecommendBanner from "../components/Home/RecommendBanner.js"
import HomeTab from "../components/Home/HomeTab.js"
import Collection from '../components/Home/Collection.js'
import FashionNews from '../components/Home/FashionNews.js'
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import Banner from '../components/Banner/Banner.js'
import Header from '../components/Header/Header.js'
import axios from 'axios';

function Home() {
    const [collection, setCollection] = useState([]);
    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/collection`)
            .then(res => {
                setCollection(res.data)
            }
        )
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return (
        <div className="Home">
            <Header/>
            <Banner 
                collection = {collection}
            />
            <RecommendBanner/>
            <HomeTab/>
            <Collection
                collection = {collection}
            />
            <FashionNews/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Home;
