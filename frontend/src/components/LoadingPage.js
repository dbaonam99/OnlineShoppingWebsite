import React from 'react';
import '../Styles/LoadingPage.css'
import Div100vh from 'react-div-100vh';

export default function LoadingPage(props) {

    return(
        <Div100vh 
            className={props.loading ? "loading-page" : "loading-page disable-loading"}
        >
            <div className="loading-page-container flex-center">
                <p className="loading-text hello">Hello!</p>
            </div>
            <div className="loading-page-container flex-center">
                <p className="loading-text welcome">Welcome to SOBER shop</p>
            </div> 
        </Div100vh>
    )
}