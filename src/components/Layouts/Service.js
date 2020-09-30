import React, { Component } from 'react';
import '../../App.css';

export default class Service extends Component {

    render() {
        return(
            <div className="Service">
                <div className="service-container flex-center">
                    <div className="service-box flex-center">
                        <img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/shipping-icon.png"></img>
                        <div className="service-title">
                            Free Shipping Worldwide
                        </div>
                        <div className="service-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </div>
                    </div>
                    <div className="service-box flex-center">
                        <img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/money-icon.png"></img>
                        <div className="service-title">
                            Money Back Guarantee
                        </div>
                        <div className="service-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </div>
                    </div>
                    <div className="service-box flex-center">
                        <img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/support-icon.png"></img>
                        <div className="service-title">
                            24/7 Customer Service
                        </div>
                        <div className="service-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </div>
                    </div>
                </div>
                <div className="service-line"></div>
            </div>
        )
    }
}
