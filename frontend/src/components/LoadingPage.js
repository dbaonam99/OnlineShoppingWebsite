import React, { useRef } from 'react';
import '../Styles/LoadingPage.css'
export default function LoadingPage(props) {

    const loading = useRef()
    // const viewPortH = loading.getBoundingClientRect().height;
    const windowH = window.innerHeight;
    // const browserUiBarsH = viewPortH - windowH; 
    console.log(windowH)

    return(
        <div 
            className={props.loading ? "loading-page" : "loading-page disable-loading"} 
            ref={loading} 
            style={{height: `${windowH}px)`}}
        >
            <div className="loading-page-container flex-center">
                <p className="loading-text hello">Hello!</p>
            </div>
            <div className="loading-page-container flex-center">
                <p className="loading-text welcome">Welcome to SOBER shop</p>
            </div> 
        </div>
    )
}