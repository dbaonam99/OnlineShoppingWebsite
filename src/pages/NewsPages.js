import React, { Component } from "react";
import "../App.css";
import NewsBanner from '../components/NewsBanner.js'
import Header from '../components/Header.js'

export default class NewsPages extends Component {
    render() {
        return (
            <div className="NewsPages">
                <Header/>
                <NewsBanner/>
            </div>
        );
    }
}
