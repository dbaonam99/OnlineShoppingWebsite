import React, { useEffect } from "react";
import "../App.css";
import BannerV4 from "../components/Banner/BannerV4";
import CheckoutBody from "../components/CheckoutBody";
import Header from "../components/Header/Header";
import Footer from "../components/Layouts/Footer";
import Newsletter from "../components/Layouts/Newsletter";

function Checkout() {
    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return (
        <div className="Contact">
            <Header/>
            <BannerV4
                bannerImage={""} collectionTitle={"Checkout"}
            />
            <CheckoutBody/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Checkout;
