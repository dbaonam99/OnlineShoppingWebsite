import React, { } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../App.css';

function News(props) {

    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/news/${news._id}`);
    }

    const news = props.news;
    const cateLink = (`/news/category/${news.newCate}`).toLowerCase()

    const date = new Date(news.newTime)
    const day = date.getDate(date)
    const month = date.getMonth(date) + 1
    const year = date.getFullYear(date)
    return(
        <div 
            className="News">
            <div className="news-img"
                onClick={redirect}>
                <img src={news.newImg} alt=""></img>
            </div>
            <div className="news-right">
                <div className="news-info flex-center">
                    <div className="news-time">{day}.{month}.{year}</div>
                    <Link to={cateLink} className="news-cate" onClick={()=>{window.scrollTo(0,0);}}>{news.newCate}</Link>
                </div>
                <div 
                    className="news-title-box"
                    onClick={redirect}>
                    {news.newTitle}
                </div>
                <div className="news-content"
                    dangerouslySetInnerHTML={{__html: news.newContent}}>
                </div>
                <div 
                    className="news-link flex-center"
                    onClick={redirect}>
                    <p>Read More</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(News);
