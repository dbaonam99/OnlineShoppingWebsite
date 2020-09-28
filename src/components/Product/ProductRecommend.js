import React, { Component } from 'react';
import '../../App.css';

export default function ProductRecommend() {
    return(
        <div className="Newsletter">
            <div className="newsletter-container flex-center">
                <div className="newsletter-title">Related products</div>
                <div className="newsletter-small">Get timely updates from your favorite products</div>
                <form className="newsletter-form">
                    <input className="newsletter-input" placeholder="Enter your email address" type="email"></input>
                    <button className="newsletter-btn">Subcribe</button>
                </form>
                <div className="newsletter-line"></div>
            </div>
        </div>
    )
}
