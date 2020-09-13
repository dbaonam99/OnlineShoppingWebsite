import React, { Component } from 'react';
import '../App.css';
import News from './News.js'

export default class FashionNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [
                {
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPING",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPING",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPING",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                }
            ]
        }
    }

    render() {
        const { news } = this.state;
        return(
            <div className="FashionNews">
                <div className="news-container">
                    <div className="news-title">Fashion News</div>
                    <div className="news-box">
                        {news.map(function(item) {
                            return (
                                <News 
                                    newImg={item.newImg} 
                                    newTime={item.newTime}
                                    newCate={item.newCate}
                                    newTitle={item.newTitle}
                                    newContent={item.newContent}
                                />
                            )
                        })}
                    </div>
                    <div className="news-line"></div>
                </div>
            </div>
        )
    }
}
