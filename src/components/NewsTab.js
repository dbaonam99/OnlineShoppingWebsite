import React, { Component } from 'react';
import '../App.css';
import {
    withRouter
  } from "react-router-dom"; 

class NewsTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 1
        }
    }

    render() {
        const { currentTab } = this.state;
        return(
            <div className="NewsTab">
                <div className="newstab-container">
                    <div className="newstab-nav">
                        <div 
                            className={currentTab === 1 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 1})}}
                            >All Blog Posts</div>
                        <div
                            className={currentTab === 2 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 2})}}
                            >Inspiration</div>
                        <div
                            className={currentTab === 3 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 3})}}
                            >Fashion</div>
                        <div
                            className={currentTab === 4 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 4})}}
                            >Shopping</div>
                        <div
                            className={currentTab === 5 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 5})}}
                            >Lifestyle</div>
                        <div
                            className={currentTab === 6 ? "newstab-nav-active" : ""}
                            onClick={() => {this.setState({currentTab: 6})}}
                            >Photography</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewsTab);