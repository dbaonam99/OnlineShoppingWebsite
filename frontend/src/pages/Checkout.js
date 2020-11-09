import React from "react";
import "../App.css";
import BannerV4 from "../components/Banner/BannerV4";
import CheckoutBody from "../components/CheckoutBody";
import Header from "../components/Header/Header";

function Checkout() {
    return (
        <div className="Contact">
            <Header/>
            <BannerV4
                bannerImage={""} collectionTitle={"Checkout"}
            />
            <CheckoutBody/>
        </div>
    )
}
export default Checkout;
