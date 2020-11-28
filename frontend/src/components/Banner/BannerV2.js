import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
    withRouter
  } from "react-router-dom"; 

  
function BannerV2(props) {

    const location = props.history.location.pathname.split('/')[(props.history.location.pathname.split('/').length-1)]

    let locationText = ""
    if (location.split('-').length > 1) {
        locationText = location.split('-').join(' ')
    } else {
        locationText = location
    }

    return(
        <div className="BannerV2">
            <div 
                className="newsbanner-container another-banner" 
                style={{ 
                    backgroundImage: `url(${props.bannerImage})`,
                    backgroundPosition: props.position
                }}
                >
                <div className="newsbanner-overlay flex-center another-overlay">
                    <div className="newsbanner-title">
                        {locationText}
                    </div>
                    <div className="newsbanner-breadcrumb flex-center">
                        <div 
                            style={{cursor: 'pointer'}}
                            onClick={()=>{
                                props.history.push('/')
                            }}
                        >Home</div>
                        <FontAwesomeIcon icon={faAngleRight} className="cart-icon" style={{margin: '0 10px'}}/>
                        <div>{locationText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BannerV2);