import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import BannerV3 from '../components/Banner/BannerV3.js'
import HeaderV3 from '../components/Header/HeaderV3.js'
import Header from '../components/Header/Header.js'
// import bg from '../assets/collection2.jpg'
import CollectionList from '../components/Collection/CollectionList.js'
import Axios from "axios";
import { withRouter } from "react-router-dom";

function Collection(props) {

    const [collection, setCollection] = useState(null);
    const path = props.history.location.pathname.slice(12);

    useEffect(()=>{
        Axios.get(`http://pe.heromc.net:4000/collection/${path}`)
            .then(res => {
                setCollection(res.data)
            }
        )
    },[path])

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])
    
    return (
        <div className="Collection">
            {
                window.innerWidth > 900 && <HeaderV3/>
            }
            {
                window.innerWidth <= 900 && <Header/>
            }
            { collection &&
                <BannerV3 
                    bannerImage={collection.collectionBanner} 
                    collectionTitle={collection.collectionName}
                />
            }
            <CollectionList
                collection={collection}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default withRouter(Collection)
