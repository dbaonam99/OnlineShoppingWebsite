import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import HeaderV2 from "../components/Header/HeaderV2";
import axios from 'axios'
import NewsContent from "../components/News/NewsContent";

export default function ProductDetail(props) {

    const [news, setNews] = useState();

    useEffect(() => {
        axios.get(`http://pe.heromc.net:4000/news/` + props.match.params.id)
            .then(res => {
                setNews(res.data)
            }
        )
    },[props.match.params.id])
    
    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return (
        <div className="ProductDetail">
            <HeaderV2/>
            <NewsContent
                news={news}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}