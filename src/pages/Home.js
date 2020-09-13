import React, { Component } from "react";
import "../App.css";
import RecommendBanner from "../components/RecommendBanner.js"
import HomeTab from "../components/HomeTab.js"
import Collection from '../components/Collection.js'

class Home extends Component {
    constructor() {
        super();
        this.state = {
        blogs: []
        };
    }

    render() {
        return (
            <div className="Home">
                <RecommendBanner/>
                <HomeTab/>
                <Collection/>
            </div>
        );
    }
}
export default Home;
