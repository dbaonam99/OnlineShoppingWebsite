import React, { Component } from "react";
import "../App.css";
import RecommendBanner from "../components/RecommendBanner.js"
import HomeTab from "../components/HomeTab.js"

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
            </div>
        );
    }
}
export default Home;
