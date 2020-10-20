import React, { Component } from 'react';
import '../../App.css';

export default class Collection extends Component {
    render() {
        return(
            <div className="Collection">
                <div className="collection-container">
                    <div className="collection-box">
                        <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/woman.jpg" alt="z"></img>
                        <div className="collection-overlay flex-center">
                            <div className="collection-title">Woman Collection</div>
                            <div className="collection-link">Discover Now</div>
                        </div>
                    </div>
                    <div className="collection-box">
                        <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/man.jpg" alt="z"></img>
                        <div className="collection-overlay flex-center">
                            <div className="collection-title">Man Collection</div>
                            <div className="collection-link">Discover Now</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
