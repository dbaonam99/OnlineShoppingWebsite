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
            location: this.props.history.location.pathname
        }
    }

    render() {
        const { location } = this.state;
        const locationText = location.slice(1);

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
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewsBanner);