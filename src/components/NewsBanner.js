import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
    withRouter
  } from "react-router-dom"; 

class NewsBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.history.location.pathname,
            currentTab: 1
        }
    }

    render() {
        const { location, currentTab } = this.state;
        const locationText = location.slice(1);
        console.log(locationText)
        return(
            <div className="NewsBanner">
                <div className="newsbanner-container">
                    <div className="newsbanner-overlay flex-center">
                        <div className="newsbanner-title">
                            News
                        </div>
                        <div className="newsbanner-breadcrumb flex-center">
                            <div>Home</div>

                            <FontAwesomeIcon icon={faAngleRight} className="cart-icon"/>
                            <div>{locationText}</div>
                        </div>
                        <div className="newsbanner-nav">
                            <div 
                                className={currentTab === 1 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 1})}}
                                >All Blog Posts</div>
                            <div
                                className={currentTab === 2 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 2})}}
                                >Inspiration</div>
                            <div
                                className={currentTab === 3 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 3})}}
                                >Fashion</div>
                            <div
                                className={currentTab === 4 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 4})}}
                                >Shopping</div>
                            <div
                                className={currentTab === 5 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 5})}}
                                >Lifestyle</div>
                            <div
                                className={currentTab === 6 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: 6})}}
                                >Photography</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewsBanner);