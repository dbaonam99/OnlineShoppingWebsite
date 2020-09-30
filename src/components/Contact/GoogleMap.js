import React, { Component } from 'react';
import '../../App.css';

class GoogleMap extends Component {
    render() {
        return (
            <div className="google-map">
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6724.258138017331!2d106.79943073170435!3d10.869923660434521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20VNU-HCM!5e1!3m2!1sen!2s!4v1600841063066!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    aria-hidden="false" 
                    tabIndex="0"/>
            </div>
        );
    }
}

export default GoogleMap;