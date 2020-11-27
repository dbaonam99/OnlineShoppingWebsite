import React, { useEffect, useRef } from 'react';
import '../../App.css';
import {
    withRouter
  } from "react-router-dom"; 

  
function BannerV3(props) {

    const bannerRef = useRef()
    useEffect(()=>{
        const coordinate = bannerRef.current.getBoundingClientRect()
        if (coordinate.y !== 0) {
            window.scrollTo(0,0);
        }
    }, [])

    return(
        <div className="BannerV2" ref={bannerRef}>
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