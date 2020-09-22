import React, { Component } from 'react';
import '../App.css';
import GoogleMap from './GoogleMap';

export default class GetInTouch extends Component {

    render() {
        return(
            <div className="GetInTouch flex">
                <div className="getintouch-container">
                    <div className="map">
                        <GoogleMap/>
                    </div>
                    <div className="getintouch-form">
                        <label>Get In Touch</label>
                        <input placeholder="Name"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Subject"></input>
                        <input placeholder="Message"></input>
                        <button>Send message</button>
                    </div>
                </div>
            </div>
        )
    }
}
