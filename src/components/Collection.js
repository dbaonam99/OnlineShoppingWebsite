import React, { Component } from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Collection extends Component {
    render() {
        return(
            <div className="Collection">
                <div className="collection-container">
                    <div className="collection-box">
                        <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/woman.jpg" alt="z"></img>
                        <div className="collection-overlay flex-center">
                            <ScrollAnimation className="collection-title" animateIn='bounceInDown'>Woman Collection</ScrollAnimation>
                            <div className="collection-link">Discover Now</div>
                        </div>
                    </div>
                    <div className="collection-box">
                        <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/man.jpg" alt="z"></img>
                        <div className="collection-overlay flex-center">
                            <ScrollAnimation className="collection-title" animateIn='bounceInDown'>Man Collection</ScrollAnimation>
                            <div className="collection-link">Discover Now</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
