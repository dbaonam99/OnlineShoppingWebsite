import React, { Component } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

export default class ContactBody extends Component {

    render() {
        return(
            <div className="ContactBody">
                <div className="contact-info">
                    <div className="contact-info-title">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="contact-info-detail">
                        <div className="contact-info-item">
                            <FontAwesomeIcon icon={faHome} className="contact-icon"/>
                            <p className="contact-info-title2">ADDRESS</p>
                            <p>Song Hanh, khu pho 6, Thu Duc, TP HCM</p>
                        </div>
                        <div className="contact-info-item">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                            <p className="contact-info-title2">phone</p>
                            <p>+1 248-785-8545</p>
                        </div>
                        <div className="contact-info-item">
                            <FontAwesomeIcon icon={faMailBulk} className="contact-icon"/>
                            <p className="contact-info-title2">email</p>
                            <p>sober@google.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
