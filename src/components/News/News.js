import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

function News(props) {

    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/news/${news._id}`);
    }

    const news = props.news;

    return(
        <div 
            className="News"
            onClick={redirect}>
            <div className="news-img">
                <img src={news.newImg} alt="z"></img>
            </div>
            <div className="news-info flex-center">
                <div className="news-time">{news.newTime}</div>
                <div className="news-cate">{news.newCate}</div>
            </div>
            <div className="news-title-box">
                {news.newTitle}
            </div>
            <p className="news-content tripledot">
                {news.newContent}
            </p>
            <div className="news-link">
                <a href="#.com">Read More</a>
            </div>
        </div>
    )
}

export default withRouter(News);
