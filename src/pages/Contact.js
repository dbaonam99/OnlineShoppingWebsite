import React, { Component } from "react";
import "../App.css";
import Newsletter from "../components/Newsletter.js"
import Footer from "../components/Footer.js"
import BannerV2 from '../components/Banner/BannerV2.js'
import Header from '../components/Header/Header.js'
import bg from '../assets/contact.jpg'
import ContactBody from '../components/ContactBody.js'
import GetInTouch from "../components/GetInTouch";

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Header/>
                <BannerV2 bannerImage={bg} position={'-70px'}/>
                <ContactBody/>
                <GetInTouch/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Contact;
