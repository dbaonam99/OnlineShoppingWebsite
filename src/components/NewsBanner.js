import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class NewsBanner extends Component {
    render() {
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
                            <div>News</div>
                        </div>
                        <div className="newsbanner-nav">
                            <div>All Blog Posts</div>
                            <div>Inspiration</div>
                            <div>Fashion</div>
                            <div>Shopping</div>
                            <div>Lifestyle</div>
                            <div>Photography</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}