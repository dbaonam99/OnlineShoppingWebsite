import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import BannerV2 from '../components/Banner/BannerV2.js'
import Header from '../components/Header/Header.js'
import ShopBody from "../components/Shop/ShopBody";
import bg from '../assets/S3.jpg'
import axios from 'axios'
import { withRouter } from "react-router-dom";

function Shop(props) {

    const [products, setProducts] = useState([]);
    let sex = props.location.pathname.split('/')[1]
    let cate = props.location.pathname.split('/')[2]

    useEffect(() => {
        sex.toLowerCase() === "men" ? sex = "man" : sex = "woman"
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                const virtualData = []
                for(let i in res.data) { 
                    if (!cate) {
                        if (res.data[i].productSex.toLowerCase() === sex) {
                            virtualData.push(res.data[i])
                        }
                    } else {
                        if (res.data[i].productSex.toLowerCase() === sex && cate && res.data[i].productGroupCate.toLowerCase().split(' ').join('-') === cate) {
                            virtualData.push(res.data[i])
                        } else if (res.data[i].productSex.toLowerCase() === sex && cate && res.data[i].productCate.toLowerCase().split(' ').join('-') === cate) {
                            virtualData.push(res.data[i])
                        }
                    }

                }
                setProducts(virtualData)
            }
        )
    },[sex, cate])
    
    return (
        <div className="Men">
            <Header/>
            <BannerV2 bannerImage={bg} position={'120px'}/>
            <ShopBody
                products={products}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default withRouter(Shop);
