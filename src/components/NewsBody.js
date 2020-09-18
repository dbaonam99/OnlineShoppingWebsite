import React, { Component } from 'react';
import '../App.css';

export default class NewsBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearchFocus: false
        }
    }

    render() {
        const { news, currentTabText, currentTab } = this.props;
        
        var filterNews = [];
        if (currentTab === -1) {
            filterNews = news;
        } else if (currentTabText) {
            filterNews = news.filter((item) => {
                return item.newCate === currentTabText
                
            })
        } else {
            filterNews = news;
        }
        const firstPost = filterNews;
        const nextPosts = filterNews.slice(1);

        return(
            <div className="NewsBody">
                <div className="newsbody-container">
                    <div className="newsbody-post">
                        <div className="newsbody-big flex-center">
                            <img className="newsbody-big-img" src={firstPost[0].newImg} alt="z"/>
                            <div className="newsbody-info flex-center">
                                <div className="newsbody-time">{firstPost[0].newTime}</div>
                                <div className="newsbody-cate">{firstPost[0].newCate}</div>
                            </div>
                            <div className="newsbody-title">{firstPost[0].newTitle}</div>
                            <div className="newsbody-content">{firstPost[0].newContent}</div>
                            <div className="newsbody-link">Read More</div>
                        </div>
                        <div className="newsbody-line"></div>
                        {nextPosts.map((item, index) => {
                            return(
                                <div className="newsbody-small" key={index}> 
                                    <div className="newsbody-small-container">
                                        <img className="newsbody-small-img" src={item.newImg} alt="z"/>
                                        <div className="newsbody-small-left">
                                            <div className="newsbody-small-info flex-center">
                                                <div className="newsbody-time">{item.newTime}</div>
                                                <div className="newsbody-cate">{item.newCate}</div>
                                            </div>
                                            <div className="newsbody-title">{item.newTitle}</div>
                                            <div className="newsbody-content">{item.newContent}</div>
                                            <div className="newsbody-link">Read More</div>
                                        </div>
                                    </div>
                                    <div className="newsbody-smaill-line"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="newsbody-widget">
                        <div className="widget-search">
                            <div className="widget-title">Search</div>
                            <form className={ this.state.isSearchFocus === true ? "widget-form widget_search_click" : "widget-form"} 
                                onMouseEnter={() => { this.setState({ isSearchFocus: true})}}
                                onMouseLeave={() => { this.setState({ isSearchFocus: false})}}>
                                <input placeholder="Search the site"></input>
                                <button>Search</button>
                            </form>
                        </div>
                        <div className="widget-pop">
                            <div className="widget-title">Popular Posts</div>
                        </div>
                        <div className="widget-cate">category</div>
                        <div className="widget-tag">TAg</div>
                    </div>
                </div>
            </div>
        )
    }
}
