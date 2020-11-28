import React from 'react';
import '../../App.css';
import {
    withRouter
  } from "react-router-dom"; 

  
function BannerV3(props) { 

    return(
        <div className="BannerV2">
            <div 
                className="newsbanner-container another-banner" 
                style={{ 
                    backgroundImage: `url(${props.bannerImage})`
                }}
                >
                <div className="newsbanner-overlay flex-center another-overlay">
                    <div className="newsbanner-title banner-v3-white">
                        {props.collectionTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BannerV3);