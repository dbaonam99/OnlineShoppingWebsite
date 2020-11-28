import React, { useEffect } from "react";
import "../App.css";
import NewsBanner from '../components/Banner/NewsBanner.js'
import NewsBody from '../components/News/NewsBody.js'
import Header from '../components/Header/Header.js'
import Newsletter from "../components/Layouts/Newsletter";
import Footer from "../components/Layouts/Footer";

export default function NewsPages() {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return (
        <div className="NewsPages">
            <Header/>
            <NewsBanner/>
            <NewsBody/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}
