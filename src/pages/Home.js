import React, { Component } from "react";
import "../App.css";
import RecommendBanner from "../components/RecommendBanner.js"

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
            </div>
        );
    }
}
export default Home;
