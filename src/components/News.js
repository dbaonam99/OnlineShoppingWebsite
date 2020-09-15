import React, { Component } from 'react';
import '../App.css';

export default class News extends Component {
    render() {
        return(
            <div className="News">
                <div className="news-img">
                    <img src={this.props.newImg} alt="z"></img>
                </div>
                <div className="news-info flex-center">
                    <div className="news-time">{this.props.newTime}</div>
                    <div className="news-cate">{this.props.newCate}</div>
                </div>
                <div className="news-title-box">
                    {this.props.newTitle}
                </div>
                <p className="news-content tripledot">
                    {this.props.newContent}
                </p>
                <div className="news-link">
                    <a href="#.com">Read More</a>
                </div>
            </div>
        )
    }
}
